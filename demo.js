angular.module('demoapp', ['ngMdIcons'])
	.controller('democtrl', function($scope) {
		var icons = ['home', 'sd_card', 'favorite', 'help', 'shop', 'call', 'email', 'settings', 'car', 'flight', 'share'];
		var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];
		$scope.icon = icons[0];
		$scope.fill = colors[0];
		$scope.size = 36;

		setInterval(function() {
			var random = Math.random();
			if (random < 0.5)
				$scope.icon = icons[Math.floor(Math.random() * icons.length)];
			else if (random < 0.7)
				$scope.fill = colors[Math.floor(Math.random() * colors.length)];
			else
				$scope.size = Math.floor(26 + Math.random() * 20);
			$scope.$apply();
		}, 1700);
	});
