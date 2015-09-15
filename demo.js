/* jshint -W097, -W101 */
'use strict';

angular.module('demoapp', ['ngMdIcons'])
    .controller('democtrl', ['$scope', function($scope) {
        var icons = [
            'office', 'facebook', 'twitter', 'apple', 'whatsapp', 'linkedin', 'windows',
            'accessibility', 'alarm', 'aspect_ratio', 'autorenew', 'bookmark_outline', 'dashboard', 'dns', 'favorite_outline', 'get_app', 'highlight_remove', 'history', 'list', 'picture_in_picture', 'print', 'settings_ethernet', 'settings_power', 'shopping_cart', 'spellcheck', 'swap_horiz', 'swap_vert', 'thumb_up', 'thumbs_up_down', 'translate', 'trending_up', 'visibility', 'warning', 'mic', 'play_circle_outline', 'repeat', 'skip_next', 'call', 'chat', 'clear_all', 'dialpad', 'dnd_on', 'forum', 'location_on', 'vpn_key', 'filter_list', 'inbox', 'link', 'remove_circle_outline', 'save', 'text_format', 'access_time', 'airplanemode_on', 'bluetooth', 'data_usage', 'gps_fixed', 'now_wallpaper', 'now_widgets', 'storage', 'wifi_tethering', 'attach_file', 'format_line_spacing', 'format_list_numbered', 'format_quote', 'vertical_align_center', 'wrap_text', 'cloud_queue', 'file_download', 'folder_open', 'cast', 'headset', 'keyboard_backspace', 'mouse', 'speaker', 'watch', 'audiotrack', 'edit', 'brush', 'looks', 'crop_free', 'camera', 'filter_vintage', 'hdr_strong', 'photo_camera', 'slideshow', 'timer', 'directions_bike', 'hotel', 'local_library', 'directions_walk', 'local_cafe', 'local_pizza', 'local_florist', 'my_location', 'navigation', 'pin_drop', 'arrow_back', 'menu', 'close', 'more_horiz', 'more_vert', 'refresh', 'phone_paused', 'vibration', 'cake', 'group', 'mood', 'person', 'notifications_none', 'plus_one', 'school', 'share', 'star_outline'
        ];
        var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
        $scope.cnt = Math.floor(Math.random() * icons.length);
        $scope.icon = icons[$scope.cnt];
        $scope.fill = colors[0];
        $scope.size = 48;

        $scope.clickIcon = 'thumb_up';
        $scope.clickIconMorph = function() {
            if ($scope.clickIcon === 'thumb_up') {
                $scope.clickIcon = 'thumb_down';
            }
            else {
                $scope.clickIcon = 'thumb_up';
            }
        };

        setInterval(function() {
            var random = Math.random();
            if (random < 0.2) {
                $scope.size = 28 + 4 * Math.floor(Math.random() * 9);
            } else {
                $scope.cnt++;
                if ($scope.cnt >= icons.length) {
                    $scope.cnt = 0;
                }
                $scope.icon = icons[$scope.cnt];
                $scope.fill = colors[Math.floor(Math.random() * colors.length)];
            }
            $scope.$apply();
        }, 1700);
    }])
    .config(['ngMdIconServiceProvider', function(ngMdIconServiceProvider) {
        ngMdIconServiceProvider
            // Add single icon
            .addShape('standby', '<path d="M13 3.5h-2v10h2v-10z"/><path d="M16.56 5.94l-1.45 1.45C16.84 8.44 18 10.33 18 12.5c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.94C5.36 7.38 4 9.78 4 12.5c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56z"/>')
            // Get an existing icon
            .addShape('custom-delete', ngMdIconServiceProvider.getShape('delete'))
            // Add multiple icons
            .addShapes({
                'marker': '<path d="M18.632 8.21A6.632 6.632 0 0 1 12 14.843a6.632 6.632 0 0 1-6.632-6.63A6.632 6.632 0 0 1 12 1.578a6.632 6.632 0 0 1 6.632 6.63zM12 0C7.465 0 3.79 3.676 3.79 8.21c0 3.755 2.52 6.917 5.96 7.895L12 24l2.25-7.895c3.44-.978 5.96-4.14 5.96-7.894C20.21 3.677 16.536 0 12 0z">',
                'live_circle': '<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 9.094h1.188v4.844h2.53v.968H4V9.094zm4.5 0h1.188v5.812H8.5V9.094zm1.78 0h1.345l1.28 4.375 1.345-4.377h1.313l-2 5.812h-1.25l-2.033-5.81zm5.845 0H20v.97l-2.688-.002v1.376h2.282v.937h-2.282v1.563H20v.968h-3.875V9.094z"/>'
            });
    }]);
