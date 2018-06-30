import uuidV4 from 'uuid/v4';

/**
 * Return middleware that gets an unique request id from a header or
 * generates a new id.
 *
 * @param {object} [options={}] - Optional configuration.
 * @param {string} [options.header=X-Request-Id] - Request and response header name.
 * @param {string} [options.propertyName=requestId] - Context property name.
 * @param {function} [options.generator] - Id generator function.
 * @return {function} Koa middleware.
 */
export default function requestId(options = {}) {
  const {
    header = 'X-Request-Id',
    propertyName = 'requestId',
    generator = uuidV4,
  } = options;

  return (ctx, next) => {
    const requestId = ctx.request.get(header) || generator();
    ctx[propertyName] = requestId;
    ctx.set(header, requestId);
    return next();
  };
}
