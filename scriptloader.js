var ScriptLoader = {
	maybeLoadStyle: function(aTest, aHref) {
		if (!aTest)
			return;
		// if (console && 'info' in console)
		//	console.info('Loading ' + aHref);

		var tag = document.createElement('link');
		tag.setAttribute('rel', 'stylesheet');
		tag.setAttribute('href', this.updateURL(aHref));
		document.head.appendChild(tag);
	},

	maybeLoadScript: function(aTest, aSrc, aCallback) {
		if (!aTest) {
			if (aCallback) aCallback();
			return;
		}
		// if (console && 'info' in console)
		// 	console.info('Loading ' + aSrc);

		var loaded = false;
		var tag = document.createElement('script');
		tag.setAttribute('src', this.updateURL(aSrc));
		tag.onload = function() {
			if (!loaded) {
				if (aCallback) aCallback();
				loaded = true;
			}
		}
		tag.onreadystatechange = function() {
			if (!loaded && (tag.readyState == 'complete' || tag.readyState == 'loaded')) {
				if (aCallback) aCallback();
				loaded = true;
			}
		}
		document.head.appendChild(tag);
	},

	updateURL: function(aURL) {
		var links = document.getElementsByTagName('link');
		var regexp = new RegExp('^(.*):[0-9]+$');
		for (var i = 0; i < links.length; i++) {
			if (links[i].rel == 'prefetch') {
				var match = regexp.exec(links[i].getAttribute('href'));
				if (match && match[1] == aURL)
					return match[0];
			}
		}
		return aURL;
	}
};
