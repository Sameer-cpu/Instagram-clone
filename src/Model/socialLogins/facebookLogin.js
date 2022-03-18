 async function onFacebookButtonPress() {
    // LoginManager.setLoginBehavior('web_only');
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
      } else {
        const infoRequest = new GraphRequest(
          '/me?fields=email,name,picture',
          null,
          _responseInfoCallback,
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
    } catch (err) {
      console.log({err});
      alert('Something went wrong. Try Again.');
    }

  }