var XHR = {
	get: function(aURL, aSuccessCallback, aFailureCallback) {
		if (!aSuccessCallback)
			aSuccessCallback = this.defaultCallback;
		if (!aFailureCallback)
			aFailureCallback = this.defaultCallback;

		var request = new XMLHttpRequest();
		request.open('GET', aURL, true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200) {
					aSuccessCallback(request);
				} else {
					aFailureCallback(request);
				}
			}
		};
		request.onerror = function() {
			aFailureCallback(request);
		};
		request.send(null);
	},
	post: function(aURL, aData, aSuccessCallback, aFailureCallback, aContentType) {
		if (!aSuccessCallback)
			aSuccessCallback = this.defaultCallback;
		if (!aFailureCallback)
			aFailureCallback = this.defaultCallback;
		if (!aContentType)
			aContentType = 'application/x-www-form-urlencoded';

		var request = new XMLHttpRequest();
		request.open('POST', aURL, true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status == 200) {
					aSuccessCallback(request);
				} else {
					aFailureCallback(request);
				}
			}
		};
		request.onerror = function() {
			aFailureCallback(request);
		};
		request.setRequestHeader('Content-Type', aContentType);
		request.setRequestHeader('Content-Length', aData.length);
		request.setRequestHeader('Connection', 'close');
		request.send(aData);
	},
	defaultCallback: function(aRequest) {
		if (aRequest.getResponseHeader('Content-Type').indexOf('application/json') == 0)
			alert(JSON.parse(aRequest.responseText));
		else
			alert(aRequest.responseText);
	}
};
