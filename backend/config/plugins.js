module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dvmhmims5'),
      api_key: env('219543247919919'),
      api_secret: env('S1orKCMZIgabYStsE7kQYArU4Yg')
        
      },
    }
  });