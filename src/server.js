require('dotenv').config();
const Hapi = require('@hapi/hapi');

// albums - submission 1
const albums_subm_v1 = require('./api/albums');
const AlbumsService_subm_v1 = require('./services/postgres/AlbumsService');

// songs - submission 1
const songs_subm_v1 = require('./api/songs');
const SongsService_subm_v1 = require('./services/postgres/SongsService');
const SongsValidator_subm_v1 = require('./validator/songs');
const AlbumsValidator_subm_v1 = require('./validator/album');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: songs_subm_v1,
      options: {
        service: new SongsService_subm_v1(),
        validator: SongsValidator_subm_v1,
      },
    },
    {
      plugin: albums_subm_v1,
      options: {
        service: new AlbumsService_subm_v1(),
        validator: AlbumsValidator_subm_v1,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
