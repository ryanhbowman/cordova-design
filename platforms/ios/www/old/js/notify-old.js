    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
          function showAlert() {
        navigator.notification.alert(
            'You are the winner!!!'                  // buttonName
        );
    }
        showAlert();

    }

    // alert dialog dismissed
        function alertDismissed() {
            // do something
        }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
            'You are the winner!!!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Move On'                  // buttonName
        );
    }