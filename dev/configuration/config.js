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
define(function(){
    var config = {
        URL: {
            // Static URLs
            CONTENT_MEDIA_URL: "/dev/content_media.html",
            COURSES_SITES_URL: "/dev/courses_sites.html",
            GATEWAY_URL: "/",
            GROUP_EDIT_URL: "/group/edit",
            I10N_BUNDLE_URL: "/dev/lib/misc/l10n/globinfo/Globalization.__CODE__.min.js",
            I18N_BUNDLE_ROOT: "/dev/bundle/",
            INBOX_URL: "/inbox",
            LOGOUT_URL: "/logout",
            MY_DASHBOARD_URL: "/home",
            PEOPLE_URL: "/people",
            PROFILE_EDIT_URL: "/profile/edit",
            PUBLIC_CONTENT_MEDIA_URL: "/dev/public_content_media.html",
            PUBLIC_COURSES_SITES_URL: "/dev/public_courses_sites.html",
            PUBLIC_INSTITUTIONAL_LOGIN_URL: "/dev/i_index.html",
            PUBLIC_MY_DASHBOARD_URL: "/home",
            PUBLIC_PEOPLE_URL: "/dev/public_people.html",
            PUBLIC_SEARCH_URL: "/dev/public_search.html",
            SEARCH_CONTENT_URL: "/search/content",
            SEARCH_GENERAL_URL: "/search",
            SEARCH_PEOPLE_URL: "/search/people",
            SEARCH_GROUP_URL: "/search/groups",
            SEARCH_SITES_URL: "/search/sites",
            TINY_MCE_CONTENT_CSS: "/dev/css/FSS/fss-base.css,/dev/css/sakai/sakai.base.css,/dev/css/sakai/sakai.editor.css,/dev/css/sakai/sakai.show.css",
            TINY_MCE_EDITOR_CSS: "/dev/css/sakai/tinymce_editor_styling.css",
            USER_DEFAULT_ICON_URL_SMALL: "/dev/images/user_avatar_icon_32x32.png",
            USER_DEFAULT_ICON_URL: "/dev/images/user_avatar_icon_48x48.png",
            USER_DEFAULT_UPLOAD_FOLDER: "/private/uploads",

            // Services
            ACTIVITY_PERSONAL: "/var/search/activity/myfeed.json",
            ACTIVITY_SITE: "/var/search/activity/sitefeed.json",
            BATCH: "/system/batch",
            CAPTCHA_SERVICE: "/system/captcha",
            CHAT_GET_SERVICE: "/var/message/chat/__KIND__.json",
            CHAT_UPDATE_SERVICE: "/var/message.chatupdate.json",
            CONTACTS_FIND: "/var/contacts/find.json",
            CONTACTS_FIND_STATE: "/var/contacts/findstate.json",
            CONTACTS_FIND_ALL: "/var/contacts/find-all.json",
            CREATE_USER_SERVICE: "/system/userManager/user.create.html",
            DISCUSSION_GETPOSTS_THREADED: "/var/search/discussions/threaded.json?path=__PATH__&marker=__MARKER__",
            DISCUSSION_INITIALPOSTS_SERVICE: "/var/search/discussions/initialdiscussionposts.json?path=__PATH__&items=__ITEMS__&page=__PAGE__",
            GOOGLE_CHARTS_API: "http://chart.apis.google.com/chart",
            GROUP_CREATE_SERVICE: "/system/userManager/group.create.json",
            GROUPS_MANAGER: "/system/me/managedgroups.json",
            GROUPS_MEMBER: "/system/me/groups.json",
            HEADER_SERVICE: "/var/proxy/header.json",
            IMAGE_SERVICE: "/var/image/cropit",
            LOGIN_SERVICE: "/system/sling/formlogin",
            LOGOUT_SERVICE: "/system/sling/logout?resource=/dev/index.html",
            ME_SERVICE: "/system/me",
            MESSAGE_BOX_SERVICE: "/var/message/box.json",
            MESSAGE_BOXCATEGORY_SERVICE: "/var/message/boxcategory-all.json",
            POOLED_CONTENT_MANAGER: "/var/search/pool/me/manager.json",
            POOLED_CONTENT_MANAGER_ALL: "/var/search/pool/me/manager-all.json",
            POOLED_CONTENT_VIEWER: "/var/search/pool/me/viewer.json",
            POOLED_CONTENT_VIEWER_ALL: "/var/search/pool/me/viewer-all.json",
            POOLED_CONTENT_SPECIFIC_USER: "/var/search/pool/manager-viewer.json",
            POOLED_CONTENT_ACTIVITY_FEED: "/var/search/pool/activityfeed.json",
            PRESENCE_CONTACTS_SERVICE: "/var/presence.contacts.json",
            PRESENCE_SERVICE: "/var/presence.json",
            PROXY_RSS_SERVICE: "/var/proxy/rss.json?rss=",
            SAKAI2_TOOLS_SERVICE: "/var/proxy/s23/site.json?siteid=__SITEID__",
            // Replace these in widgets with proper widgetsave functions from magic
            SDATA_FETCH_BASIC_URL: "/sites/__PLACEMENT__/__TUID__",
            SDATA_FETCH_PLACEMENT_URL: "/sites/__PLACEMENT__",
            SDATA_FETCH_URL: "/sites/__PLACEMENT__/__TUID__/__NAME__",
            SDATA_FETCH: "/",
            // --
            SEARCH_ALL_FILES: "/var/search/pool/all.json",
            SEARCH_ALL_FILES_ALL: "/var/search/pool/all-all.json",
            SEARCH_ALL_FILES_SERVICE: "/var/search/files/allfiles.json",
            SEARCH_ALL_FILES_SERVICE_ALL: "/var/search/files/allfiles-all.json",
            SEARCH_CONTENT_COMPREHENSIVE_SERVICE: "/var/search/sitecontent.json",
            SEARCH_CONTENT_SERVICE: "/var/search/content.json",
            SEARCH_MY_BOOKMARKS: "/var/search/files/mybookmarks.json",
            SEARCH_MY_BOOKMARKS_ALL: "/var/search/files/mybookmarks-all.json",
            SEARCH_MY_CONTACTS: "/var/search/files/mycontacts.json",
            SEARCH_MY_FILES: "/var/search/files/myfiles.json",
            SEARCH_MY_FILES_ALL: "/var/search/files/myfiles-all.json",
            SEARCH_MY_SITES: "/var/search/files/mysites.json",
            SEARCH_GROUP_MEMBERS: "/var/search/groupmembers.json",
            SEARCH_GROUP_MEMBERS_ALL: "/var/search/groupmembers-all.json",
            SEARCH_GROUPS: "/var/search/groups.infinity.json",
            SEARCH_GROUPS_ALL: "/var/search/groups-all.json",
            SEARCH_PAGES: "/var/search/page.json",
            SEARCH_SITES: "/var/search/sites.json",
            SEARCH_USERS_ACCEPTED: "/var/contacts/findstate.infinity.json",
            SEARCH_USERS: "/var/search/users.infinity.json",
            SEARCH_USERS_ALL: "/var/search/users-all.json",
            SEARCH_USERS_GROUPS: "/var/search/usersgroups.json",
            SEARCH_USERS_GROUPS_ALL: "/var/search/usersgroups-all.json",
            SITE_ADD_MEMBERS_SERVICE: "/_rest/site/members/add/__SITE__",
            SITE_CONFIGFOLDER: "/sites/__SITEID__",
            SITE_CREATE_SERVICE: "/sites.createsite.json",
            SITE_FILES_URL: "/sites/__SITEID__/_files",
            SITE_GET_MEMBERS_SERVICE: "/sites/__SITE__.members.json",
            SITE_GROUPDEF_URL: "/sites/__SITEID__/groupdef.json",
            SITE_JOIN_REQUESTS: "/var/sites/joinrequests/pending.json",
            SITE_NAVIGATION_CONTENT: "/sites/__SITEID__/_navigation/content.json",
            SITE_NAVIGATION: "/sites/__SITEID__/_navigation",
            SITE_PAGECONFIGURATION: "/sites/__SITEID__/pageconfiguration",
            SITE_PRINT_URL: "/dev/print.html?pagetitle=__CURRENTSITENAME__",
            SITE_REMOVE_MEMBERS_SERVICE: "/_rest/site/members/remove/__SITE__",
            SITE_ROOT: "/sites",
            SITE_TEMPLATE: "/var/templates/site/__TEMPLATE__",
            SITE_UPDATE_SERVICE: "/_rest/site/update/sites/__SITEID__",
            SITE_URL_SITEID: "/dev/site.html?siteid=__SITEID__",
            SITES_SERVICE: "/system/sling/membership.json",
            TWITTER_GET_URL: "/var/proxy/twitter/status.json",
            TWITTER_POST_URL: "/var/proxy/twitter/update_status.json",
            USER_CHANGELOCALE_SERVICE: "/rest/user/changelocale/__USERID__",
            USER_CHANGEPASS_SERVICE: "/system/userManager/user/__USERID__.changePassword.html",
            USER_EXISTENCE_SERVICE: "/system/userManager/user.exists.html?userid=__USERID__",

            // PREFIXES
            GROUP_PREFIX: "/_group",
            USER_PREFIX: "/_user"

        },

        PageTitles: {
            "prefix": "TITLE_PREFIX",
            "pages": {
                /**  403.html  **/
                /**  404.html  **/
                /**  500.html  **/
                /**  account_preferences.html  **/
                "/dev/account_preferences.html": "ACCOUNT_PREFERENCES",
                "/preferences": "ACCOUNT_PREFERENCES",
                /**  acknowledgements.html  **/
                "/dev/acknowledgements.html": "ACKNOWLEDGEMENTS",
                "/acknowledgements": "ACKNOWLEDGEMENTS",
                /**  content_profile.html  **/
                "/dev/content_profile.html": "CONTENT_PROFILE",
                "/content": "CONTENT_PROFILE",
                /**  create_new_account.html  **/
                "/dev/create_new_account.html": "CREATE_A_NEW_ACCOUNT",
                "/register": "CREATE_A_NEW_ACCOUNT",
                /**  directory.html  **/
                "/dev/directory.html": "DIRECTORY",
                "/directory": "DIRECTORY",
                /**  group_edit.html  **/
                "/dev/group_edit.html": "MANAGE_GROUP",
                "/group/edit": "MANAGE_GROUP",
                /**  inbox.html  **/
                "/dev/inbox.html": "MY_MESSAGES",
                "/inbox": "MY_MESSAGES",
                /**  index.html  **/
                "/": "SIGN_IN",
                "/dev": "SIGN_IN",
                "/dev/": "SIGN_IN",
                "/index.html": "SIGN_IN",
                "/dev/index.html": "SIGN_IN",
                "/index": "SIGN_IN",
                /**  logout.html  **/
                "/dev/logout.html": "LOGGING_OUT",
                "/logout": "LOGGING_OUT",
                /**  my_sakai.html  **/
                "/dev/my_sakai.html": "MY_SAKAI",
                "/home": "MY_SAKAI",
                /**  people.html  **/
                "/dev/people.html": "PEOPLE",
                "/people": "PEOPLE",
                /**  profile_edit.html  **/
                "/dev/profile_edit.html": "EDIT_MY_PROFILE",
                "/profile/edit": "EDIT_MY_PROFILE",
                /**  search.html  **/
                "/dev/search.html": "SEARCH_ALL",
                "/search": "SEARCH_ALL",
                /**  search_groups.html  **/
                "/dev/search_groups.html": "SEARCH_GROUPS",
                "/search/groups": "SEARCH_GROUPS",
                /**  search_people.html  **/
                "/dev/search_people.html": "SEARCH_PEOPLE",
                "/search/people": "SEARCH_PEOPLE",
                /**  search_content.html  **/
                "/dev/search_content.html": "SEARCH_CONTENT_AND_MEDIA",
                "/search/content": "SEARCH_CONTENT_AND_MEDIA"
                /**  show.html  **/
            }
        },

        Domain: {
            /*
             * These domain labels can be used anywhere on the site (i.e in the video
             * widget) to convert common domains into shorter, more readable labels
             * for display purposes.
             */
            Labels: {
                "youtube.com": "YouTube",
                "www.youtube.com": "YouTube",
                "youtube.co.uk": "YouTube",
                "www.youtube.co.uk": "YouTube",
                "vimeo.com": "Vimeo",
                "www.vimeo.com": "Vimeo",
                "vimeo.co.uk": "Vimeo",
                "www.vimeo.co.uk": "Vimeo",
                "video.google.com": "Google Video"
            }
        },

        Search: {
            MAX_CORRECT_SEARCH_RESULT_COUNT: 100
        },

        SakaiDomain: window.location.protocol + "//" + window.location.host,

        Permissions: {
            /*
             * A collection of permission keys and range of values to be referenced
             * for making permissions decisions. The values of properties are only
             * for reference, may not match designs and are not to be placed in the
             * UI (message bundles should be used to match up-to-date designs).
             */
            Groups: {
                joinable: {
                    "manager_add": "no", // Managers add people
                    "user_direct": "yes", // People can automatically join
                    "user_request": "withauth" // People request to join
                },
                visible: {
                    "members": "members-only", // Group members only (includes managers)
                    "allusers": "logged-in-only", // All logged in users
                    "public": "public", // Anyone on the Internet
                    "managers": "managers-only" // Group managers only
                }
            },
            Copyright: {
                "creativecommons": {
                    "title": "CREATIVE_COMMONS_LICENSE",
                    "default": true
                },
                "copyrighted": {
                    "title": "COPYRIGHTED"
                },
                "nocopyright": {
                    "title": "NO_COPYRIGHT"
                },
                "licensed": {
                    "title": "LICENSED"
                },
                "waivecopyright": {
                    "title": "WAIVE_COPYRIGHT"
                }
            }
        },

        allowPasswordChange: true,

        Profile: {
            /*
             * This is a collection of profile configuration functions and settings
             * The structure of the config object is identical to the storage object
             * When system/me returns profile data for the logged in user the profile_config and profile_data objects could be merged
             * "label": the internationalizable message for the entry label in HTML
             * "required": {Boolean} Whether the entry is compulsory or not
             * "display": {Boolean} Show the entry in the profile or not
             * "editable": {Boolean} Whether or not the entry is editable
             * For a date entry field use "date" as the type for MM/dd/yyyy and "dateITA" as the type for dd/MM/yyyy
             *
             */
            configuration: {
            
                defaultConfig: {
                
                    "basic": {
                        "label": "__MSG__PROFILE_BASIC_LABEL__",
                        "required": true,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": false,
                        "order": 0,
                        "elements": {
                            "firstName": {
                                "label": "__MSG__PROFILE_BASIC_FIRSTNAME_LABEL__",
                                "required": true,
                                "display": true,
                                "limitDisplayLength": 50
                            },
                            "lastName": {
                                "label": "__MSG__PROFILE_BASIC_LASTNAME_LABEL__",
                                "required": true,
                                "display": true,
                                "limitDisplayLength": 50
                            },
                            "picture": {
                                "label": "__MSG__PROFILE_BASIC_PICTURE_LABEL__",
                                "required": false,
                                "display": false
                            },
                            "preferredName": {
                                "label": "__MSG__PROFILE_BASIC_PREFERREDNAME_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "email": {
                                "label": "__MSG__PROFILE_BASIC_EMAIL_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "email"
                            },
                            "status": {
                                "label": "__MSG__PROFILE_BASIC_STATUS_LABEL__",
                                "required": false,
                                "display": false
                            },
                            "role": {
                                "label": "__MSG__PROFILE_BASIC_ROLE_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "select",
                                "select_elements": {
                                    "academic_related_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_RELATED_STAFF_LABEL__",
                                    "academic_staff": "__MSG__PROFILE_BASIC_ROLE_ACADEMIC_STAFF_LABEL__",
                                    "assistent_staff": "__MSG__PROFILE_BASIC_ROLE_ASSISTENT_STAFF_LABEL__",
                                    "graduate_student": "__MSG__PROFILE_BASIC_ROLE_GRADUATE_STUDENT_LABEL__",
                                    "undergraduate_student": "__MSG__PROFILE_BASIC_ROLE_UNDERGRADUATE_STUDENT_LABEL__",
                                    "non_academic_staff": "__MSG__PROFILE_BASIC_ROLE_NON_ACADEMIC_STAFF_LABEL__",
                                    "postgraduate_student": "__MSG__PROFILE_BASIC_ROLE_POSTGRADUATE_STUDENT_LABEL__",
                                    "research_staff": "__MSG__PROFILE_BASIC_ROLE_RESEARCH_STAFF_LABEL__",
                                    "other": "__MSG__PROFILE_BASIC_ROLE_OTHER_LABEL__"
                                }
                            },
                            "department": {
                                "label": "__MSG__PROFILE_BASIC_DEPARTMENT_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "college": {
                                "label": "__MSG__PROFILE_BASIC_COLLEGE_LABEL__",
                                "required": false,
                                "display": true
                            },
                            "description": {
                                "label": "__MSG__DESCRIPTION__",
                                "required": false,
                                "display": true,
                                "type": "textarea",
                                "tagField": true
                            },
                            "tags": {
                                "label": "__MSG__TAGS__",
                                "required": false,
                                "display": true,
                                "type": "textarea",
                                "tagField": true
                            },
                            "description": {
                                "label": "__MSG__DESCRIPTION__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            }
                        }
                    },
                    "aboutme": {
                        "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                        "required": true,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": true,
                        "order": 1,
                        "elements": {
                            "aboutme": {
                                "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "academicinterests": {
                                "label": "__MSG__PROFILE_ABOUTME_ACADEMICINTERESTS_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "personalinterests": {
                                "label": "__MSG__PROFILE_ABOUTME_PERSONALINTERESTS_LABEL__",
                                "required": false,
                                "display": true,
                                "type": "textarea"
                            },
                            "hobbies": {
                                "label": "__MSG__PROFILE_ABOUTME_HOBBIES_LABEL__",
                                "required": false,
                                "display": true
                            }
                        }
                    },
                    "locations": {
                        "label": "__MSG__PROFILE_LOCATIONS_LABEL__",
                        "required": false,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": true,
                        "multiple": true,
                        "directory": true,
                        "multipleLabel": "__MSG__PROFILE_LOCATION_LABEL__",
                        "order": 2,
                        "elements": {
                            "locationtitle": {
                                "label": "__MSG__PROFILE_LOCATION_LABEL__",
                                "required": true,
                                "display": true,
                                "type": "location"
                            }
                        }
                    },
                    "publications": {
                        "label": "__MSG__PROFILE_PUBLICATIONS_LABEL__",
                        "required": false,
                        "display": true,
                        "access": "everybody",
                        "modifyacl": true,
                        "multiple": true,
                        "multipleLabel": "__MSG__PROFILE_PUBLICATION_LABEL__",
                        "order": 3,
                        //"template": "profile_section_publications_template",
                        "elements": {
                            "maintitle": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE__",
                                "required": true,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE_EXAMPLE__"
                            },
                            "mainauthor": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_AUTHOR__",
                                "required": true,
                                "display": true
                            },
                            "coauthor": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR__",
                                "required": false,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR_EXAMPLE__"
                            },
                            "publisher": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_PUBLISHER__",
                                "required": true,
                                "display": true
                            },
                            "placeofpublication": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_PLACE_OF_PUBLICATION__",
                                "required": true,
                                "display": true
                            },
                            "volumetitle": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_TITLE__",
                                "required": false,
                                "display": true
                            },
                            "volumeinformation": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION__",
                                "required": false,
                                "display": true,
                                "example": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION_EXAMPLE__"
                            },
                            "year": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_YEAR__",
                                "required": true,
                                "display": true
                            },
                            "number": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_NUMBER__",
                                "required": false,
                                "display": true
                            },
                            "series title": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_SERIES_TITLE__",
                                "required": false,
                                "display": true
                            },
                            "url": {
                                "label": "__MSG__PROFILE_PUBLICATIONS_URL__",
                                "required": false,
                                "display": true,
                                "validation": "appendhttp url"
                            }
                        }
                    }
                }
            },
            /*
             * set how the user's name is displayed across the entire system
             * - values can be compound, like "firstName lastName" or singular like "displayName"
             */
            userNameDisplay: "firstName lastName",

            /*
             * the default, if the user doesn't have the userNameDisplay property set in their
             * profile, use this one.
             * Note: the value for userNameDisplay and this value can be the same.
             *       If neither exists, nothing will show
             */
            userNameDefaultDisplay: "firstName lastName",

            /*
             * Set the user's short description to appear underneath their name
             * in search results
             */
            userShortDescription: "${role} in ${department} at ${college}",
            groupShortDescription: "asdf"
        },

        Groups: {
            /*
             * Email message that will be sent to group managers when a user requests
             * to join their group.
             * ${user} will be replaced by the name of the requesting user and ${group}
             * will be replaced with the group name.
             */
            JoinRequest: {
                title: "${user} has requested to join your group: ${group}",
                body: "${user} has requested to join your group: ${group}. Use the links below to respond to this request."
            }
        },

        Relationships: {
            /*
             * Relationships used by the add contacts widget to define what relationship the contacts can have
             */
            "contacts": [{
                "name": "Classmate",
                "definition": "is my classmate",
                "selected": true
            }, {
                "name": "Supervisor",
                "inverse": "Supervised",
                "definition": "is my supervisor",
                "selected": false
            }, {
                "name": "Supervised",
                "inverse": "Supervisor",
                "definition": "is being supervised by me",
                "selected": false
            }, {
                "name": "Lecturer",
                "inverse": "Student",
                "definition": "is my lecturer",
                "selected": false
            }, {
                "name": "Student",
                "inverse": "Lecturer",
                "definition": "is my student",
                "selected": false
            }, {
                "name": "Colleague",
                "definition": "is my colleague",
                "selected": false
            }, {
                "name": "College Mate",
                "definition": "is my college mate",
                "selected": false
            }, {
                "name": "Shares Interests",
                "definition": "shares an interest with me",
                "selected": false
            }]
        },

        Site: {
            Styles: {
                original: {
                    name: "Original sakai theme",
                    image: "/dev/images/sakai_grey.png",
                    URL: "/dev/skins/original/original.html"
                },
                camuniversity: {
                    name: "Cambridge University theme",
                    image: "/dev/skins/camuniversity/images/camuniversity.png",
                    URL: "/dev/skins/camuniversity/camuniversity.html"
                }
            },
            DefaultMember: "viewers"
        },

        SystemTour: {
            "enableReminders": true,
            "reminderIntervalHours": "168"
        },

        // Set this to true if you have an authentication system such as CAS
        // that needs to redirect the user's browser on logout
        followLogoutRedirects: false,

        Messages: {
            Types: {
                inbox: "inbox",
                sent: "sent",
                trash: "trash"
            },
            Categories: {
                message: "Message",
                announcement: "Announcement",
                chat: "Chat",
                invitation: "Invitation"
            },
            Subject: "subject",
            Type: "type",
            Body: "body",
            To: "to",
            read: "read"
        },
        Extensions:{
            "docx":"application/doc",
            "doc":"application/doc",
            "odt":"application/doc",
            "ods":"application/vnd.ms-excel",
            "xls":"application/vnd.ms-excel",
            "xlsx":"application/vnd.ms-excel",
            "odp":"application/vnd.ms-powerpoint",
            "ppt":"application/vnd.ms-powerpoint",
            "pptx":"application/vnd.ms-powerpoint",
            "odg":"image/jpeg",
            "png":"image/png",
            "jpg":"image/jpeg",
            "jpeg":"image/jpeg",
            "bmp":"image/bmp",
            "gif":"image/gif",
            "pdf":"application/x-pdf",
            "swf":"application/x-shockwave-flash",
            "flv":"video/x-msvideo",
            "mpg":"video/x-msvideo",
            "mpeg":"video/x-msvideo",
            "mp4":"video/x-msvideo",
            "avi":"video/x-msvideo",
            "mov":"video/x-msvideo",
            "txt":"text/rtf",
            "rtf":"text/rtf",
            "htm":"text/html",
            "html":"text/html",
            "other":"other"
        },
        MimeTypes: {
            "application/doc": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/msword": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "WORD_DOCUMENT"
            },
            "application/pdf": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/x-download": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/x-pdf": {
                cssClass: "icon-pdf-sprite",
                URL: "/dev/images/mimetypes/pdf.png",
                description: "PDF_DOCUMENT"
            },
            "application/vnd.ms-powerpoint": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/pps.png",
                description: "POWERPOINT_DOCUMENT"
            },
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
                cssClass: "icon-pps-sprite",
                URL: "/dev/images/mimetypes/pps.png",
                description: "POWERPOINT_DOCUMENT"
            },
            "application/vnd.oasis.opendocument.text": {
                cssClass: "icon-doc-sprite",
                URL: "/dev/images/mimetypes/doc.png",
                description: "OPEN_OFFICE_DOCUMENT"
            },
            "application/x-shockwave-flash": {
                cssClass: "icon-swf-sprite",
                URL: "/dev/images/mimetypes/swf.png",
                description: "FLASH_PLAYER_FILE"
            },
            "application/zip": {
                cssClass: "icon-zip-sprite",
                URL: "/dev/images/mimetypes/zip.png",
                description: "ARCHIVE_FILE"
            },
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
                cssClass: "icon-spreadsheet-sprite",
                URL: "/dev/images/mimetypes/spreadsheet.png",
                description: "SPREADSHEET_DOCUMENT"
            },
            "application/vnd.ms-excel": {
                cssClass: "icon-spreadsheet-sprite",
                URL: "/dev/images/mimetypes/spreadsheet.png",
                description: "SPREADSHEET_DOCUMENT"
            },
            "text/plain": {
                cssClass: "icon-txt-sprite",
                URL: "/dev/images/mimetypes/txt.png",
                description: "TEXT_DOCUMENT"
            },
            "text/rtf": {
                cssClass: "icon-txt-sprite",
                URL: "/dev/images/mimetypes/txt.png",
                description: "TEXT_DOCUMENT"
            },
            "image/png": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "PNG_IMAGE"
            },
            "image/bmp": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "BMP_IMAGE"
            },
            "image/gif": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "GIF_IMAGE"
            },
            "image/jpeg": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "JPG_IMAGE"
            },
            "image/pjpeg": {
                cssClass: "icon-image-sprite",
                URL: "/dev/images/mimetypes/images.png",
                description: "JPG_IMAGE"
            },
            "text/html": {
                cssClass: "icon-html-sprite",
                URL: "/dev/images/mimetypes/html.png",
                description: "HTML_DOCUMENT"
            },
            "video/x-msvideo": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "video/mp4": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "video/quicktime": {
                cssClass: "icon-video-sprite",
                URL: "/dev/images/mimetypes/video.png",
                description: "VIDEO_FILE"
            },
            "folder": {
                cssClass: "icon-kmultiple-sprite",
                URL: "/dev/images/mimetypes/kmultiple.png",
                description: "FOLDER"
            },
            "x-sakai/link": {
                cssClass: "icon-url-sprite",
                URL: "/dev/images/mimetypes/html.png",
                description: "URL_LINK"
            },
            "x-sakai/document": {
                cssClass: "icon-sakaidoc-sprite",
                URL: "/dev/images/mimetypes/sakaidoc.png",
                description: "DOCUMENT"
            },
            "other": {
                cssClass: "icon-unknown-sprite",
                URL: "/dev/images/mimetypes/unknown.png",
                description: "OTHER_DOCUMENT"
            }
        },

        Authentication: {
            "allowInternalAccountCreation": true,
            "internal": true,
            "external": [{
                label: "External Login System 1",
                url: "http://external.login1.com/"
            }, {
                label: "External Login System 2",
                url: "http://external.login2.com/"
            }],
            "hideLoginOn": ["/dev", "/dev/index.html", "/dev/create_new_account.html"]
        },
        
        notification: {
            type: {
                ERROR: {
                    image: "/dev/images/notifications_exclamation_icon.png",
                    time: 10000
                },
                INFORMATION: {
                    image: "/dev/images/notifications_info_icon.png",
                    time: 5000
                }
            }
        },

        Navigation: [{
            "url": "/dev/me.html",
            "id": "navigation_you_link",
            "anonymous": false,
            "label": "YOU",
            "subnav": [{
                "url": "/dev/me.html",
                "id": "subnavigation_home_link",
                "label": "MY_HOME"
            }, {
                "url": "/dev/me.html#l=messages/inbox",
                "id": "subnavigation_messages_link",
                "label": "MY_MESSAGES"
            }, {
                "id": "subnavigation_hr"
            }, {
                "url": "/dev/me.html#l=profile/basic",
                "id": "subnavigation_profile_link",
                "label": "MY_PROFILE"
            }, {
                "url": "/dev/me.html#l=library",
                "id": "subnavigation_content_link",
                "label": "MY_LIBRARY"
            }, {
                "url": "/dev/me.html#l=memberships",
                "id": "subnavigation_memberships_link",
                "label": "MY_MEMBERSHIPS"
            }, {
                "url": "/dev/me.html#l=contacts",
                "id": "subnavigation_contacts_link",
                "label": "MY_CONTACTS_CAP"
            }]
        }, {
            "url": "/dev/createnew.html",
            "id": "navigation_create_and_add_link",
            "anonymous": false,
            "label": "CREATE_AND_ADD",
            "subnav": [{
                "id": "subnavigation_add_content_link",
                "label": "ADD_CONTENT",
                "url": "#"
            }, {
                "id": "subnavigation_add_contacts_link",
                "label": "ADD_CONTACTS",
                "url": "/search/people#q=*&filter=&facet=&page=1"
            }, {
                "id": "subnavigation_hr"
            }]
        }, {
            "url": "/dev/explore.html",
            "id": "navigation_explore_link",
            "anonymous": false,
            "label": "EXPLORE",
            "subnav": [{
                "id": "subnavigation_explore_categories_link",
                "label": "BROWSE_ALL_CATEGORIES",
                "url": "/dev/allcategories.html"
            },{
                "id": "subnavigation_hr"
            },{
                "id": "subnavigation_explore_content_link",
                "label": "CONTENT",
                "url": "/dev/search2.html#l=content"
            }, {
                "id": "subnavigation_explore_groups_link",
                "label": "GROUPS",
                "url": "/dev/search2.html#l=groups"
            }, {
                "id": "subnavigation_explore_people_link",
                "label": "PEOPLE",
                "url": "/dev/search2.html#l=people"
            }]
        }, {
            "url": "/dev/explore.html",
            "id": "navigation_anon_explore_link",
            "anonymous": true,
            "label": "EXPLORE",
            "subnav": [{
                "id": "subnavigation_explore_categories_link",
                "label": "BROWSE_ALL_CATEGORIES",
                "url": "/dev/allcategories.html"
            },{
                "id": "subnavigation_hr"
            },{
                "id": "subnavigation_explore_content_link",
                "label": "CONTENT",
                "url": "/dev/search2.html#l=content"
            }, {
                "id": "subnavigation_explore_groups_link",
                "label": "GROUPS",
                "url": "/dev/search2.html#l=groups"
            }, {
                "id": "subnavigation_explore_people_link",
                "label": "PEOPLE",
                "url": "/dev/search2.html#l=people"
            }]
        }, {
            "url": "/dev/create_new_account2.html",
            "id": "navigation_anon_signup_link",
            "anonymous": true,
            "label": "SIGN_UP"
        }],

        /*
         * Are anonymous users allowed to browse/search
         */
        anonAllowed: true,
        /*
         * List of pages that require a logged in user
         */
        requireUser: ["/home", "/preferences", "/group/edit", "/inbox", "/profile/edit", "/dev/my_sakai.html", "/dev/account_preferences.html", "/dev/group_edit.html", "/dev/inbox.html", "/dev/profile_edit.html", "/dev/createnew.html"],

        /*
         * List of pages that require an anonymous user
         */
        requireAnonymous: ["/index", "/register", "/", "/index", "/dev/index.html", "/dev/create_new_account.html", "/dev/", "/dev", "/index.html"],
        /*
         * List of pages that will be added to requireUser if
         * anonAllowed is false
         */
        requireUserAnonNotAllowed: ["/dev/people.html", "/dev/profile_edit.html", "/dev/search.html", "/dev/search_content.html", "/dev/search_groups.html", "/dev/search_people.html", "/dev/search_sakai2.html"],
        /*
         * List of pages that will be added to requireAnonymous if
         * anonAllowed is false
         */
        requireAnonymousAnonNotAllowed: [],
        /*
         * List op pages that require additional processing to determine
         * whether the page can be shown to the current user. These pages
         * are then required to call the sakai.api.Security.showPage
         * themselves
         */
        requireProcessing: ["/dev/user.html", "/dev/me.html", "/dev/content_profile.html", "/dev/content_profile.html", "/dev/group_edit.html", "/dev/show.html", "/content", "/search", "/search/people", "/search/groups", "/search/content", "/dev/search.html", "/dev/search_content.html", "/dev/search_groups.html", "/dev/search_people.html"],

        showSakai2: false,
        useLiveSakai2Feeds: false,

        displayDebugInfo: true,

        Directory: {
            medicineanddentistry: {
                title: "Medicine and Dentistry",
                children: {
                    preclinicalmedicine: {
                        title: "Pre-clinical Medicine"
                    },
                    preclinicaldentistry: {
                        title: "Pre-clinical Dentistry"
                    },
                    clinicalmedicine: {
                        title: "Clinical Medicine"
                    },
                    clinicaldentistry: {
                        title: "Clinical Dentistry"
                    },
                    othersinmedicineanddentistry: {
                        title: "Others in Medicine and Dentistry"
                    }
                }
            },
            biologicalsciences: {
                title: "Biological Sciences",
                children: {
                    biology: {
                        title: "Biology"
                    },
                    botany: {
                        title: "Botany"
                    },
                    zoology: {
                        title: "Zoology"
                    },
                    genetics: {
                        title: "Genetics"
                    },
                    microbiology: {
                        title: "Microbiology"
                    },
                    sportsscience: {
                        title: "Sports Science"
                    },
                    molecularbiologybiophysicsandbiochemistry: {
                        title: "Molecular Biology, Biophysics and Biochemistry"
                    },
                    psychology: {
                        title: "Psychology"
                    },
                    othersinbiologicalsciences: {
                        title: "Others in Biological Sciences"
                    }
                }
            },
            veterinarysciencesagriculture: {
                title: "Veterinary Sciences and Agriculture",
                children: {
                    preclinicalveterinarymedicine: {
                        title: "Pre-clinical Veterinary Medicine"
                    },
                    clinicalveterinarymedicineanddentistry: {
                        title: "Clinical Veterinary Medicine and Dentistry"
                    },
                    animalscience: {
                        title: "Animal Science"
                    },
                    agriculture: {
                        title: "Agriculture"
                    },
                    forestry: {
                        title: "Forestry"
                    },
                    foodandbeveragestudies: {
                        title: "Food and Beverage studies"
                    },
                    agriculturalsciences: {
                        title: "Agricultural Sciences"
                    },
                    others: {
                        title: "Others in Veterinary Sciences and Agriculture"
                    }
                }
            },
            physicalsciences: {
                title: "Physical Sciences",
                children: {
                    chemistry: {
                        title: "Chemistry"
                    },
                    materialsscience: {
                        title: "Materials Science"
                    },
                    physics: {
                        title: "Physics"
                    },
                    forensicandarchaeologicalscience: {
                        title: "Forensic and Archaeological Science"
                    },
                    astronomy: {
                        title: "Astronomy"
                    },
                    geology: {
                        title: "Geology"
                    },
                    oceansciences: {
                        title: "Ocean Sciences"
                    },
                    others: {
                        title: "Others in Physical Sciences"
                    }
                }
            },
            mathematicalandcomputersciences: {
                title: "Mathematical and Computer Sciences",
                children: {
                    mathematics: {
                        title: "Mathematics"
                    },
                    operationalresearch: {
                        title: "Operational Research"
                    },
                    statistics: {
                        title: "Statistics"
                    },
                    computerscience: {
                        title: "Computer Science"
                    },
                    informationsystems: {
                        title: "Information Systems"
                    },
                    softwareengineering: {
                        title: "Software Engineering"
                    },
                    artificialintelligence: {
                        title: "Artificial Intelligence"
                    },
                    others: {
                        title: "Others in Mathematical and Computing Sciences"
                    }
                }
            },
            engineering: {
                title: "Engineering",
                children: {
                    generalengineering: {
                        title: "General Engineering"
                    },
                    civilengineering: {
                        title: "Civil Engineering"
                    },
                    mechanicalengineering: {
                        title: "Mechanical Engineering"
                    },
                    aerospaceengineering: {
                        title: "Aerospace Engineering"
                    },
                    navalarchitecture: {
                        title: "Naval Architecture"
                    },
                    electronicandelectricalengineering: {
                        title: "Electronic and Electrical Engineering"
                    },
                    productionandmanufacturingengineering: {
                        title: "Production and Manufacturing Engineering"
                    },
                    chemicalprocessandenergyengineering: {
                        title: "Chemical, Process and Energy Engineering"
                    },
                    others: {
                        title: "Others in Engineering"
                    }
                }
            },
            technologies: {
                title: "Technologies",
                children: {
                    mineralstechnology: {
                        title: "Minerals Technology"
                    },
                    metallurgy: {
                        title: "Metallurgy"
                    },
                    ceramicsandglasses: {
                        title: "Ceramics and Glasses"
                    },
                    polymersandtextiles: {
                        title: "Polymers and Textiles"
                    },
                    materialstechnologynototherwisespecified: {
                        title: "Materials Technology not otherwise specified"
                    },
                    maritimetechnology: {
                        title: "Maritime Technology"
                    },
                    industrialbiotechnology: {
                        title: "Industrial Biotechnology"
                    },
                    others: {
                        title: "Others in Technology"
                    }
                }
            },
            architecturebuildingandplanning: {
                title: "Architecture, Building and Planning",
                children: {
                    architecture: {
                        title: "Architecture"
                    },
                    building: {
                        title: "Building"
                    },
                    landscapedesign: {
                        title: "Landscape Design"
                    },
                    planning: {
                        title: "Planning (Urban, Rural and Regional)"
                    },
                    others: {
                        title: "Others in Architecture, Building and Planning"
                    }
                }
            },
            socialstudies: {
                title: "Social studies",
                children: {
                    economics: {
                        title: "Economics"
                    },
                    politics: {
                        title: "Politics"
                    },
                    sociology: {
                        title: "Sociology"
                    },
                    socialpolicy: {
                        title: "Social Policy"
                    },
                    socialwork: {
                        title: "Social Work"
                    },
                    anthropology: {
                        title: "Anthropology"
                    },
                    humanandsocialgeography: {
                        title: "Human and Social Geography"
                    },
                    others: {
                        title: "Others in Social studies"
                    }
                }
            },
            law: {
                title: "Law",
                children: {
                    publiclaw: {
                        title: "Public Law"
                    },
                    privatelaw: {
                        title: "Private Law"
                    },
                    jurisprudence: {
                        title: "Jurisprudence"
                    },
                    legalpractice: {
                        title: "Legal Practice"
                    },
                    medicallaw: {
                        title: "Medical Law"
                    },
                    othersinlaw: {
                        title: "Others in law"
                    }
                }
            },
            businessandadministrativestudies: {
                title: "Business and Administrative studies",
                children: {
                    businessstudies: {
                        title: "Business studies"
                    },
                    managementstudies: {
                        title: "Management studies"
                    },
                    finance: {
                        title: "Finance"
                    },
                    accounting: {
                        title: "Accounting"
                    },
                    marketing: {
                        title: "Marketing"
                    },
                    humanresourcemanagement: {
                        title: "Human Resource Management"
                    },
                    officeskills: {
                        title: "Office skills"
                    },
                    tourismtransportandtravel: {
                        title: "Tourism, Transport and Travel"
                    },
                    others: {
                        title: "Others in Business and Administrative studies"
                    }
                }
            },
            masscommunicationsanddocumentation: {
                title: "Mass Communications and Documentation",
                children: {
                    informationservices: {
                        title: "Information Services"
                    },
                    publicitystudies: {
                        title: "Publicity studies"
                    },
                    mediastudies: {
                        title: "Media studies"
                    },
                    publishing: {
                        title: "Publishing"
                    },
                    journalism: {
                        title: "Journalism"
                    },
                    others: {
                        title: "Others in Mass Communications and Documentation"
                    }
                }
            },
            linguisticsclassicsandrelatedsubjects: {
                title: "Linguistics, Classics and related subjects",
                children: {
                    linguistics: {
                        title: "Linguistics"
                    },
                    comparativeliterarystudies: {
                        title: "Comparative Literary studies"
                    },
                    englishstudies: {
                        title: "English studies"
                    },
                    ancientlanguagestudies: {
                        title: "Ancient Language studies"
                    },
                    celticstudies: {
                        title: "Celtic studies"
                    },
                    latinstudies: {
                        title: "Latin studies"
                    },
                    classicalgreekstudies: {
                        title: "Classical Greek studies"
                    },
                    classicalstudies: {
                        title: "Classical studies"
                    },
                    others: {
                        title: "Others in Linguistics, Classics and related subjects"
                    }
                }
            },
            europeanlanguagesliteratureandrelatedsubjects: {
                title: "European Languages, Literature and related subjects",
                children: {
                    frenchstudies: {
                        title: "French studies"
                    },
                    germanstudies: {
                        title: "German studies"
                    },
                    italianstudies: {
                        title: "Italian studies"
                    },
                    spanishstudies: {
                        title: "Spanish studies"
                    },
                    portuguesestudies: {
                        title: "Portuguese studies"
                    },
                    scandinavianstudies: {
                        title: "Scandinavian studies"
                    },
                    russianandeasteuropeanstudies: {
                        title: "Russian and East European studies"
                    },
                    others: {
                        title: "Others in European Languages, Literature and related subjects"
                    }
                }
            },
            easiaticlanguagesliterature: {
                title: "Eastern, Asiatic, African, American and Australasian Languages, Literature and related subjects",
                children: {
                    chinesestudies: {
                        title: "Chinese studies"
                    },
                    japanesestudies: {
                        title: "Japanese studies"
                    },
                    southasianstudies: {
                        title: "South Asian studies"
                    },
                    otherasianstudies: {
                        title: "Other Asian studies"
                    },
                    africanstudies: {
                        title: "African studies"
                    },
                    modernmiddleeasternstudies: {
                        title: "Modern Middle Eastern studies"
                    },
                    americanstudies: {
                        title: "American studies"
                    },
                    australasianstudies: {
                        title: "Australasian studies"
                    },
                    others: {
                        title: "Others in Eastern, Asiatic, African, American and Australasian Languages, Literature and related subjects"
                    }
                }
            },
            historicalandphilosophicalstudies: {
                title: "Historical and Philosophical studies",
                children: {
                    historybyperiod: {
                        title: "History by period"
                    },
                    historybyarea: {
                        title: "History by area"
                    },
                    historybytopic: {
                        title: "History by topic"
                    },
                    archaeology: {
                        title: "Archaeology"
                    },
                    philosophy: {
                        title: "Philosophy"
                    },
                    theologyandreligiousstudies: {
                        title: "Theology and Religious studies"
                    },
                    others: {
                        title: "Others in Historical and Philosophical studies"
                    }
                }
            },
            creativeartsanddesign: {
                title: "Creative Arts and Design",
                children: {
                    fineart: {
                        title: "Fine Art"
                    },
                    designstudies: {
                        title: "Design studies"
                    },
                    music: {
                        title: "Music"
                    },
                    drama: {
                        title: "Drama"
                    },
                    dance: {
                        title: "Dance"
                    },
                    cinematicsandphotography: {
                        title: "Cinematics and Photography"
                    },
                    crafts: {
                        title: "Crafts"
                    },
                    imaginativewriting: {
                        title: "Imaginative Writing"
                    },
                    others: {
                        title: "Others in Creative Arts and Design"
                    }
                }
            },
            education: {
                title: "Education",
                children: {
                    trainingteachers: {
                        title: "Training Teachers"
                    },
                    researchandstudyskillsineducation: {
                        title: "Research and Study Skills in Education"
                    },
                    academicstudiesineducation: {
                        title: "Academic studies in Education"
                    },
                    othersineducation: {
                        title: "Others in Education"
                    }
                }
            }
        },

        // Array of css files to load in each page
        skinCSS: [],

        Languages: [{
            "country": "CN",
            "language": "zh",
            "displayName": "中文"
        }, {
            "country": "NL",
            "language": "nl",
            "displayName": "Nederlands"
        }, {
            "country": "GB",
            "language": "en",
            "displayName": "English (United Kingdom)"
        }, {
            "country": "US",
            "language": "en",
            "displayName": "English (United States)"
        }, {
            "country": "JP",
            "language": "ja",
            "displayName": "日本語"
        }, {
            "country": "HU",
            "language": "hu",
            "displayName": "Magyar"
        }, {
            "country": "KR",
            "language": "ko",
            "displayName": "한국어"
        }],

        // Default Language for the deployment, must be one of the language_COUNTRY pairs that exists above
        defaultLanguage: "en_US",

        defaultUserTemplate: "defaultuser",
        defaultGroupTemplate: "defaultgroup",

        enableChat: false,

        defaultprivstructure: {
            "structure0": {
                "dashboard": {
                    "_ref": "267187828",
                    "_title": "My Dashboard",
                    "_order": 0,
                    "main": {
                        "_ref": "267187828",
                        "_order": 0,
                        "_title": "Dashboard"
                    }
                },
                "messages": {
                    "_title": "My Messages",
                    "_ref": "1165301022",
                    "_order": 1,
                    "inbox": {
                        "_ref": "1165301022",
                        "_order": 0,
                        "_title": "Inbox"
                    },
                    "invitations": {
                        "_ref": "9867733100",
                        "_order": 1,
                        "_title": "Invitations"
                    },
                    "sent": {
                        "_ref": "4253485084",
                        "_order": 2,
                        "_title": "Sent"
                    },
                    "trash": {
                        "_ref": "3915412565",
                        "_order": 3,
                        "_title": "Trash"
                    }
                }
            },
            "267187828": {
                "page": "<div class='fl-force-right s3d-margin-top-5'><button type='button' class='s3d-button s3d-button-link-2-state dashboard_change_layout' data-tuid='546341435'><span class='s3d-button-inner s3d-button-link-2-state-inner s3d-button-link-2-state-inner-secondary'>Edit Layout</span></button><button type='button' class='s3d-button s3d-button-link-2-state dashboard_global_add_widget' data-tuid='546341435'><span class='s3d-button-inner s3d-button-link-2-state-inner s3d-button-link-2-state-inner-secondary'>Add Widget</span></button></div><div class='s3d-contentpage-title'>My Dashboard</div><div id='widget_carousel' class='widget_inline'></div><br/><div id='widget_dashboard_546341435' class='widget_inline'></div>"
            },
            "1165301022": {
                "page": "<div id='widget_inbox_2024634737' class='widget_inline'/>"
            },
            "9867733100": {
                "page": "<div id='widget_inbox_3679202964' class='widget_inline'/>"
            },
            "4253485084": {
                "page": "<div id='widget_inbox_66582410046' class='widget_inline'/>"
            },
            "3915412565": {
                "page": "<div id='widget_inbox_3519294282' class='widget_inline'/>"
            },
            "2024634737": {
                "box": "inbox",
                "category": "message",
                "title": "INBOX"
            },
            "3679202964": {
                "box": "inbox",
                "category": "invitation",
                "title": "INVITATIONS"
            },
            "66582410046": {
                "box": "outbox",
                "category": "*",
                "title": "SENT"
            },
            "3519294282": {
                "box": "trash",
                "category": "*",
                "title": "TRASH"
            },
            "546341435": {
                "dashboard": {
                    "layout": "threecolumn",
                    "columns": {
                        "column1": [{
                            "uid": "id6902437615810",
                            "visible": "block",
                            "name": "mycontent"
                        }],
                        "column2": [{
                            "uid": "id9495917029618",
                            "visible": "block",
                            "name": "mygroups"
                        }],
                        "column3": [{
                            "uid": "id7360391172040",
                            "visible": "block",
                            "name": "mycontacts"
                        }]
                    }
                }
            }
        },

        defaultpubstructure: {
            "structure0": {
                "profile": {
                    "_title": "My Profile",
                    "_altTitle": "${user}'s Profile",
                    "_order": 0
                },
                "library": {
                    "_ref": "9834611274",
                    "_order": 1,
                    "_title": "My Library",
                    "_altTitle": "${user}'s Library",
                    "main": {
                        "_ref": "9834611274",
                        "_order": 0,
                        "_title": "Content"
                    }
                },
                "memberships": {
                    "_title": "My Memberships",
                    "_order": 2,
                    "_ref": "213623673",
                    "_altTitle": "${user}'s Memberships",
                    "main": {
                        "_ref": "213623673",
                        "_order": 0,
                        "_title": "Memberships"
                    }
                },
                "contacts": {
                    "_title": "My Contacts",
                    "_order": 3,
                    "_ref": "1193715035",
                    "_altTitle": "${user}'s Contacts",
                    "main": {
                        "_ref": "1193715035",
                        "_order": 0,
                        "_title": "Contacts"
                    }
                }
            },
            "9834611274": {
                "page": "<div id='widget_mylibrary' class='widget_inline'></div> <div id='widget_deletecontent' class='widget_inline'></div>"
            },
            "213623673": {
                "page": "<div id='widget_joinrequestbuttons' class='widget_inline'></div> " +
                    "<div id='widget_tooltip' class='widget_inline'></div> " +
                    "<div id='widget_mymemberships' class='widget_inline'></div>"
            },
            "1193715035": {
                "page": "<div id='widget_contacts' class='widget_inline'></div>"
            }
        },

        widgets: {
            "groups": ["Administrators", "Lecturers & Supervisors", "Researchers", "Students"],
            "layouts": {
                "onecolumn": {
                    "name": "One column",
                    "widths": [100],
                    "siteportal": true
                },
                "dev": {
                    "name": "Dev Layout",
                    "widths": [50, 50],
                    "siteportal": true
                },
                "threecolumn": {
                    "name": "Three equal columns",
                    "widths": [33, 33, 33],
                    "siteportal": false
                },
                "fourcolumn": {
                    "name": "Four equal columns",
                    "widths": [25, 25, 25, 25],
                    "siteportal": false
                },
                "fivecolumn": {
                    "name": "Five equal columns",
                    "widths": [20, 20, 20, 20, 20],
                    "siteportal": false
                }
            },
            "defaults": {
                "personalportal": {
                    "layout": "dev",
                    "columns": [["mygroups", "mycontacts"], ["mycontent", "recentmessages"]]
                },
                "siteportal": {
                    "layout": "dev",
                    "columns": [["sitemembers"], []]
                }
            }
        },

        worldTemplates : [
            {
                id: "group",
                title : "GROUP",
                templates: [
                    {
                        id: "simplegroup",
                        title: "Simple group",
                        img: "/dev/images/worldtemplates/simplegroup.png",
                        fullImg: "/dev/images/worldtemplates/simplegroup-full.png",
                        perfectFor: "Sharing content and sending messages",
                        roles: [
                            {
                                id: "member",
                                title: "Member",
                                allowManage: false
                            },
                            {
                                id: "manager",
                                title: "Manager",
                                allowManage: true
                            }
                        ],
                        joinRole: "member",
                        creatorRole: "manager"
                    }
                ]
            },
            {
                id: "courses",
                title : "COURSES",
                templates: [
                    {
                        id: "mathcourse",
                        title: "Mathematics course",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Algebra, Analysis, Probability and statistics, Mechanics, Mathematical Methods and Applications",
                        roles: [
                            {
                                id: "student",
                                title: "Student",
                                allowManage: false
                            },
                            {
                                id: "ta",
                                title: "Teaching Assistant",
                                allowManage: true
                            },
                            {
                                id: "lecturer",
                                title: "Lecturer",
                                allowManage: true
                            }
                        ],
                        joinRole: "student",
                        creatorRole: "lecturer"
                    },
                    {
                        id: "medicalscience",
                        title: "Medical science course",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Science courses, Chemistry, Mathematics, Equations, Theoretical Science, Experiment based learning courses",
                        roles: [
                            {
                                id: "student",
                                title: "Student",
                                allowManage: false
                            },
                            {
                                id: "ta",
                                title: "Teaching Assistant",
                                allowManage: true
                            },
                            {
                                id: "lecturer",
                                title: "Lecturer",
                                allowManage: true
                            }
                        ],
                        joinRole: "student",
                        creatorRole: "lecturer"
                    },
                    {
                        id: "physicscourse",
                        title: "Physics course",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Science courses, Chemistry, Mathematics, Equations, Theoretical Science, Experiment based learning courses",
                        roles: [
                            {
                                id: "student",
                                title: "Student",
                                allowManage: false
                            },
                            {
                                id: "ta",
                                title: "Teaching Assistant",
                                allowManage: true
                            },
                            {
                                id: "lecturer",
                                title: "Lecturer",
                                allowManage: true
                            }
                        ],
                        joinRole: "student",
                        creatorRole: "lecturer"
                    },
                    {
                        id: "engineeringcourse",
                        title: "Engineering course",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Science courses, Chemistry, Mathematics, Equations, Theoretical Science, Experiment based learning courses",
                        roles: [
                            {
                                id: "student",
                                title: "Student",
                                allowManage: false
                            },
                            {
                                id: "ta",
                                title: "Teaching Assistant",
                                allowManage: true
                            },
                            {
                                id: "lecturer",
                                title: "Lecturer",
                                allowManage: true
                            }
                        ],
                        joinRole: "student",
                        creatorRole: "lecturer"
                    },
                    {
                        id: "humanitiescourse",
                        title: "Humanities course",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Science courses, Chemistry, Mathematics, Equations, Theoretical Science, Experiment based learning courses",
                        roles: [
                            {
                                id: "student",
                                title: "Student",
                                allowManage: false
                            },
                            {
                                id: "ta",
                                title: "Teaching Assistant",
                                allowManage: true
                            },
                            {
                                id: "lecturer",
                                title: "Lecturer",
                                allowManage: true
                            }
                        ],
                        joinRole: "student",
                        creatorRole: "lecturer"
                    }
                ]
            },
            {
                id: "research",
                title : "RESEARCH",
                templates: [
                    {
                        id: "researchproject",
                        title: "Group project",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Collaborative student projects, Class projects, Reading clubs",
                        roles: [
                            {
                                id: "participant",
                                title: "Participant",
                                allowManage: true
                            },
                            {
                                id: "lurker",
                                title: "Lurker",
                                allowManage: false
                            }
                        ],
                        joinRole: "lurker",
                        creatorRole: "participant"
                    },
                    {
                        id: "bidwriting",
                        title: "Bid writing",
                        img: "/dev/images/worldtemplates/mathcourse.png",
                        fullImg: "/dev/images/worldtemplates/mathcourse-full.png",
                        perfectFor: "Writing a collaborative research bid",
                        roles: [
                            {
                                id: "participant",
                                title: "Participant",
                                allowManage: true
                            },
                            {
                                id: "lurker",
                                title: "Lurker",
                                allowManage: false
                            }
                        ],
                        joinRole: "lurker",
                        creatorRole: "participant"
                    }
                ]
            }
        ]
    };
    return config;
});
