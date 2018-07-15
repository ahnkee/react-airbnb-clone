const query = {
  user(parent, { id, email }, ctx, info) {
    if (id) {
      return ctx.models.User.findById(id);
    }

    if (email) {
      return ctx.models.User.findOne({ where: { email } });
    }
  },
  users(parent, args, ctx, info) {
    return ctx.models.User.findAll();
  },
};

const mutation = {
  async register(parent, { email, password }, ctx) {
    const user = new ctx.models.User({ email, password });
    await user.hashPassword();
    return user.save();
  },
};

export default {
  Query: query,
  Mutation: mutation,
};
