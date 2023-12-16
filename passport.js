window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'MyNpH69UkOZxdIEjCMToZxnSrwPOhbt3',
    redirectUri: 'https://gentle-weevil-arriving.ngrok-free.app',
    logoutRedirectUri: 'https://gentle-weevil-arriving.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

