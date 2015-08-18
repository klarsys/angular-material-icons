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
            if ($scope.clickIcon == 'thumb_up')
                $scope.clickIcon = 'thumb_down';
            else
                $scope.clickIcon = 'thumb_up';
        }

        setInterval(function() {
            var random = Math.random();
            if (random < 0.2) {
                $scope.size = 28 + 4 * Math.floor(Math.random() * 9);
            } else {
                $scope.cnt++;
                if ($scope.cnt >= icons.length)
                    $scope.cnt = 0;
                $scope.icon = icons[$scope.cnt];
                $scope.fill = colors[Math.floor(Math.random() * colors.length)];
            }
            $scope.$apply();
        }, 1700);
    }])
    .config(['ngMdIconServiceProvider', function(ngMdIconServiceProvider) {
        ngMdIconServiceProvider
            .addShape('custom-bookmark', '<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>')
            .addShape('custom-delete', ngMdIconServiceProvider.getShape('delete'))
            .addShapes({
                'custom-done': '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
                'custom-home': '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>'
            });
    }]);
