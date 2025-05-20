
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model ResumeSection
 * 
 */
export type ResumeSection = $Result.DefaultSelection<Prisma.$ResumeSectionPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateContributor
 * 
 */
export type TemplateContributor = $Result.DefaultSelection<Prisma.$TemplateContributorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumeSection`: Exposes CRUD operations for the **ResumeSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeSections
    * const resumeSections = await prisma.resumeSection.findMany()
    * ```
    */
  get resumeSection(): Prisma.ResumeSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateContributor`: Exposes CRUD operations for the **TemplateContributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateContributors
    * const templateContributors = await prisma.templateContributor.findMany()
    * ```
    */
  get templateContributor(): Prisma.TemplateContributorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    ResumeSection: 'ResumeSection',
    Template: 'Template',
    TemplateContributor: 'TemplateContributor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "resumeSection" | "template" | "templateContributor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      ResumeSection: {
        payload: Prisma.$ResumeSectionPayload<ExtArgs>
        fields: Prisma.ResumeSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          findFirst: {
            args: Prisma.ResumeSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          findMany: {
            args: Prisma.ResumeSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>[]
          }
          create: {
            args: Prisma.ResumeSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          createMany: {
            args: Prisma.ResumeSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>[]
          }
          delete: {
            args: Prisma.ResumeSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          update: {
            args: Prisma.ResumeSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          deleteMany: {
            args: Prisma.ResumeSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>[]
          }
          upsert: {
            args: Prisma.ResumeSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeSectionPayload>
          }
          aggregate: {
            args: Prisma.ResumeSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeSection>
          }
          groupBy: {
            args: Prisma.ResumeSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeSectionCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateContributor: {
        payload: Prisma.$TemplateContributorPayload<ExtArgs>
        fields: Prisma.TemplateContributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateContributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateContributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          findFirst: {
            args: Prisma.TemplateContributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateContributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          findMany: {
            args: Prisma.TemplateContributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>[]
          }
          create: {
            args: Prisma.TemplateContributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          createMany: {
            args: Prisma.TemplateContributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateContributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>[]
          }
          delete: {
            args: Prisma.TemplateContributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          update: {
            args: Prisma.TemplateContributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          deleteMany: {
            args: Prisma.TemplateContributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateContributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateContributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>[]
          }
          upsert: {
            args: Prisma.TemplateContributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateContributorPayload>
          }
          aggregate: {
            args: Prisma.TemplateContributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateContributor>
          }
          groupBy: {
            args: Prisma.TemplateContributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateContributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateContributorCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateContributorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    resumeSection?: ResumeSectionOmit
    template?: TemplateOmit
    templateContributor?: TemplateContributorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    sections: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | ResumeCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeSectionWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    contributors: number
    Resume: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributors?: boolean | TemplateCountOutputTypeCountContributorsArgs
    Resume?: boolean | TemplateCountOutputTypeCountResumeArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateContributorWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatarURL: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarURL?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatarURL: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatarURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatarURL" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resumes: Prisma.$ResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatarURL: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarURL: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    templateId: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    templateId: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    templateId: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    templateId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    templateId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    templateId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    title: string
    userId: string
    templateId: string | null
    version: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    templateId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    sections?: boolean | Resume$sectionsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    templateId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    templateId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    templateId?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "templateId" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    sections?: boolean | Resume$sectionsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs> | null
      sections: Prisma.$ResumeSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      templateId: string | null
      version: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Resume$templateArgs<ExtArgs> = {}>(args?: Subset<T, Resume$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sections<T extends Resume$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly templateId: FieldRef<"Resume", 'String'>
    readonly version: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.template
   */
  export type Resume$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Resume.sections
   */
  export type Resume$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    where?: ResumeSectionWhereInput
    orderBy?: ResumeSectionOrderByWithRelationInput | ResumeSectionOrderByWithRelationInput[]
    cursor?: ResumeSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeSectionScalarFieldEnum | ResumeSectionScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model ResumeSection
   */

  export type AggregateResumeSection = {
    _count: ResumeSectionCountAggregateOutputType | null
    _avg: ResumeSectionAvgAggregateOutputType | null
    _sum: ResumeSectionSumAggregateOutputType | null
    _min: ResumeSectionMinAggregateOutputType | null
    _max: ResumeSectionMaxAggregateOutputType | null
  }

  export type ResumeSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type ResumeSectionSumAggregateOutputType = {
    order: number | null
  }

  export type ResumeSectionMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    title: string | null
    order: number | null
    type: string | null
  }

  export type ResumeSectionMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    title: string | null
    order: number | null
    type: string | null
  }

  export type ResumeSectionCountAggregateOutputType = {
    id: number
    resumeId: number
    title: number
    content: number
    order: number
    type: number
    _all: number
  }


  export type ResumeSectionAvgAggregateInputType = {
    order?: true
  }

  export type ResumeSectionSumAggregateInputType = {
    order?: true
  }

  export type ResumeSectionMinAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    order?: true
    type?: true
  }

  export type ResumeSectionMaxAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    order?: true
    type?: true
  }

  export type ResumeSectionCountAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    content?: true
    order?: true
    type?: true
    _all?: true
  }

  export type ResumeSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeSection to aggregate.
     */
    where?: ResumeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSections to fetch.
     */
    orderBy?: ResumeSectionOrderByWithRelationInput | ResumeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeSections
    **/
    _count?: true | ResumeSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeSectionMaxAggregateInputType
  }

  export type GetResumeSectionAggregateType<T extends ResumeSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeSection[P]>
      : GetScalarType<T[P], AggregateResumeSection[P]>
  }




  export type ResumeSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeSectionWhereInput
    orderBy?: ResumeSectionOrderByWithAggregationInput | ResumeSectionOrderByWithAggregationInput[]
    by: ResumeSectionScalarFieldEnum[] | ResumeSectionScalarFieldEnum
    having?: ResumeSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeSectionCountAggregateInputType | true
    _avg?: ResumeSectionAvgAggregateInputType
    _sum?: ResumeSectionSumAggregateInputType
    _min?: ResumeSectionMinAggregateInputType
    _max?: ResumeSectionMaxAggregateInputType
  }

  export type ResumeSectionGroupByOutputType = {
    id: string
    resumeId: string
    title: string
    content: JsonValue
    order: number
    type: string
    _count: ResumeSectionCountAggregateOutputType | null
    _avg: ResumeSectionAvgAggregateOutputType | null
    _sum: ResumeSectionSumAggregateOutputType | null
    _min: ResumeSectionMinAggregateOutputType | null
    _max: ResumeSectionMaxAggregateOutputType | null
  }

  type GetResumeSectionGroupByPayload<T extends ResumeSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeSectionGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    type?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeSection"]>

  export type ResumeSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    type?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeSection"]>

  export type ResumeSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    type?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeSection"]>

  export type ResumeSectionSelectScalar = {
    id?: boolean
    resumeId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    type?: boolean
  }

  export type ResumeSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "title" | "content" | "order" | "type", ExtArgs["result"]["resumeSection"]>
  export type ResumeSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ResumeSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeSection"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      title: string
      content: Prisma.JsonValue
      order: number
      type: string
    }, ExtArgs["result"]["resumeSection"]>
    composites: {}
  }

  type ResumeSectionGetPayload<S extends boolean | null | undefined | ResumeSectionDefaultArgs> = $Result.GetResult<Prisma.$ResumeSectionPayload, S>

  type ResumeSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeSectionCountAggregateInputType | true
    }

  export interface ResumeSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeSection'], meta: { name: 'ResumeSection' } }
    /**
     * Find zero or one ResumeSection that matches the filter.
     * @param {ResumeSectionFindUniqueArgs} args - Arguments to find a ResumeSection
     * @example
     * // Get one ResumeSection
     * const resumeSection = await prisma.resumeSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeSectionFindUniqueArgs>(args: SelectSubset<T, ResumeSectionFindUniqueArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResumeSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeSectionFindUniqueOrThrowArgs} args - Arguments to find a ResumeSection
     * @example
     * // Get one ResumeSection
     * const resumeSection = await prisma.resumeSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionFindFirstArgs} args - Arguments to find a ResumeSection
     * @example
     * // Get one ResumeSection
     * const resumeSection = await prisma.resumeSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeSectionFindFirstArgs>(args?: SelectSubset<T, ResumeSectionFindFirstArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionFindFirstOrThrowArgs} args - Arguments to find a ResumeSection
     * @example
     * // Get one ResumeSection
     * const resumeSection = await prisma.resumeSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResumeSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeSections
     * const resumeSections = await prisma.resumeSection.findMany()
     * 
     * // Get first 10 ResumeSections
     * const resumeSections = await prisma.resumeSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeSectionWithIdOnly = await prisma.resumeSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeSectionFindManyArgs>(args?: SelectSubset<T, ResumeSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResumeSection.
     * @param {ResumeSectionCreateArgs} args - Arguments to create a ResumeSection.
     * @example
     * // Create one ResumeSection
     * const ResumeSection = await prisma.resumeSection.create({
     *   data: {
     *     // ... data to create a ResumeSection
     *   }
     * })
     * 
     */
    create<T extends ResumeSectionCreateArgs>(args: SelectSubset<T, ResumeSectionCreateArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResumeSections.
     * @param {ResumeSectionCreateManyArgs} args - Arguments to create many ResumeSections.
     * @example
     * // Create many ResumeSections
     * const resumeSection = await prisma.resumeSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeSectionCreateManyArgs>(args?: SelectSubset<T, ResumeSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeSections and returns the data saved in the database.
     * @param {ResumeSectionCreateManyAndReturnArgs} args - Arguments to create many ResumeSections.
     * @example
     * // Create many ResumeSections
     * const resumeSection = await prisma.resumeSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeSections and only return the `id`
     * const resumeSectionWithIdOnly = await prisma.resumeSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResumeSection.
     * @param {ResumeSectionDeleteArgs} args - Arguments to delete one ResumeSection.
     * @example
     * // Delete one ResumeSection
     * const ResumeSection = await prisma.resumeSection.delete({
     *   where: {
     *     // ... filter to delete one ResumeSection
     *   }
     * })
     * 
     */
    delete<T extends ResumeSectionDeleteArgs>(args: SelectSubset<T, ResumeSectionDeleteArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResumeSection.
     * @param {ResumeSectionUpdateArgs} args - Arguments to update one ResumeSection.
     * @example
     * // Update one ResumeSection
     * const resumeSection = await prisma.resumeSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeSectionUpdateArgs>(args: SelectSubset<T, ResumeSectionUpdateArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResumeSections.
     * @param {ResumeSectionDeleteManyArgs} args - Arguments to filter ResumeSections to delete.
     * @example
     * // Delete a few ResumeSections
     * const { count } = await prisma.resumeSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeSectionDeleteManyArgs>(args?: SelectSubset<T, ResumeSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeSections
     * const resumeSection = await prisma.resumeSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeSectionUpdateManyArgs>(args: SelectSubset<T, ResumeSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeSections and returns the data updated in the database.
     * @param {ResumeSectionUpdateManyAndReturnArgs} args - Arguments to update many ResumeSections.
     * @example
     * // Update many ResumeSections
     * const resumeSection = await prisma.resumeSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResumeSections and only return the `id`
     * const resumeSectionWithIdOnly = await prisma.resumeSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResumeSection.
     * @param {ResumeSectionUpsertArgs} args - Arguments to update or create a ResumeSection.
     * @example
     * // Update or create a ResumeSection
     * const resumeSection = await prisma.resumeSection.upsert({
     *   create: {
     *     // ... data to create a ResumeSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeSection we want to update
     *   }
     * })
     */
    upsert<T extends ResumeSectionUpsertArgs>(args: SelectSubset<T, ResumeSectionUpsertArgs<ExtArgs>>): Prisma__ResumeSectionClient<$Result.GetResult<Prisma.$ResumeSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResumeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionCountArgs} args - Arguments to filter ResumeSections to count.
     * @example
     * // Count the number of ResumeSections
     * const count = await prisma.resumeSection.count({
     *   where: {
     *     // ... the filter for the ResumeSections we want to count
     *   }
     * })
    **/
    count<T extends ResumeSectionCountArgs>(
      args?: Subset<T, ResumeSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeSectionAggregateArgs>(args: Subset<T, ResumeSectionAggregateArgs>): Prisma.PrismaPromise<GetResumeSectionAggregateType<T>>

    /**
     * Group by ResumeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeSectionGroupByArgs['orderBy'] }
        : { orderBy?: ResumeSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeSection model
   */
  readonly fields: ResumeSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResumeSection model
   */
  interface ResumeSectionFieldRefs {
    readonly id: FieldRef<"ResumeSection", 'String'>
    readonly resumeId: FieldRef<"ResumeSection", 'String'>
    readonly title: FieldRef<"ResumeSection", 'String'>
    readonly content: FieldRef<"ResumeSection", 'Json'>
    readonly order: FieldRef<"ResumeSection", 'Int'>
    readonly type: FieldRef<"ResumeSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResumeSection findUnique
   */
  export type ResumeSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSection to fetch.
     */
    where: ResumeSectionWhereUniqueInput
  }

  /**
   * ResumeSection findUniqueOrThrow
   */
  export type ResumeSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSection to fetch.
     */
    where: ResumeSectionWhereUniqueInput
  }

  /**
   * ResumeSection findFirst
   */
  export type ResumeSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSection to fetch.
     */
    where?: ResumeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSections to fetch.
     */
    orderBy?: ResumeSectionOrderByWithRelationInput | ResumeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeSections.
     */
    cursor?: ResumeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeSections.
     */
    distinct?: ResumeSectionScalarFieldEnum | ResumeSectionScalarFieldEnum[]
  }

  /**
   * ResumeSection findFirstOrThrow
   */
  export type ResumeSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSection to fetch.
     */
    where?: ResumeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSections to fetch.
     */
    orderBy?: ResumeSectionOrderByWithRelationInput | ResumeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeSections.
     */
    cursor?: ResumeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeSections.
     */
    distinct?: ResumeSectionScalarFieldEnum | ResumeSectionScalarFieldEnum[]
  }

  /**
   * ResumeSection findMany
   */
  export type ResumeSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter, which ResumeSections to fetch.
     */
    where?: ResumeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeSections to fetch.
     */
    orderBy?: ResumeSectionOrderByWithRelationInput | ResumeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeSections.
     */
    cursor?: ResumeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeSections.
     */
    skip?: number
    distinct?: ResumeSectionScalarFieldEnum | ResumeSectionScalarFieldEnum[]
  }

  /**
   * ResumeSection create
   */
  export type ResumeSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeSection.
     */
    data: XOR<ResumeSectionCreateInput, ResumeSectionUncheckedCreateInput>
  }

  /**
   * ResumeSection createMany
   */
  export type ResumeSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeSections.
     */
    data: ResumeSectionCreateManyInput | ResumeSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeSection createManyAndReturn
   */
  export type ResumeSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ResumeSections.
     */
    data: ResumeSectionCreateManyInput | ResumeSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeSection update
   */
  export type ResumeSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeSection.
     */
    data: XOR<ResumeSectionUpdateInput, ResumeSectionUncheckedUpdateInput>
    /**
     * Choose, which ResumeSection to update.
     */
    where: ResumeSectionWhereUniqueInput
  }

  /**
   * ResumeSection updateMany
   */
  export type ResumeSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeSections.
     */
    data: XOR<ResumeSectionUpdateManyMutationInput, ResumeSectionUncheckedUpdateManyInput>
    /**
     * Filter which ResumeSections to update
     */
    where?: ResumeSectionWhereInput
    /**
     * Limit how many ResumeSections to update.
     */
    limit?: number
  }

  /**
   * ResumeSection updateManyAndReturn
   */
  export type ResumeSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * The data used to update ResumeSections.
     */
    data: XOR<ResumeSectionUpdateManyMutationInput, ResumeSectionUncheckedUpdateManyInput>
    /**
     * Filter which ResumeSections to update
     */
    where?: ResumeSectionWhereInput
    /**
     * Limit how many ResumeSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeSection upsert
   */
  export type ResumeSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeSection to update in case it exists.
     */
    where: ResumeSectionWhereUniqueInput
    /**
     * In case the ResumeSection found by the `where` argument doesn't exist, create a new ResumeSection with this data.
     */
    create: XOR<ResumeSectionCreateInput, ResumeSectionUncheckedCreateInput>
    /**
     * In case the ResumeSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeSectionUpdateInput, ResumeSectionUncheckedUpdateInput>
  }

  /**
   * ResumeSection delete
   */
  export type ResumeSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
    /**
     * Filter which ResumeSection to delete.
     */
    where: ResumeSectionWhereUniqueInput
  }

  /**
   * ResumeSection deleteMany
   */
  export type ResumeSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeSections to delete
     */
    where?: ResumeSectionWhereInput
    /**
     * Limit how many ResumeSections to delete.
     */
    limit?: number
  }

  /**
   * ResumeSection without action
   */
  export type ResumeSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeSection
     */
    select?: ResumeSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeSection
     */
    omit?: ResumeSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeSectionInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    githubRepo: string | null
    previewUrl: string | null
    currentVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    githubRepo: string | null
    previewUrl: string | null
    currentVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    githubRepo: number
    previewUrl: number
    currentVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubRepo?: true
    previewUrl?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubRepo?: true
    previewUrl?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubRepo?: true
    previewUrl?: true
    currentVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    slug: string
    githubRepo: string
    previewUrl: string | null
    currentVersion: string
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    githubRepo?: boolean
    previewUrl?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contributors?: boolean | Template$contributorsArgs<ExtArgs>
    Resume?: boolean | Template$ResumeArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    githubRepo?: boolean
    previewUrl?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    githubRepo?: boolean
    previewUrl?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    githubRepo?: boolean
    previewUrl?: boolean
    currentVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "githubRepo" | "previewUrl" | "currentVersion" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributors?: boolean | Template$contributorsArgs<ExtArgs>
    Resume?: boolean | Template$ResumeArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      contributors: Prisma.$TemplateContributorPayload<ExtArgs>[]
      Resume: Prisma.$ResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      githubRepo: string
      previewUrl: string | null
      currentVersion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contributors<T extends Template$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, Template$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Resume<T extends Template$ResumeArgs<ExtArgs> = {}>(args?: Subset<T, Template$ResumeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly slug: FieldRef<"Template", 'String'>
    readonly githubRepo: FieldRef<"Template", 'String'>
    readonly previewUrl: FieldRef<"Template", 'String'>
    readonly currentVersion: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.contributors
   */
  export type Template$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    where?: TemplateContributorWhereInput
    orderBy?: TemplateContributorOrderByWithRelationInput | TemplateContributorOrderByWithRelationInput[]
    cursor?: TemplateContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateContributorScalarFieldEnum | TemplateContributorScalarFieldEnum[]
  }

  /**
   * Template.Resume
   */
  export type Template$ResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateContributor
   */

  export type AggregateTemplateContributor = {
    _count: TemplateContributorCountAggregateOutputType | null
    _min: TemplateContributorMinAggregateOutputType | null
    _max: TemplateContributorMaxAggregateOutputType | null
  }

  export type TemplateContributorMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    githubUser: string | null
    avatarUrl: string | null
    profileUrl: string | null
  }

  export type TemplateContributorMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    githubUser: string | null
    avatarUrl: string | null
    profileUrl: string | null
  }

  export type TemplateContributorCountAggregateOutputType = {
    id: number
    templateId: number
    githubUser: number
    avatarUrl: number
    profileUrl: number
    _all: number
  }


  export type TemplateContributorMinAggregateInputType = {
    id?: true
    templateId?: true
    githubUser?: true
    avatarUrl?: true
    profileUrl?: true
  }

  export type TemplateContributorMaxAggregateInputType = {
    id?: true
    templateId?: true
    githubUser?: true
    avatarUrl?: true
    profileUrl?: true
  }

  export type TemplateContributorCountAggregateInputType = {
    id?: true
    templateId?: true
    githubUser?: true
    avatarUrl?: true
    profileUrl?: true
    _all?: true
  }

  export type TemplateContributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateContributor to aggregate.
     */
    where?: TemplateContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateContributors to fetch.
     */
    orderBy?: TemplateContributorOrderByWithRelationInput | TemplateContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateContributors
    **/
    _count?: true | TemplateContributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateContributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateContributorMaxAggregateInputType
  }

  export type GetTemplateContributorAggregateType<T extends TemplateContributorAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateContributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateContributor[P]>
      : GetScalarType<T[P], AggregateTemplateContributor[P]>
  }




  export type TemplateContributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateContributorWhereInput
    orderBy?: TemplateContributorOrderByWithAggregationInput | TemplateContributorOrderByWithAggregationInput[]
    by: TemplateContributorScalarFieldEnum[] | TemplateContributorScalarFieldEnum
    having?: TemplateContributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateContributorCountAggregateInputType | true
    _min?: TemplateContributorMinAggregateInputType
    _max?: TemplateContributorMaxAggregateInputType
  }

  export type TemplateContributorGroupByOutputType = {
    id: string
    templateId: string
    githubUser: string
    avatarUrl: string | null
    profileUrl: string | null
    _count: TemplateContributorCountAggregateOutputType | null
    _min: TemplateContributorMinAggregateOutputType | null
    _max: TemplateContributorMaxAggregateOutputType | null
  }

  type GetTemplateContributorGroupByPayload<T extends TemplateContributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateContributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateContributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateContributorGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateContributorGroupByOutputType[P]>
        }
      >
    >


  export type TemplateContributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    githubUser?: boolean
    avatarUrl?: boolean
    profileUrl?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateContributor"]>

  export type TemplateContributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    githubUser?: boolean
    avatarUrl?: boolean
    profileUrl?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateContributor"]>

  export type TemplateContributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    githubUser?: boolean
    avatarUrl?: boolean
    profileUrl?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateContributor"]>

  export type TemplateContributorSelectScalar = {
    id?: boolean
    templateId?: boolean
    githubUser?: boolean
    avatarUrl?: boolean
    profileUrl?: boolean
  }

  export type TemplateContributorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "githubUser" | "avatarUrl" | "profileUrl", ExtArgs["result"]["templateContributor"]>
  export type TemplateContributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateContributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateContributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateContributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateContributor"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      githubUser: string
      avatarUrl: string | null
      profileUrl: string | null
    }, ExtArgs["result"]["templateContributor"]>
    composites: {}
  }

  type TemplateContributorGetPayload<S extends boolean | null | undefined | TemplateContributorDefaultArgs> = $Result.GetResult<Prisma.$TemplateContributorPayload, S>

  type TemplateContributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateContributorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateContributorCountAggregateInputType | true
    }

  export interface TemplateContributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateContributor'], meta: { name: 'TemplateContributor' } }
    /**
     * Find zero or one TemplateContributor that matches the filter.
     * @param {TemplateContributorFindUniqueArgs} args - Arguments to find a TemplateContributor
     * @example
     * // Get one TemplateContributor
     * const templateContributor = await prisma.templateContributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateContributorFindUniqueArgs>(args: SelectSubset<T, TemplateContributorFindUniqueArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateContributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateContributorFindUniqueOrThrowArgs} args - Arguments to find a TemplateContributor
     * @example
     * // Get one TemplateContributor
     * const templateContributor = await prisma.templateContributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateContributorFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateContributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateContributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorFindFirstArgs} args - Arguments to find a TemplateContributor
     * @example
     * // Get one TemplateContributor
     * const templateContributor = await prisma.templateContributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateContributorFindFirstArgs>(args?: SelectSubset<T, TemplateContributorFindFirstArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateContributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorFindFirstOrThrowArgs} args - Arguments to find a TemplateContributor
     * @example
     * // Get one TemplateContributor
     * const templateContributor = await prisma.templateContributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateContributorFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateContributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateContributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateContributors
     * const templateContributors = await prisma.templateContributor.findMany()
     * 
     * // Get first 10 TemplateContributors
     * const templateContributors = await prisma.templateContributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateContributorWithIdOnly = await prisma.templateContributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateContributorFindManyArgs>(args?: SelectSubset<T, TemplateContributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateContributor.
     * @param {TemplateContributorCreateArgs} args - Arguments to create a TemplateContributor.
     * @example
     * // Create one TemplateContributor
     * const TemplateContributor = await prisma.templateContributor.create({
     *   data: {
     *     // ... data to create a TemplateContributor
     *   }
     * })
     * 
     */
    create<T extends TemplateContributorCreateArgs>(args: SelectSubset<T, TemplateContributorCreateArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateContributors.
     * @param {TemplateContributorCreateManyArgs} args - Arguments to create many TemplateContributors.
     * @example
     * // Create many TemplateContributors
     * const templateContributor = await prisma.templateContributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateContributorCreateManyArgs>(args?: SelectSubset<T, TemplateContributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateContributors and returns the data saved in the database.
     * @param {TemplateContributorCreateManyAndReturnArgs} args - Arguments to create many TemplateContributors.
     * @example
     * // Create many TemplateContributors
     * const templateContributor = await prisma.templateContributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateContributors and only return the `id`
     * const templateContributorWithIdOnly = await prisma.templateContributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateContributorCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateContributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateContributor.
     * @param {TemplateContributorDeleteArgs} args - Arguments to delete one TemplateContributor.
     * @example
     * // Delete one TemplateContributor
     * const TemplateContributor = await prisma.templateContributor.delete({
     *   where: {
     *     // ... filter to delete one TemplateContributor
     *   }
     * })
     * 
     */
    delete<T extends TemplateContributorDeleteArgs>(args: SelectSubset<T, TemplateContributorDeleteArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateContributor.
     * @param {TemplateContributorUpdateArgs} args - Arguments to update one TemplateContributor.
     * @example
     * // Update one TemplateContributor
     * const templateContributor = await prisma.templateContributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateContributorUpdateArgs>(args: SelectSubset<T, TemplateContributorUpdateArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateContributors.
     * @param {TemplateContributorDeleteManyArgs} args - Arguments to filter TemplateContributors to delete.
     * @example
     * // Delete a few TemplateContributors
     * const { count } = await prisma.templateContributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateContributorDeleteManyArgs>(args?: SelectSubset<T, TemplateContributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateContributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateContributors
     * const templateContributor = await prisma.templateContributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateContributorUpdateManyArgs>(args: SelectSubset<T, TemplateContributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateContributors and returns the data updated in the database.
     * @param {TemplateContributorUpdateManyAndReturnArgs} args - Arguments to update many TemplateContributors.
     * @example
     * // Update many TemplateContributors
     * const templateContributor = await prisma.templateContributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateContributors and only return the `id`
     * const templateContributorWithIdOnly = await prisma.templateContributor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateContributorUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateContributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateContributor.
     * @param {TemplateContributorUpsertArgs} args - Arguments to update or create a TemplateContributor.
     * @example
     * // Update or create a TemplateContributor
     * const templateContributor = await prisma.templateContributor.upsert({
     *   create: {
     *     // ... data to create a TemplateContributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateContributor we want to update
     *   }
     * })
     */
    upsert<T extends TemplateContributorUpsertArgs>(args: SelectSubset<T, TemplateContributorUpsertArgs<ExtArgs>>): Prisma__TemplateContributorClient<$Result.GetResult<Prisma.$TemplateContributorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateContributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorCountArgs} args - Arguments to filter TemplateContributors to count.
     * @example
     * // Count the number of TemplateContributors
     * const count = await prisma.templateContributor.count({
     *   where: {
     *     // ... the filter for the TemplateContributors we want to count
     *   }
     * })
    **/
    count<T extends TemplateContributorCountArgs>(
      args?: Subset<T, TemplateContributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateContributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateContributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateContributorAggregateArgs>(args: Subset<T, TemplateContributorAggregateArgs>): Prisma.PrismaPromise<GetTemplateContributorAggregateType<T>>

    /**
     * Group by TemplateContributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateContributorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateContributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateContributorGroupByArgs['orderBy'] }
        : { orderBy?: TemplateContributorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateContributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateContributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateContributor model
   */
  readonly fields: TemplateContributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateContributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateContributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateContributor model
   */
  interface TemplateContributorFieldRefs {
    readonly id: FieldRef<"TemplateContributor", 'String'>
    readonly templateId: FieldRef<"TemplateContributor", 'String'>
    readonly githubUser: FieldRef<"TemplateContributor", 'String'>
    readonly avatarUrl: FieldRef<"TemplateContributor", 'String'>
    readonly profileUrl: FieldRef<"TemplateContributor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TemplateContributor findUnique
   */
  export type TemplateContributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter, which TemplateContributor to fetch.
     */
    where: TemplateContributorWhereUniqueInput
  }

  /**
   * TemplateContributor findUniqueOrThrow
   */
  export type TemplateContributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter, which TemplateContributor to fetch.
     */
    where: TemplateContributorWhereUniqueInput
  }

  /**
   * TemplateContributor findFirst
   */
  export type TemplateContributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter, which TemplateContributor to fetch.
     */
    where?: TemplateContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateContributors to fetch.
     */
    orderBy?: TemplateContributorOrderByWithRelationInput | TemplateContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateContributors.
     */
    cursor?: TemplateContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateContributors.
     */
    distinct?: TemplateContributorScalarFieldEnum | TemplateContributorScalarFieldEnum[]
  }

  /**
   * TemplateContributor findFirstOrThrow
   */
  export type TemplateContributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter, which TemplateContributor to fetch.
     */
    where?: TemplateContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateContributors to fetch.
     */
    orderBy?: TemplateContributorOrderByWithRelationInput | TemplateContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateContributors.
     */
    cursor?: TemplateContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateContributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateContributors.
     */
    distinct?: TemplateContributorScalarFieldEnum | TemplateContributorScalarFieldEnum[]
  }

  /**
   * TemplateContributor findMany
   */
  export type TemplateContributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter, which TemplateContributors to fetch.
     */
    where?: TemplateContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateContributors to fetch.
     */
    orderBy?: TemplateContributorOrderByWithRelationInput | TemplateContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateContributors.
     */
    cursor?: TemplateContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateContributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateContributors.
     */
    skip?: number
    distinct?: TemplateContributorScalarFieldEnum | TemplateContributorScalarFieldEnum[]
  }

  /**
   * TemplateContributor create
   */
  export type TemplateContributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateContributor.
     */
    data: XOR<TemplateContributorCreateInput, TemplateContributorUncheckedCreateInput>
  }

  /**
   * TemplateContributor createMany
   */
  export type TemplateContributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateContributors.
     */
    data: TemplateContributorCreateManyInput | TemplateContributorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateContributor createManyAndReturn
   */
  export type TemplateContributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateContributors.
     */
    data: TemplateContributorCreateManyInput | TemplateContributorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateContributor update
   */
  export type TemplateContributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateContributor.
     */
    data: XOR<TemplateContributorUpdateInput, TemplateContributorUncheckedUpdateInput>
    /**
     * Choose, which TemplateContributor to update.
     */
    where: TemplateContributorWhereUniqueInput
  }

  /**
   * TemplateContributor updateMany
   */
  export type TemplateContributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateContributors.
     */
    data: XOR<TemplateContributorUpdateManyMutationInput, TemplateContributorUncheckedUpdateManyInput>
    /**
     * Filter which TemplateContributors to update
     */
    where?: TemplateContributorWhereInput
    /**
     * Limit how many TemplateContributors to update.
     */
    limit?: number
  }

  /**
   * TemplateContributor updateManyAndReturn
   */
  export type TemplateContributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * The data used to update TemplateContributors.
     */
    data: XOR<TemplateContributorUpdateManyMutationInput, TemplateContributorUncheckedUpdateManyInput>
    /**
     * Filter which TemplateContributors to update
     */
    where?: TemplateContributorWhereInput
    /**
     * Limit how many TemplateContributors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateContributor upsert
   */
  export type TemplateContributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateContributor to update in case it exists.
     */
    where: TemplateContributorWhereUniqueInput
    /**
     * In case the TemplateContributor found by the `where` argument doesn't exist, create a new TemplateContributor with this data.
     */
    create: XOR<TemplateContributorCreateInput, TemplateContributorUncheckedCreateInput>
    /**
     * In case the TemplateContributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateContributorUpdateInput, TemplateContributorUncheckedUpdateInput>
  }

  /**
   * TemplateContributor delete
   */
  export type TemplateContributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
    /**
     * Filter which TemplateContributor to delete.
     */
    where: TemplateContributorWhereUniqueInput
  }

  /**
   * TemplateContributor deleteMany
   */
  export type TemplateContributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateContributors to delete
     */
    where?: TemplateContributorWhereInput
    /**
     * Limit how many TemplateContributors to delete.
     */
    limit?: number
  }

  /**
   * TemplateContributor without action
   */
  export type TemplateContributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateContributor
     */
    select?: TemplateContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateContributor
     */
    omit?: TemplateContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateContributorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarURL: 'avatarURL',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    templateId: 'templateId',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ResumeSectionScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    title: 'title',
    content: 'content',
    order: 'order',
    type: 'type'
  };

  export type ResumeSectionScalarFieldEnum = (typeof ResumeSectionScalarFieldEnum)[keyof typeof ResumeSectionScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    githubRepo: 'githubRepo',
    previewUrl: 'previewUrl',
    currentVersion: 'currentVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateContributorScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    githubUser: 'githubUser',
    avatarUrl: 'avatarUrl',
    profileUrl: 'profileUrl'
  };

  export type TemplateContributorScalarFieldEnum = (typeof TemplateContributorScalarFieldEnum)[keyof typeof TemplateContributorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarURL?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarURL?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarURL?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    templateId?: StringNullableFilter<"Resume"> | string | null
    version?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    sections?: ResumeSectionListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
    sections?: ResumeSectionOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    title?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    templateId?: StringNullableFilter<"Resume"> | string | null
    version?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    sections?: ResumeSectionListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    title?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    templateId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    version?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type ResumeSectionWhereInput = {
    AND?: ResumeSectionWhereInput | ResumeSectionWhereInput[]
    OR?: ResumeSectionWhereInput[]
    NOT?: ResumeSectionWhereInput | ResumeSectionWhereInput[]
    id?: StringFilter<"ResumeSection"> | string
    resumeId?: StringFilter<"ResumeSection"> | string
    title?: StringFilter<"ResumeSection"> | string
    content?: JsonFilter<"ResumeSection">
    order?: IntFilter<"ResumeSection"> | number
    type?: StringFilter<"ResumeSection"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ResumeSectionOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    type?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ResumeSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeSectionWhereInput | ResumeSectionWhereInput[]
    OR?: ResumeSectionWhereInput[]
    NOT?: ResumeSectionWhereInput | ResumeSectionWhereInput[]
    resumeId?: StringFilter<"ResumeSection"> | string
    title?: StringFilter<"ResumeSection"> | string
    content?: JsonFilter<"ResumeSection">
    order?: IntFilter<"ResumeSection"> | number
    type?: StringFilter<"ResumeSection"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type ResumeSectionOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    type?: SortOrder
    _count?: ResumeSectionCountOrderByAggregateInput
    _avg?: ResumeSectionAvgOrderByAggregateInput
    _max?: ResumeSectionMaxOrderByAggregateInput
    _min?: ResumeSectionMinOrderByAggregateInput
    _sum?: ResumeSectionSumOrderByAggregateInput
  }

  export type ResumeSectionScalarWhereWithAggregatesInput = {
    AND?: ResumeSectionScalarWhereWithAggregatesInput | ResumeSectionScalarWhereWithAggregatesInput[]
    OR?: ResumeSectionScalarWhereWithAggregatesInput[]
    NOT?: ResumeSectionScalarWhereWithAggregatesInput | ResumeSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumeSection"> | string
    resumeId?: StringWithAggregatesFilter<"ResumeSection"> | string
    title?: StringWithAggregatesFilter<"ResumeSection"> | string
    content?: JsonWithAggregatesFilter<"ResumeSection">
    order?: IntWithAggregatesFilter<"ResumeSection"> | number
    type?: StringWithAggregatesFilter<"ResumeSection"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    slug?: StringFilter<"Template"> | string
    githubRepo?: StringFilter<"Template"> | string
    previewUrl?: StringNullableFilter<"Template"> | string | null
    currentVersion?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    contributors?: TemplateContributorListRelationFilter
    Resume?: ResumeListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubRepo?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contributors?: TemplateContributorOrderByRelationAggregateInput
    Resume?: ResumeOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    githubRepo?: StringFilter<"Template"> | string
    previewUrl?: StringNullableFilter<"Template"> | string | null
    currentVersion?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    contributors?: TemplateContributorListRelationFilter
    Resume?: ResumeListRelationFilter
  }, "id" | "slug">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubRepo?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    slug?: StringWithAggregatesFilter<"Template"> | string
    githubRepo?: StringWithAggregatesFilter<"Template"> | string
    previewUrl?: StringNullableWithAggregatesFilter<"Template"> | string | null
    currentVersion?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type TemplateContributorWhereInput = {
    AND?: TemplateContributorWhereInput | TemplateContributorWhereInput[]
    OR?: TemplateContributorWhereInput[]
    NOT?: TemplateContributorWhereInput | TemplateContributorWhereInput[]
    id?: StringFilter<"TemplateContributor"> | string
    templateId?: StringFilter<"TemplateContributor"> | string
    githubUser?: StringFilter<"TemplateContributor"> | string
    avatarUrl?: StringNullableFilter<"TemplateContributor"> | string | null
    profileUrl?: StringNullableFilter<"TemplateContributor"> | string | null
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }

  export type TemplateContributorOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    githubUser?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    template?: TemplateOrderByWithRelationInput
  }

  export type TemplateContributorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateContributorWhereInput | TemplateContributorWhereInput[]
    OR?: TemplateContributorWhereInput[]
    NOT?: TemplateContributorWhereInput | TemplateContributorWhereInput[]
    templateId?: StringFilter<"TemplateContributor"> | string
    githubUser?: StringFilter<"TemplateContributor"> | string
    avatarUrl?: StringNullableFilter<"TemplateContributor"> | string | null
    profileUrl?: StringNullableFilter<"TemplateContributor"> | string | null
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }, "id">

  export type TemplateContributorOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    githubUser?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    _count?: TemplateContributorCountOrderByAggregateInput
    _max?: TemplateContributorMaxOrderByAggregateInput
    _min?: TemplateContributorMinOrderByAggregateInput
  }

  export type TemplateContributorScalarWhereWithAggregatesInput = {
    AND?: TemplateContributorScalarWhereWithAggregatesInput | TemplateContributorScalarWhereWithAggregatesInput[]
    OR?: TemplateContributorScalarWhereWithAggregatesInput[]
    NOT?: TemplateContributorScalarWhereWithAggregatesInput | TemplateContributorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateContributor"> | string
    templateId?: StringWithAggregatesFilter<"TemplateContributor"> | string
    githubUser?: StringWithAggregatesFilter<"TemplateContributor"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"TemplateContributor"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"TemplateContributor"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatarURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    title: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    template?: TemplateCreateNestedOneWithoutResumeInput
    sections?: ResumeSectionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    templateId?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: ResumeSectionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
    sections?: ResumeSectionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: ResumeSectionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    title: string
    userId: string
    templateId?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeSectionCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
    resume: ResumeCreateNestedOneWithoutSectionsInput
  }

  export type ResumeSectionUncheckedCreateInput = {
    id?: string
    resumeId: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
  }

  export type ResumeSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type ResumeSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSectionCreateManyInput = {
    id?: string
    resumeId: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
  }

  export type ResumeSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: TemplateContributorCreateNestedManyWithoutTemplateInput
    Resume?: ResumeCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: TemplateContributorUncheckedCreateNestedManyWithoutTemplateInput
    Resume?: ResumeUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: TemplateContributorUpdateManyWithoutTemplateNestedInput
    Resume?: ResumeUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: TemplateContributorUncheckedUpdateManyWithoutTemplateNestedInput
    Resume?: ResumeUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateContributorCreateInput = {
    id?: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
    template: TemplateCreateNestedOneWithoutContributorsInput
  }

  export type TemplateContributorUncheckedCreateInput = {
    id?: string
    templateId: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
  }

  export type TemplateContributorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: TemplateUpdateOneRequiredWithoutContributorsNestedInput
  }

  export type TemplateContributorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateContributorCreateManyInput = {
    id?: string
    templateId: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
  }

  export type TemplateContributorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateContributorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type ResumeSectionListRelationFilter = {
    every?: ResumeSectionWhereInput
    some?: ResumeSectionWhereInput
    none?: ResumeSectionWhereInput
  }

  export type ResumeSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type ResumeSectionCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    type?: SortOrder
  }

  export type ResumeSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ResumeSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    type?: SortOrder
  }

  export type ResumeSectionMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    type?: SortOrder
  }

  export type ResumeSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TemplateContributorListRelationFilter = {
    every?: TemplateContributorWhereInput
    some?: TemplateContributorWhereInput
    none?: TemplateContributorWhereInput
  }

  export type TemplateContributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubRepo?: SortOrder
    previewUrl?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubRepo?: SortOrder
    previewUrl?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubRepo?: SortOrder
    previewUrl?: SortOrder
    currentVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateContributorCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    githubUser?: SortOrder
    avatarUrl?: SortOrder
    profileUrl?: SortOrder
  }

  export type TemplateContributorMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    githubUser?: SortOrder
    avatarUrl?: SortOrder
    profileUrl?: SortOrder
  }

  export type TemplateContributorMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    githubUser?: SortOrder
    avatarUrl?: SortOrder
    profileUrl?: SortOrder
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutResumeInput = {
    create?: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumeInput
    connect?: TemplateWhereUniqueInput
  }

  export type ResumeSectionCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput> | ResumeSectionCreateWithoutResumeInput[] | ResumeSectionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSectionCreateOrConnectWithoutResumeInput | ResumeSectionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeSectionCreateManyResumeInputEnvelope
    connect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
  }

  export type ResumeSectionUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput> | ResumeSectionCreateWithoutResumeInput[] | ResumeSectionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSectionCreateOrConnectWithoutResumeInput | ResumeSectionCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeSectionCreateManyResumeInputEnvelope
    connect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type TemplateUpdateOneWithoutResumeNestedInput = {
    create?: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumeInput
    upsert?: TemplateUpsertWithoutResumeInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutResumeInput, TemplateUpdateWithoutResumeInput>, TemplateUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeSectionUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput> | ResumeSectionCreateWithoutResumeInput[] | ResumeSectionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSectionCreateOrConnectWithoutResumeInput | ResumeSectionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeSectionUpsertWithWhereUniqueWithoutResumeInput | ResumeSectionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeSectionCreateManyResumeInputEnvelope
    set?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    disconnect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    delete?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    connect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    update?: ResumeSectionUpdateWithWhereUniqueWithoutResumeInput | ResumeSectionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeSectionUpdateManyWithWhereWithoutResumeInput | ResumeSectionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeSectionScalarWhereInput | ResumeSectionScalarWhereInput[]
  }

  export type ResumeSectionUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput> | ResumeSectionCreateWithoutResumeInput[] | ResumeSectionUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeSectionCreateOrConnectWithoutResumeInput | ResumeSectionCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeSectionUpsertWithWhereUniqueWithoutResumeInput | ResumeSectionUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeSectionCreateManyResumeInputEnvelope
    set?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    disconnect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    delete?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    connect?: ResumeSectionWhereUniqueInput | ResumeSectionWhereUniqueInput[]
    update?: ResumeSectionUpdateWithWhereUniqueWithoutResumeInput | ResumeSectionUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeSectionUpdateManyWithWhereWithoutResumeInput | ResumeSectionUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeSectionScalarWhereInput | ResumeSectionScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutSectionsInput = {
    create?: XOR<ResumeCreateWithoutSectionsInput, ResumeUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSectionsInput
    connect?: ResumeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResumeUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<ResumeCreateWithoutSectionsInput, ResumeUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSectionsInput
    upsert?: ResumeUpsertWithoutSectionsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSectionsInput, ResumeUpdateWithoutSectionsInput>, ResumeUncheckedUpdateWithoutSectionsInput>
  }

  export type TemplateContributorCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput> | TemplateContributorCreateWithoutTemplateInput[] | TemplateContributorUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateContributorCreateOrConnectWithoutTemplateInput | TemplateContributorCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateContributorCreateManyTemplateInputEnvelope
    connect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
  }

  export type ResumeCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type TemplateContributorUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput> | TemplateContributorCreateWithoutTemplateInput[] | TemplateContributorUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateContributorCreateOrConnectWithoutTemplateInput | TemplateContributorCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateContributorCreateManyTemplateInputEnvelope
    connect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type TemplateContributorUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput> | TemplateContributorCreateWithoutTemplateInput[] | TemplateContributorUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateContributorCreateOrConnectWithoutTemplateInput | TemplateContributorCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateContributorUpsertWithWhereUniqueWithoutTemplateInput | TemplateContributorUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateContributorCreateManyTemplateInputEnvelope
    set?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    disconnect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    delete?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    connect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    update?: TemplateContributorUpdateWithWhereUniqueWithoutTemplateInput | TemplateContributorUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateContributorUpdateManyWithWhereWithoutTemplateInput | TemplateContributorUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateContributorScalarWhereInput | TemplateContributorScalarWhereInput[]
  }

  export type ResumeUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutTemplateInput | ResumeUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutTemplateInput | ResumeUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutTemplateInput | ResumeUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type TemplateContributorUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput> | TemplateContributorCreateWithoutTemplateInput[] | TemplateContributorUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateContributorCreateOrConnectWithoutTemplateInput | TemplateContributorCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateContributorUpsertWithWhereUniqueWithoutTemplateInput | TemplateContributorUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateContributorCreateManyTemplateInputEnvelope
    set?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    disconnect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    delete?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    connect?: TemplateContributorWhereUniqueInput | TemplateContributorWhereUniqueInput[]
    update?: TemplateContributorUpdateWithWhereUniqueWithoutTemplateInput | TemplateContributorUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateContributorUpdateManyWithWhereWithoutTemplateInput | TemplateContributorUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateContributorScalarWhereInput | TemplateContributorScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutTemplateInput | ResumeUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutTemplateInput | ResumeUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutTemplateInput | ResumeUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutContributorsInput = {
    create?: XOR<TemplateCreateWithoutContributorsInput, TemplateUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutContributorsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateUpdateOneRequiredWithoutContributorsNestedInput = {
    create?: XOR<TemplateCreateWithoutContributorsInput, TemplateUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutContributorsInput
    upsert?: TemplateUpsertWithoutContributorsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutContributorsInput, TemplateUpdateWithoutContributorsInput>, TemplateUncheckedUpdateWithoutContributorsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    title: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: TemplateCreateNestedOneWithoutResumeInput
    sections?: ResumeSectionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    templateId?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: ResumeSectionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    templateId?: StringNullableFilter<"Resume"> | string | null
    version?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    avatarURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    avatarURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type TemplateCreateWithoutResumeInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: TemplateContributorCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutResumeInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributors?: TemplateContributorUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutResumeInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
  }

  export type ResumeSectionCreateWithoutResumeInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
  }

  export type ResumeSectionUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
  }

  export type ResumeSectionCreateOrConnectWithoutResumeInput = {
    where: ResumeSectionWhereUniqueInput
    create: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeSectionCreateManyResumeInputEnvelope = {
    data: ResumeSectionCreateManyResumeInput | ResumeSectionCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpsertWithoutResumeInput = {
    update: XOR<TemplateUpdateWithoutResumeInput, TemplateUncheckedUpdateWithoutResumeInput>
    create: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutResumeInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutResumeInput, TemplateUncheckedUpdateWithoutResumeInput>
  }

  export type TemplateUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: TemplateContributorUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributors?: TemplateContributorUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ResumeSectionUpsertWithWhereUniqueWithoutResumeInput = {
    where: ResumeSectionWhereUniqueInput
    update: XOR<ResumeSectionUpdateWithoutResumeInput, ResumeSectionUncheckedUpdateWithoutResumeInput>
    create: XOR<ResumeSectionCreateWithoutResumeInput, ResumeSectionUncheckedCreateWithoutResumeInput>
  }

  export type ResumeSectionUpdateWithWhereUniqueWithoutResumeInput = {
    where: ResumeSectionWhereUniqueInput
    data: XOR<ResumeSectionUpdateWithoutResumeInput, ResumeSectionUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeSectionUpdateManyWithWhereWithoutResumeInput = {
    where: ResumeSectionScalarWhereInput
    data: XOR<ResumeSectionUpdateManyMutationInput, ResumeSectionUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeSectionScalarWhereInput = {
    AND?: ResumeSectionScalarWhereInput | ResumeSectionScalarWhereInput[]
    OR?: ResumeSectionScalarWhereInput[]
    NOT?: ResumeSectionScalarWhereInput | ResumeSectionScalarWhereInput[]
    id?: StringFilter<"ResumeSection"> | string
    resumeId?: StringFilter<"ResumeSection"> | string
    title?: StringFilter<"ResumeSection"> | string
    content?: JsonFilter<"ResumeSection">
    order?: IntFilter<"ResumeSection"> | number
    type?: StringFilter<"ResumeSection"> | string
  }

  export type ResumeCreateWithoutSectionsInput = {
    id?: string
    title: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    template?: TemplateCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    userId: string
    templateId?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutSectionsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSectionsInput, ResumeUncheckedCreateWithoutSectionsInput>
  }

  export type ResumeUpsertWithoutSectionsInput = {
    update: XOR<ResumeUpdateWithoutSectionsInput, ResumeUncheckedUpdateWithoutSectionsInput>
    create: XOR<ResumeCreateWithoutSectionsInput, ResumeUncheckedCreateWithoutSectionsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSectionsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSectionsInput, ResumeUncheckedUpdateWithoutSectionsInput>
  }

  export type ResumeUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateContributorCreateWithoutTemplateInput = {
    id?: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
  }

  export type TemplateContributorUncheckedCreateWithoutTemplateInput = {
    id?: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
  }

  export type TemplateContributorCreateOrConnectWithoutTemplateInput = {
    where: TemplateContributorWhereUniqueInput
    create: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateContributorCreateManyTemplateInputEnvelope = {
    data: TemplateContributorCreateManyTemplateInput | TemplateContributorCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutTemplateInput = {
    id?: string
    title: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    sections?: ResumeSectionCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutTemplateInput = {
    id?: string
    title: string
    userId: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: ResumeSectionUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeCreateManyTemplateInputEnvelope = {
    data: ResumeCreateManyTemplateInput | ResumeCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateContributorUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateContributorWhereUniqueInput
    update: XOR<TemplateContributorUpdateWithoutTemplateInput, TemplateContributorUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateContributorCreateWithoutTemplateInput, TemplateContributorUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateContributorUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateContributorWhereUniqueInput
    data: XOR<TemplateContributorUpdateWithoutTemplateInput, TemplateContributorUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateContributorUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateContributorScalarWhereInput
    data: XOR<TemplateContributorUpdateManyMutationInput, TemplateContributorUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateContributorScalarWhereInput = {
    AND?: TemplateContributorScalarWhereInput | TemplateContributorScalarWhereInput[]
    OR?: TemplateContributorScalarWhereInput[]
    NOT?: TemplateContributorScalarWhereInput | TemplateContributorScalarWhereInput[]
    id?: StringFilter<"TemplateContributor"> | string
    templateId?: StringFilter<"TemplateContributor"> | string
    githubUser?: StringFilter<"TemplateContributor"> | string
    avatarUrl?: StringNullableFilter<"TemplateContributor"> | string | null
    profileUrl?: StringNullableFilter<"TemplateContributor"> | string | null
  }

  export type ResumeUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
  }

  export type ResumeUpdateManyWithWhereWithoutTemplateInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateCreateWithoutContributorsInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resume?: ResumeCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutContributorsInput = {
    id?: string
    name: string
    slug: string
    githubRepo: string
    previewUrl?: string | null
    currentVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resume?: ResumeUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutContributorsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutContributorsInput, TemplateUncheckedCreateWithoutContributorsInput>
  }

  export type TemplateUpsertWithoutContributorsInput = {
    update: XOR<TemplateUpdateWithoutContributorsInput, TemplateUncheckedUpdateWithoutContributorsInput>
    create: XOR<TemplateCreateWithoutContributorsInput, TemplateUncheckedCreateWithoutContributorsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutContributorsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutContributorsInput, TemplateUncheckedUpdateWithoutContributorsInput>
  }

  export type TemplateUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resume?: ResumeUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubRepo?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resume?: ResumeUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    title: string
    templateId?: string | null
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneWithoutResumeNestedInput
    sections?: ResumeSectionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: ResumeSectionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeSectionCreateManyResumeInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    order: number
    type: string
  }

  export type ResumeSectionUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSectionUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeSectionUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateContributorCreateManyTemplateInput = {
    id?: string
    githubUser: string
    avatarUrl?: string | null
    profileUrl?: string | null
  }

  export type ResumeCreateManyTemplateInput = {
    id?: string
    title: string
    userId: string
    version?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateContributorUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateContributorUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateContributorUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubUser?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResumeUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    sections?: ResumeSectionUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: ResumeSectionUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}