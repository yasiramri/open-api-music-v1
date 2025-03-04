const InvariantError = require('../../exceptions/InvariantError');
const { Album_subm_v1_PayloadSchema } = require('./schema');

const AlbumsValidator_subm_v1 = {
  validateAlbumPayload: (payload) => {
    const validationResult = Album_subm_v1_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumsValidator_subm_v1;