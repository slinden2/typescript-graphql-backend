import { Resolver, Mutation, Arg, ClassType } from "type-graphql";

export function createResolver<T extends ClassType, K extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: K,
  entity: any
) {
  @Resolver()
  class BaseResolver {
    @Mutation(() => returnType, { name: `create${suffix}` })
    async create(@Arg("data", () => inputType) data: typeof inputType) {
      return entity.create(data).save();
    }
  }
  return BaseResolver;
}
