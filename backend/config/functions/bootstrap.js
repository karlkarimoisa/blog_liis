'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */



module.exports = ({env}) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            "cloud_name": 'dvmhmims5',
            "api_key": '219543247919919',
            "api_secret": 'S1orKCMZIgabYStsE7kQYArU4Yg'
          },
        
      }
});
