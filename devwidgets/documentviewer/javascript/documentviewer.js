/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/*
 * Dependencies
 *
 * /dev/lib/misc/trimpath.template.js (TrimpathTemplates)
 */

/*global $ */

require(["jquery", "sakai/sakai.api.core", "/devwidgets/documentviewer/lib/document-viewer/assets/viewer.js", "/devwidgets/video/jwplayer/swfobject.js"], function($, sakai) {

    /**
     * @name sakai.documentviewer
     *
     * @class documentviewer
     *
     * @description
     * Initialize the documentviewer widget
     *
     * @version 0.0.1
     * @param {String} tuid Unique id of the widget
     * @param {Boolean} showSettings Show the settings of the widget or not
     */
    sakai_global.documentviewer = function(tuid,showSettings,widgetData){

        var documentviewerPreview = "#" + tuid + " #documentviewer_preview";
        var $documentviewerPreview = $(documentviewerPreview);

        var getPath = function(data) {
            return "/p/" + data["jcr:name"];
        };

        var renderDocumentPreview = function(data){
            var url = window.location.protocol + '//' + window.location.host + getPath(data);
            var pdfDoc = {
                id: data['jcr:name'],
                title: data['sakai:pooled-content-file-name'],
                pages: data['sakai:pagecount'],
                resources: {
                    pdf: url,
                    page: {
                        image: url + ".page{page}-{size}.jpg"
                    }
                }
            };
            var container = documentviewerPreview;
            DV.load(pdfDoc, {
                container: container,
                width: "100%",
                height: 500,
                sidebar: false,
                text: false
            });
        };

        var renderImagePreview = function(url, lastMod){
            $documentviewerPreview.html("");
            var json = {};
            json.contentURL = url;
            if (lastMod){
                json.contentURL += "?_=" + lastMod;
            }
            json.sakai = sakai;
            sakai.api.Util.TemplateRenderer("documentviewer_image_template", json, $("#" + tuid + " #documentviewer_image_calculatesize"));
            var $imageRendered = $("#"+tuid+" #documentviewer_image_rendered");
            $imageRendered.bind('load', function(ev){
                var width = $imageRendered.width();
                var height = $imageRendered.height();
                // TODO we can probably avoid hardcoding the sizes here
                // Too wide but when scaled to width won't be too tall
                if (width > 920 && height / width * 920 <= 560){
                    $imageRendered.addClass("documentviewer_preview_width");
                // Too tall but when scaled to height won't be too wide
                } else if (height > 560 && width / height * 560 <= 920){
                    $imageRendered.addClass("documentviewer_preview_height");
                }
                $documentviewerPreview.append($imageRendered);
            });
        };

        var renderEmbedPreview = function(data){
            $documentviewerPreview.html(data);
        };

        var renderHTMLPreview = function(data){
            json.sakai = sakai;
            sakai.api.Util.TemplateRenderer("documentviewer_html_template", json, $documentviewerPreview);
            $("#documentviewer_html_iframe").attr("src", getPath(data));
            $("#documentviewer_html_iframe").attr("width", "920px");
            $("#documentviewer_html_iframe").attr("height", "560px");
            $("#documentviewer_html_iframe").attr("frameborder", "0");
        };

        var renderExternalHTMLPreview = function(url){
            json.sakai = sakai;
            sakai.api.Util.TemplateRenderer("documentviewer_externalhtml_template", json, $documentviewerPreview);
            $("#documentviewer_externalhtml_iframe").attr("src", url);
            $("#documentviewer_externalhtml_iframe").attr("frameborder", "0");
        };

        var renderVideoPlayer = function(url, preview_avatar){
            var so = createSWFObject(false, {}, {});
            so.addVariable('file', url);
            so.addVariable('provider', 'video');
            if (preview_avatar) {
                so.addVariable('image', preview_avatar);
            }
            so.addVariable('stretching','uniform');
            so.write("documentviewer_video_" + tuid);
        };

        var renderAudioPlayer = function(data){
            var so = createSWFObject(false, {}, {});
            so.addVariable('file', getPath(data));
            so.addVariable('provider', 'sound');
            so.addVariable('image', "/devwidgets/documentviewer/images/content_preview_audio.jpg");
            so.addVariable('stretching','fill');
            so.write("documentviewer_video_" + tuid);
        };

        var renderFlashPlayer = function(data){
            var so = createSWFObject(getPath(data), {'allowscriptaccess':'never'}, {});
            so.addParam('scale','exactfit');
            so.write("documentviewer_video_" + tuid);
        };

        var createSWFObject = function(url, params, flashvars){
            if (!url){
                url = "/devwidgets/video/jwplayer/player.swf";
            }
            var so = new SWFObject(url,'ply', '100%', '560','9','#000000');
            so.addParam('allowfullscreen','true');
            if (params.allowscriptaccess) {
                so.addParam('allowscriptaccess', params.allowscriptaccess);
            } else {
                so.addParam('allowscriptaccess', 'always');
            }
            so.addParam('wmode','opaque');
            sakai.api.Util.TemplateRenderer("documentviewer_video_template", {"tuid":tuid}, $documentviewerPreview);
            return so;
        };

        if (sakai.api.Content.hasPreview(widgetData.data)){
            var data = widgetData.data;
            var mimeType = data["_mimeType"];

            if (sakai.api.Content.isJwPlayerSupportedVideo(mimeType)){
                renderVideoPlayer(getPath(data));
            } else if (mimeType === "audio/mp3" || mimeType === "audio/x-aac") {
                renderAudioPlayer(data);
            } else if (mimeType === "application/x-shockwave-flash") {
                renderFlashPlayer(data);
            } else if (mimeType === "text/html") {
                renderHTMLPreview(data);
            } else if (mimeType === "x-sakai/link"){
                var pUrl = data["sakai:preview-url"];
                var pType = data["sakai:preview-type"];

                if (pUrl && pType === "iframe") {
                    renderExternalHTMLPreview(pUrl);
                } else if (pUrl && pType === "video") {
                    var avatar = data["sakai:preview-avatar"];
                    renderVideoPlayer(pUrl, avatar);
                } else if (pUrl && pType === "image") {
                    renderImagePreview(pUrl);
                } else if (pUrl && pType === "embed") {
                    renderEmbedPreview(pUrl);
                } else {
                    pUrl = widgetData["sakai:pooled-content-url"];
                    renderExternalHTMLPreview(pUrl);
                }
            } else if (mimeType === "image/vnd.adobe.photoshop") {
                renderStoredPreview(data);
            } else  if (mimeType.substring(0, 6) === "image/") {
                renderImagePreview(getPath(data), data["_body:lastModified"]);
            } else if (data["sakai:pagecount"]){
                renderDocumentPreview(data);
            }
        }

        // Indicate that the widget has finished loading
        sakai_global.documentviewer.isReady = true;
        $(window).trigger("ready.documentviewer.sakai", {});

    };
    sakai.api.Widgets.widgetLoader.informOnLoad("documentviewer");
});