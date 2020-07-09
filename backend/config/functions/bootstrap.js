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

const isFirstRun = async () => {
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: "type",
      name: "setup",
    });
    const initHasRun = await pluginStore.get({ key: "initHasRun" });
    await pluginStore.set({ key: "initHasRun", value: true });
    return !initHasRun;
  };
  
  const setDefaultFileUploader = async () => {
    if (strapi.config.environment !== "production") {
      return;
    }
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: "plugin",
      name: "upload",
    });
    const config = await pluginStore.get({ key: "provider" });
    await pluginStore.set({
      key: "provider",
      value: {
        ...config,
        ...{
          provider: "cloudinary",
          name: "Cloudinary",
          cloud_name: env('dvmhmims5'),
            api_key: env('219543247919919'),
        api_secret: env('S1orKCMZIgabYStsE7kQYArU4Yg')
        },
      },
    });
  };
  
  module.exports = async () => {
    const shouldInit = await isFirstRun();
    if (shouldInit) {
      await setDefaultFileUploader();
    }
  };

//module.exports = () => {};
