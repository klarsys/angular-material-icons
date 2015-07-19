angular.module('demoapp', ['ngMdIcons'])
    .controller('democtrl', function($scope, ShapeService) {
        /*
            Hops SVG from Austin Andrews @Templarian materialdesignicons.com
        */
        ShapeService.shapes['hops']='<path d="M21,12C21,12 12.5,10 12.5,2C12.5,2 21,2 21,12M3,12C3,2 11.5,2 11.5,2C11.5,10 3,12 3,12M12,6.5C12,6.5 13,8.66 15,10.5C14.76,14.16 12,16 12,16C12,16 9.24,14.16 9,10.5C11,8.66 12,6.5 12,6.5M20.75,13.25C20.75,13.25 20,17 18,19C18,19 15.53,17.36 14.33,14.81C15.05,13.58 15.5,12.12 15.75,11.13C17.13,12.18 18.75,13 20.75,13.25M15.5,18.25C14.5,20.25 12,21.75 12,21.75C12,21.75 9.5,20.25 8.5,18.25C8.5,18.25 9.59,17.34 10.35,15.8C10.82,16.35 11.36,16.79 12,17C12.64,16.79 13.18,16.35 13.65,15.8C14.41,17.34 15.5,18.25 15.5,18.25M3.25,13.25C5.25,13 6.87,12.18 8.25,11.13C8.5,12.12 8.95,13.58 9.67,14.81C8.47,17.36 6,19 6,19C4,17 3.25,13.25 3.25,13.25Z" />';

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
    });
