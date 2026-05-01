
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
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model Evaluation_B
 * 
 */
export type Evaluation_B = $Result.DefaultSelection<Prisma.$Evaluation_BPayload>

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
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation_B`: Exposes CRUD operations for the **Evaluation_B** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_BS
    * const evaluation_BS = await prisma.evaluation_B.findMany()
    * ```
    */
  get evaluation_B(): Prisma.Evaluation_BDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Evaluation: 'Evaluation',
    Evaluation_B: 'Evaluation_B'
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
      modelProps: "user" | "evaluation" | "evaluation_B"
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
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      Evaluation_B: {
        payload: Prisma.$Evaluation_BPayload<ExtArgs>
        fields: Prisma.Evaluation_BFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Evaluation_BFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Evaluation_BFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          findFirst: {
            args: Prisma.Evaluation_BFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Evaluation_BFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          findMany: {
            args: Prisma.Evaluation_BFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>[]
          }
          create: {
            args: Prisma.Evaluation_BCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          createMany: {
            args: Prisma.Evaluation_BCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Evaluation_BCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>[]
          }
          delete: {
            args: Prisma.Evaluation_BDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          update: {
            args: Prisma.Evaluation_BUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          deleteMany: {
            args: Prisma.Evaluation_BDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Evaluation_BUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Evaluation_BUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>[]
          }
          upsert: {
            args: Prisma.Evaluation_BUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Evaluation_BPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_BAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_B>
          }
          groupBy: {
            args: Prisma.Evaluation_BGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_BGroupByOutputType>[]
          }
          count: {
            args: Prisma.Evaluation_BCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_BCountAggregateOutputType> | number
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
    evaluation?: EvaluationOmit
    evaluation_B?: Evaluation_BOmit
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
    evaluations: number
    evaluation_B: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | UserCountOutputTypeCountEvaluationsArgs
    evaluation_B?: boolean | UserCountOutputTypeCountEvaluation_BArgs
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
  export type UserCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvaluation_BArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Evaluation_BWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    accounttype_en: string | null
    accounttype_th: string | null
    cmuaccount: string | null
    fullname_en: string | null
    fullname_th: string | null
    level1agency_en: string | null
    level1agency_th: string | null
    level2agency_en: string | null
    level2agency_th: string | null
    level3agency_en: string | null
    level3agency_th: string | null
    positiontitle_en: string | null
    positiontitle_th: string | null
    ratenumber: string | null
    workingstatus: boolean | null
    imageprofile: string | null
    nickname: string | null
  }

  export type UserMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    accounttype_en: string | null
    accounttype_th: string | null
    cmuaccount: string | null
    fullname_en: string | null
    fullname_th: string | null
    level1agency_en: string | null
    level1agency_th: string | null
    level2agency_en: string | null
    level2agency_th: string | null
    level3agency_en: string | null
    level3agency_th: string | null
    positiontitle_en: string | null
    positiontitle_th: string | null
    ratenumber: string | null
    workingstatus: boolean | null
    imageprofile: string | null
    nickname: string | null
  }

  export type UserCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    accountId: number
    accounttype_en: number
    accounttype_th: number
    cmuaccount: number
    fullname_en: number
    fullname_th: number
    level1agency_en: number
    level1agency_th: number
    level2agency_en: number
    level2agency_th: number
    level3agency_en: number
    level3agency_th: number
    positiontitle_en: number
    positiontitle_th: number
    ratenumber: number
    workingstatus: number
    imageprofile: number
    nickname: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    accountId?: true
    accounttype_en?: true
    accounttype_th?: true
    cmuaccount?: true
    fullname_en?: true
    fullname_th?: true
    level1agency_en?: true
    level1agency_th?: true
    level2agency_en?: true
    level2agency_th?: true
    level3agency_en?: true
    level3agency_th?: true
    positiontitle_en?: true
    positiontitle_th?: true
    ratenumber?: true
    workingstatus?: true
    imageprofile?: true
    nickname?: true
  }

  export type UserMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    accountId?: true
    accounttype_en?: true
    accounttype_th?: true
    cmuaccount?: true
    fullname_en?: true
    fullname_th?: true
    level1agency_en?: true
    level1agency_th?: true
    level2agency_en?: true
    level2agency_th?: true
    level3agency_en?: true
    level3agency_th?: true
    positiontitle_en?: true
    positiontitle_th?: true
    ratenumber?: true
    workingstatus?: true
    imageprofile?: true
    nickname?: true
  }

  export type UserCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    accountId?: true
    accounttype_en?: true
    accounttype_th?: true
    cmuaccount?: true
    fullname_en?: true
    fullname_th?: true
    level1agency_en?: true
    level1agency_th?: true
    level2agency_en?: true
    level2agency_th?: true
    level3agency_en?: true
    level3agency_th?: true
    positiontitle_en?: true
    positiontitle_th?: true
    ratenumber?: true
    workingstatus?: true
    imageprofile?: true
    nickname?: true
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
    createdAt: Date
    updatedAt: Date
    accountId: string
    accounttype_en: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en: string | null
    fullname_th: string
    level1agency_en: string | null
    level1agency_th: string
    level2agency_en: string | null
    level2agency_th: string
    level3agency_en: string | null
    level3agency_th: string | null
    positiontitle_en: string | null
    positiontitle_th: string
    ratenumber: string | null
    workingstatus: boolean
    imageprofile: string | null
    nickname: string | null
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
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    accounttype_en?: boolean
    accounttype_th?: boolean
    cmuaccount?: boolean
    fullname_en?: boolean
    fullname_th?: boolean
    level1agency_en?: boolean
    level1agency_th?: boolean
    level2agency_en?: boolean
    level2agency_th?: boolean
    level3agency_en?: boolean
    level3agency_th?: boolean
    positiontitle_en?: boolean
    positiontitle_th?: boolean
    ratenumber?: boolean
    workingstatus?: boolean
    imageprofile?: boolean
    nickname?: boolean
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    evaluation_B?: boolean | User$evaluation_BArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    accounttype_en?: boolean
    accounttype_th?: boolean
    cmuaccount?: boolean
    fullname_en?: boolean
    fullname_th?: boolean
    level1agency_en?: boolean
    level1agency_th?: boolean
    level2agency_en?: boolean
    level2agency_th?: boolean
    level3agency_en?: boolean
    level3agency_th?: boolean
    positiontitle_en?: boolean
    positiontitle_th?: boolean
    ratenumber?: boolean
    workingstatus?: boolean
    imageprofile?: boolean
    nickname?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    accounttype_en?: boolean
    accounttype_th?: boolean
    cmuaccount?: boolean
    fullname_en?: boolean
    fullname_th?: boolean
    level1agency_en?: boolean
    level1agency_th?: boolean
    level2agency_en?: boolean
    level2agency_th?: boolean
    level3agency_en?: boolean
    level3agency_th?: boolean
    positiontitle_en?: boolean
    positiontitle_th?: boolean
    ratenumber?: boolean
    workingstatus?: boolean
    imageprofile?: boolean
    nickname?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    accounttype_en?: boolean
    accounttype_th?: boolean
    cmuaccount?: boolean
    fullname_en?: boolean
    fullname_th?: boolean
    level1agency_en?: boolean
    level1agency_th?: boolean
    level2agency_en?: boolean
    level2agency_th?: boolean
    level3agency_en?: boolean
    level3agency_th?: boolean
    positiontitle_en?: boolean
    positiontitle_th?: boolean
    ratenumber?: boolean
    workingstatus?: boolean
    imageprofile?: boolean
    nickname?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"createdAt" | "updatedAt" | "accountId" | "accounttype_en" | "accounttype_th" | "cmuaccount" | "fullname_en" | "fullname_th" | "level1agency_en" | "level1agency_th" | "level2agency_en" | "level2agency_th" | "level3agency_en" | "level3agency_th" | "positiontitle_en" | "positiontitle_th" | "ratenumber" | "workingstatus" | "imageprofile" | "nickname", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    evaluation_B?: boolean | User$evaluation_BArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      evaluation_B: Prisma.$Evaluation_BPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date
      updatedAt: Date
      accountId: string
      accounttype_en: string | null
      accounttype_th: string
      cmuaccount: string
      fullname_en: string | null
      fullname_th: string
      level1agency_en: string | null
      level1agency_th: string
      level2agency_en: string | null
      level2agency_th: string
      level3agency_en: string | null
      level3agency_th: string | null
      positiontitle_en: string | null
      positiontitle_th: string
      ratenumber: string | null
      workingstatus: boolean
      imageprofile: string | null
      nickname: string | null
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
     * // Only select the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.findMany({ select: { createdAt: true } })
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
     * // Create many Users and only return the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.createManyAndReturn({
     *   select: { createdAt: true },
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
     * // Update zero or more Users and only return the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.updateManyAndReturn({
     *   select: { createdAt: true },
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
    evaluations<T extends User$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluation_B<T extends User$evaluation_BArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluation_BArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly accountId: FieldRef<"User", 'String'>
    readonly accounttype_en: FieldRef<"User", 'String'>
    readonly accounttype_th: FieldRef<"User", 'String'>
    readonly cmuaccount: FieldRef<"User", 'String'>
    readonly fullname_en: FieldRef<"User", 'String'>
    readonly fullname_th: FieldRef<"User", 'String'>
    readonly level1agency_en: FieldRef<"User", 'String'>
    readonly level1agency_th: FieldRef<"User", 'String'>
    readonly level2agency_en: FieldRef<"User", 'String'>
    readonly level2agency_th: FieldRef<"User", 'String'>
    readonly level3agency_en: FieldRef<"User", 'String'>
    readonly level3agency_th: FieldRef<"User", 'String'>
    readonly positiontitle_en: FieldRef<"User", 'String'>
    readonly positiontitle_th: FieldRef<"User", 'String'>
    readonly ratenumber: FieldRef<"User", 'String'>
    readonly workingstatus: FieldRef<"User", 'Boolean'>
    readonly imageprofile: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
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
   * User.evaluations
   */
  export type User$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * User.evaluation_B
   */
  export type User$evaluation_BArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    where?: Evaluation_BWhereInput
    orderBy?: Evaluation_BOrderByWithRelationInput | Evaluation_BOrderByWithRelationInput[]
    cursor?: Evaluation_BWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_BScalarFieldEnum | Evaluation_BScalarFieldEnum[]
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
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    evaluationId: string | null
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    comment: string | null
    fullname_th: string | null
    assessor: string | null
  }

  export type EvaluationMaxAggregateOutputType = {
    evaluationId: string | null
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    comment: string | null
    fullname_th: string | null
    assessor: string | null
  }

  export type EvaluationCountAggregateOutputType = {
    evaluationId: number
    topic1: number
    topic2: number
    topic3: number
    topic4: number
    topic5: number
    topic6: number
    topic7: number
    topic8: number
    topic9: number
    createdAt: number
    updatedAt: number
    accountId: number
    comment: number
    fullname_th: number
    assessor: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
  }

  export type EvaluationSumAggregateInputType = {
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
  }

  export type EvaluationMinAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
  }

  export type EvaluationMaxAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
  }

  export type EvaluationCountAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    evaluationId: string
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    createdAt: Date
    updatedAt: Date
    accountId: string
    comment: string | null
    fullname_th: string | null
    assessor: string | null
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"evaluationId" | "topic1" | "topic2" | "topic3" | "topic4" | "topic5" | "topic6" | "topic7" | "topic8" | "topic9" | "createdAt" | "updatedAt" | "accountId" | "comment" | "fullname_th" | "assessor", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      evaluationId: string
      topic1: number | null
      topic2: number | null
      topic3: number | null
      topic4: number | null
      topic5: number | null
      topic6: number | null
      topic7: number | null
      topic8: number | null
      topic9: number | null
      createdAt: Date
      updatedAt: Date
      accountId: string
      comment: string | null
      fullname_th: string | null
      assessor: string | null
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `evaluationId`
     * const evaluationWithEvaluationIdOnly = await prisma.evaluation.findMany({ select: { evaluationId: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `evaluationId`
     * const evaluationWithEvaluationIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { evaluationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `evaluationId`
     * const evaluationWithEvaluationIdOnly = await prisma.evaluation.updateManyAndReturn({
     *   select: { evaluationId: true },
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
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly evaluationId: FieldRef<"Evaluation", 'String'>
    readonly topic1: FieldRef<"Evaluation", 'Int'>
    readonly topic2: FieldRef<"Evaluation", 'Int'>
    readonly topic3: FieldRef<"Evaluation", 'Int'>
    readonly topic4: FieldRef<"Evaluation", 'Int'>
    readonly topic5: FieldRef<"Evaluation", 'Int'>
    readonly topic6: FieldRef<"Evaluation", 'Int'>
    readonly topic7: FieldRef<"Evaluation", 'Int'>
    readonly topic8: FieldRef<"Evaluation", 'Int'>
    readonly topic9: FieldRef<"Evaluation", 'Int'>
    readonly createdAt: FieldRef<"Evaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"Evaluation", 'DateTime'>
    readonly accountId: FieldRef<"Evaluation", 'String'>
    readonly comment: FieldRef<"Evaluation", 'String'>
    readonly fullname_th: FieldRef<"Evaluation", 'String'>
    readonly assessor: FieldRef<"Evaluation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation_B
   */

  export type AggregateEvaluation_B = {
    _count: Evaluation_BCountAggregateOutputType | null
    _avg: Evaluation_BAvgAggregateOutputType | null
    _sum: Evaluation_BSumAggregateOutputType | null
    _min: Evaluation_BMinAggregateOutputType | null
    _max: Evaluation_BMaxAggregateOutputType | null
  }

  export type Evaluation_BAvgAggregateOutputType = {
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    topic10: number | null
    topic11: number | null
    topic12: number | null
  }

  export type Evaluation_BSumAggregateOutputType = {
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    topic10: number | null
    topic11: number | null
    topic12: number | null
  }

  export type Evaluation_BMinAggregateOutputType = {
    evaluationId: string | null
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    topic10: number | null
    topic11: number | null
    topic12: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    comment: string | null
    fullname_th: string | null
    assessor: string | null
  }

  export type Evaluation_BMaxAggregateOutputType = {
    evaluationId: string | null
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    topic10: number | null
    topic11: number | null
    topic12: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    comment: string | null
    fullname_th: string | null
    assessor: string | null
  }

  export type Evaluation_BCountAggregateOutputType = {
    evaluationId: number
    topic1: number
    topic2: number
    topic3: number
    topic4: number
    topic5: number
    topic6: number
    topic7: number
    topic8: number
    topic9: number
    topic10: number
    topic11: number
    topic12: number
    createdAt: number
    updatedAt: number
    accountId: number
    comment: number
    fullname_th: number
    assessor: number
    _all: number
  }


  export type Evaluation_BAvgAggregateInputType = {
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    topic10?: true
    topic11?: true
    topic12?: true
  }

  export type Evaluation_BSumAggregateInputType = {
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    topic10?: true
    topic11?: true
    topic12?: true
  }

  export type Evaluation_BMinAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    topic10?: true
    topic11?: true
    topic12?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
  }

  export type Evaluation_BMaxAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    topic10?: true
    topic11?: true
    topic12?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
  }

  export type Evaluation_BCountAggregateInputType = {
    evaluationId?: true
    topic1?: true
    topic2?: true
    topic3?: true
    topic4?: true
    topic5?: true
    topic6?: true
    topic7?: true
    topic8?: true
    topic9?: true
    topic10?: true
    topic11?: true
    topic12?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    comment?: true
    fullname_th?: true
    assessor?: true
    _all?: true
  }

  export type Evaluation_BAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation_B to aggregate.
     */
    where?: Evaluation_BWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluation_BS to fetch.
     */
    orderBy?: Evaluation_BOrderByWithRelationInput | Evaluation_BOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Evaluation_BWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluation_BS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluation_BS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluation_BS
    **/
    _count?: true | Evaluation_BCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_BAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_BSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_BMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_BMaxAggregateInputType
  }

  export type GetEvaluation_BAggregateType<T extends Evaluation_BAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_B]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_B[P]>
      : GetScalarType<T[P], AggregateEvaluation_B[P]>
  }




  export type Evaluation_BGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Evaluation_BWhereInput
    orderBy?: Evaluation_BOrderByWithAggregationInput | Evaluation_BOrderByWithAggregationInput[]
    by: Evaluation_BScalarFieldEnum[] | Evaluation_BScalarFieldEnum
    having?: Evaluation_BScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_BCountAggregateInputType | true
    _avg?: Evaluation_BAvgAggregateInputType
    _sum?: Evaluation_BSumAggregateInputType
    _min?: Evaluation_BMinAggregateInputType
    _max?: Evaluation_BMaxAggregateInputType
  }

  export type Evaluation_BGroupByOutputType = {
    evaluationId: string
    topic1: number | null
    topic2: number | null
    topic3: number | null
    topic4: number | null
    topic5: number | null
    topic6: number | null
    topic7: number | null
    topic8: number | null
    topic9: number | null
    topic10: number | null
    topic11: number | null
    topic12: number | null
    createdAt: Date
    updatedAt: Date
    accountId: string
    comment: string | null
    fullname_th: string | null
    assessor: string | null
    _count: Evaluation_BCountAggregateOutputType | null
    _avg: Evaluation_BAvgAggregateOutputType | null
    _sum: Evaluation_BSumAggregateOutputType | null
    _min: Evaluation_BMinAggregateOutputType | null
    _max: Evaluation_BMaxAggregateOutputType | null
  }

  type GetEvaluation_BGroupByPayload<T extends Evaluation_BGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_BGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_BGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_BGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_BGroupByOutputType[P]>
        }
      >
    >


  export type Evaluation_BSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    topic10?: boolean
    topic11?: boolean
    topic12?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_B"]>

  export type Evaluation_BSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    topic10?: boolean
    topic11?: boolean
    topic12?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_B"]>

  export type Evaluation_BSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    topic10?: boolean
    topic11?: boolean
    topic12?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_B"]>

  export type Evaluation_BSelectScalar = {
    evaluationId?: boolean
    topic1?: boolean
    topic2?: boolean
    topic3?: boolean
    topic4?: boolean
    topic5?: boolean
    topic6?: boolean
    topic7?: boolean
    topic8?: boolean
    topic9?: boolean
    topic10?: boolean
    topic11?: boolean
    topic12?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    comment?: boolean
    fullname_th?: boolean
    assessor?: boolean
  }

  export type Evaluation_BOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"evaluationId" | "topic1" | "topic2" | "topic3" | "topic4" | "topic5" | "topic6" | "topic7" | "topic8" | "topic9" | "topic10" | "topic11" | "topic12" | "createdAt" | "updatedAt" | "accountId" | "comment" | "fullname_th" | "assessor", ExtArgs["result"]["evaluation_B"]>
  export type Evaluation_BInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Evaluation_BIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Evaluation_BIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Evaluation_BPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation_B"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      evaluationId: string
      topic1: number | null
      topic2: number | null
      topic3: number | null
      topic4: number | null
      topic5: number | null
      topic6: number | null
      topic7: number | null
      topic8: number | null
      topic9: number | null
      topic10: number | null
      topic11: number | null
      topic12: number | null
      createdAt: Date
      updatedAt: Date
      accountId: string
      comment: string | null
      fullname_th: string | null
      assessor: string | null
    }, ExtArgs["result"]["evaluation_B"]>
    composites: {}
  }

  type Evaluation_BGetPayload<S extends boolean | null | undefined | Evaluation_BDefaultArgs> = $Result.GetResult<Prisma.$Evaluation_BPayload, S>

  type Evaluation_BCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Evaluation_BFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Evaluation_BCountAggregateInputType | true
    }

  export interface Evaluation_BDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation_B'], meta: { name: 'Evaluation_B' } }
    /**
     * Find zero or one Evaluation_B that matches the filter.
     * @param {Evaluation_BFindUniqueArgs} args - Arguments to find a Evaluation_B
     * @example
     * // Get one Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Evaluation_BFindUniqueArgs>(args: SelectSubset<T, Evaluation_BFindUniqueArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation_B that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Evaluation_BFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_B
     * @example
     * // Get one Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Evaluation_BFindUniqueOrThrowArgs>(args: SelectSubset<T, Evaluation_BFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation_B that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BFindFirstArgs} args - Arguments to find a Evaluation_B
     * @example
     * // Get one Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Evaluation_BFindFirstArgs>(args?: SelectSubset<T, Evaluation_BFindFirstArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation_B that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BFindFirstOrThrowArgs} args - Arguments to find a Evaluation_B
     * @example
     * // Get one Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Evaluation_BFindFirstOrThrowArgs>(args?: SelectSubset<T, Evaluation_BFindFirstOrThrowArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluation_BS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_BS
     * const evaluation_BS = await prisma.evaluation_B.findMany()
     * 
     * // Get first 10 Evaluation_BS
     * const evaluation_BS = await prisma.evaluation_B.findMany({ take: 10 })
     * 
     * // Only select the `evaluationId`
     * const evaluation_BWithEvaluationIdOnly = await prisma.evaluation_B.findMany({ select: { evaluationId: true } })
     * 
     */
    findMany<T extends Evaluation_BFindManyArgs>(args?: SelectSubset<T, Evaluation_BFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation_B.
     * @param {Evaluation_BCreateArgs} args - Arguments to create a Evaluation_B.
     * @example
     * // Create one Evaluation_B
     * const Evaluation_B = await prisma.evaluation_B.create({
     *   data: {
     *     // ... data to create a Evaluation_B
     *   }
     * })
     * 
     */
    create<T extends Evaluation_BCreateArgs>(args: SelectSubset<T, Evaluation_BCreateArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluation_BS.
     * @param {Evaluation_BCreateManyArgs} args - Arguments to create many Evaluation_BS.
     * @example
     * // Create many Evaluation_BS
     * const evaluation_B = await prisma.evaluation_B.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Evaluation_BCreateManyArgs>(args?: SelectSubset<T, Evaluation_BCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluation_BS and returns the data saved in the database.
     * @param {Evaluation_BCreateManyAndReturnArgs} args - Arguments to create many Evaluation_BS.
     * @example
     * // Create many Evaluation_BS
     * const evaluation_B = await prisma.evaluation_B.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluation_BS and only return the `evaluationId`
     * const evaluation_BWithEvaluationIdOnly = await prisma.evaluation_B.createManyAndReturn({
     *   select: { evaluationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Evaluation_BCreateManyAndReturnArgs>(args?: SelectSubset<T, Evaluation_BCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation_B.
     * @param {Evaluation_BDeleteArgs} args - Arguments to delete one Evaluation_B.
     * @example
     * // Delete one Evaluation_B
     * const Evaluation_B = await prisma.evaluation_B.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_B
     *   }
     * })
     * 
     */
    delete<T extends Evaluation_BDeleteArgs>(args: SelectSubset<T, Evaluation_BDeleteArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation_B.
     * @param {Evaluation_BUpdateArgs} args - Arguments to update one Evaluation_B.
     * @example
     * // Update one Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Evaluation_BUpdateArgs>(args: SelectSubset<T, Evaluation_BUpdateArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluation_BS.
     * @param {Evaluation_BDeleteManyArgs} args - Arguments to filter Evaluation_BS to delete.
     * @example
     * // Delete a few Evaluation_BS
     * const { count } = await prisma.evaluation_B.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Evaluation_BDeleteManyArgs>(args?: SelectSubset<T, Evaluation_BDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_BS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_BS
     * const evaluation_B = await prisma.evaluation_B.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Evaluation_BUpdateManyArgs>(args: SelectSubset<T, Evaluation_BUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_BS and returns the data updated in the database.
     * @param {Evaluation_BUpdateManyAndReturnArgs} args - Arguments to update many Evaluation_BS.
     * @example
     * // Update many Evaluation_BS
     * const evaluation_B = await prisma.evaluation_B.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluation_BS and only return the `evaluationId`
     * const evaluation_BWithEvaluationIdOnly = await prisma.evaluation_B.updateManyAndReturn({
     *   select: { evaluationId: true },
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
    updateManyAndReturn<T extends Evaluation_BUpdateManyAndReturnArgs>(args: SelectSubset<T, Evaluation_BUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation_B.
     * @param {Evaluation_BUpsertArgs} args - Arguments to update or create a Evaluation_B.
     * @example
     * // Update or create a Evaluation_B
     * const evaluation_B = await prisma.evaluation_B.upsert({
     *   create: {
     *     // ... data to create a Evaluation_B
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_B we want to update
     *   }
     * })
     */
    upsert<T extends Evaluation_BUpsertArgs>(args: SelectSubset<T, Evaluation_BUpsertArgs<ExtArgs>>): Prisma__Evaluation_BClient<$Result.GetResult<Prisma.$Evaluation_BPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluation_BS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BCountArgs} args - Arguments to filter Evaluation_BS to count.
     * @example
     * // Count the number of Evaluation_BS
     * const count = await prisma.evaluation_B.count({
     *   where: {
     *     // ... the filter for the Evaluation_BS we want to count
     *   }
     * })
    **/
    count<T extends Evaluation_BCountArgs>(
      args?: Subset<T, Evaluation_BCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_BCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_B.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_BAggregateArgs>(args: Subset<T, Evaluation_BAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_BAggregateType<T>>

    /**
     * Group by Evaluation_B.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_BGroupByArgs} args - Group by arguments.
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
      T extends Evaluation_BGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Evaluation_BGroupByArgs['orderBy'] }
        : { orderBy?: Evaluation_BGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Evaluation_BGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_BGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation_B model
   */
  readonly fields: Evaluation_BFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation_B.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Evaluation_BClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evaluation_B model
   */
  interface Evaluation_BFieldRefs {
    readonly evaluationId: FieldRef<"Evaluation_B", 'String'>
    readonly topic1: FieldRef<"Evaluation_B", 'Int'>
    readonly topic2: FieldRef<"Evaluation_B", 'Int'>
    readonly topic3: FieldRef<"Evaluation_B", 'Int'>
    readonly topic4: FieldRef<"Evaluation_B", 'Int'>
    readonly topic5: FieldRef<"Evaluation_B", 'Int'>
    readonly topic6: FieldRef<"Evaluation_B", 'Int'>
    readonly topic7: FieldRef<"Evaluation_B", 'Int'>
    readonly topic8: FieldRef<"Evaluation_B", 'Int'>
    readonly topic9: FieldRef<"Evaluation_B", 'Int'>
    readonly topic10: FieldRef<"Evaluation_B", 'Int'>
    readonly topic11: FieldRef<"Evaluation_B", 'Int'>
    readonly topic12: FieldRef<"Evaluation_B", 'Int'>
    readonly createdAt: FieldRef<"Evaluation_B", 'DateTime'>
    readonly updatedAt: FieldRef<"Evaluation_B", 'DateTime'>
    readonly accountId: FieldRef<"Evaluation_B", 'String'>
    readonly comment: FieldRef<"Evaluation_B", 'String'>
    readonly fullname_th: FieldRef<"Evaluation_B", 'String'>
    readonly assessor: FieldRef<"Evaluation_B", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation_B findUnique
   */
  export type Evaluation_BFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation_B to fetch.
     */
    where: Evaluation_BWhereUniqueInput
  }

  /**
   * Evaluation_B findUniqueOrThrow
   */
  export type Evaluation_BFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation_B to fetch.
     */
    where: Evaluation_BWhereUniqueInput
  }

  /**
   * Evaluation_B findFirst
   */
  export type Evaluation_BFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation_B to fetch.
     */
    where?: Evaluation_BWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluation_BS to fetch.
     */
    orderBy?: Evaluation_BOrderByWithRelationInput | Evaluation_BOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluation_BS.
     */
    cursor?: Evaluation_BWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluation_BS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluation_BS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluation_BS.
     */
    distinct?: Evaluation_BScalarFieldEnum | Evaluation_BScalarFieldEnum[]
  }

  /**
   * Evaluation_B findFirstOrThrow
   */
  export type Evaluation_BFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation_B to fetch.
     */
    where?: Evaluation_BWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluation_BS to fetch.
     */
    orderBy?: Evaluation_BOrderByWithRelationInput | Evaluation_BOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluation_BS.
     */
    cursor?: Evaluation_BWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluation_BS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluation_BS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluation_BS.
     */
    distinct?: Evaluation_BScalarFieldEnum | Evaluation_BScalarFieldEnum[]
  }

  /**
   * Evaluation_B findMany
   */
  export type Evaluation_BFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation_BS to fetch.
     */
    where?: Evaluation_BWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluation_BS to fetch.
     */
    orderBy?: Evaluation_BOrderByWithRelationInput | Evaluation_BOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluation_BS.
     */
    cursor?: Evaluation_BWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluation_BS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluation_BS.
     */
    skip?: number
    distinct?: Evaluation_BScalarFieldEnum | Evaluation_BScalarFieldEnum[]
  }

  /**
   * Evaluation_B create
   */
  export type Evaluation_BCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation_B.
     */
    data: XOR<Evaluation_BCreateInput, Evaluation_BUncheckedCreateInput>
  }

  /**
   * Evaluation_B createMany
   */
  export type Evaluation_BCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluation_BS.
     */
    data: Evaluation_BCreateManyInput | Evaluation_BCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation_B createManyAndReturn
   */
  export type Evaluation_BCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluation_BS.
     */
    data: Evaluation_BCreateManyInput | Evaluation_BCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation_B update
   */
  export type Evaluation_BUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation_B.
     */
    data: XOR<Evaluation_BUpdateInput, Evaluation_BUncheckedUpdateInput>
    /**
     * Choose, which Evaluation_B to update.
     */
    where: Evaluation_BWhereUniqueInput
  }

  /**
   * Evaluation_B updateMany
   */
  export type Evaluation_BUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluation_BS.
     */
    data: XOR<Evaluation_BUpdateManyMutationInput, Evaluation_BUncheckedUpdateManyInput>
    /**
     * Filter which Evaluation_BS to update
     */
    where?: Evaluation_BWhereInput
    /**
     * Limit how many Evaluation_BS to update.
     */
    limit?: number
  }

  /**
   * Evaluation_B updateManyAndReturn
   */
  export type Evaluation_BUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * The data used to update Evaluation_BS.
     */
    data: XOR<Evaluation_BUpdateManyMutationInput, Evaluation_BUncheckedUpdateManyInput>
    /**
     * Filter which Evaluation_BS to update
     */
    where?: Evaluation_BWhereInput
    /**
     * Limit how many Evaluation_BS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation_B upsert
   */
  export type Evaluation_BUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation_B to update in case it exists.
     */
    where: Evaluation_BWhereUniqueInput
    /**
     * In case the Evaluation_B found by the `where` argument doesn't exist, create a new Evaluation_B with this data.
     */
    create: XOR<Evaluation_BCreateInput, Evaluation_BUncheckedCreateInput>
    /**
     * In case the Evaluation_B was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Evaluation_BUpdateInput, Evaluation_BUncheckedUpdateInput>
  }

  /**
   * Evaluation_B delete
   */
  export type Evaluation_BDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
    /**
     * Filter which Evaluation_B to delete.
     */
    where: Evaluation_BWhereUniqueInput
  }

  /**
   * Evaluation_B deleteMany
   */
  export type Evaluation_BDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation_BS to delete
     */
    where?: Evaluation_BWhereInput
    /**
     * Limit how many Evaluation_BS to delete.
     */
    limit?: number
  }

  /**
   * Evaluation_B without action
   */
  export type Evaluation_BDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_B
     */
    select?: Evaluation_BSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation_B
     */
    omit?: Evaluation_BOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Evaluation_BInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    accounttype_en: 'accounttype_en',
    accounttype_th: 'accounttype_th',
    cmuaccount: 'cmuaccount',
    fullname_en: 'fullname_en',
    fullname_th: 'fullname_th',
    level1agency_en: 'level1agency_en',
    level1agency_th: 'level1agency_th',
    level2agency_en: 'level2agency_en',
    level2agency_th: 'level2agency_th',
    level3agency_en: 'level3agency_en',
    level3agency_th: 'level3agency_th',
    positiontitle_en: 'positiontitle_en',
    positiontitle_th: 'positiontitle_th',
    ratenumber: 'ratenumber',
    workingstatus: 'workingstatus',
    imageprofile: 'imageprofile',
    nickname: 'nickname'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    evaluationId: 'evaluationId',
    topic1: 'topic1',
    topic2: 'topic2',
    topic3: 'topic3',
    topic4: 'topic4',
    topic5: 'topic5',
    topic6: 'topic6',
    topic7: 'topic7',
    topic8: 'topic8',
    topic9: 'topic9',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    comment: 'comment',
    fullname_th: 'fullname_th',
    assessor: 'assessor'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const Evaluation_BScalarFieldEnum: {
    evaluationId: 'evaluationId',
    topic1: 'topic1',
    topic2: 'topic2',
    topic3: 'topic3',
    topic4: 'topic4',
    topic5: 'topic5',
    topic6: 'topic6',
    topic7: 'topic7',
    topic8: 'topic8',
    topic9: 'topic9',
    topic10: 'topic10',
    topic11: 'topic11',
    topic12: 'topic12',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    comment: 'comment',
    fullname_th: 'fullname_th',
    assessor: 'assessor'
  };

  export type Evaluation_BScalarFieldEnum = (typeof Evaluation_BScalarFieldEnum)[keyof typeof Evaluation_BScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accountId?: UuidFilter<"User"> | string
    accounttype_en?: StringNullableFilter<"User"> | string | null
    accounttype_th?: StringFilter<"User"> | string
    cmuaccount?: StringFilter<"User"> | string
    fullname_en?: StringNullableFilter<"User"> | string | null
    fullname_th?: StringFilter<"User"> | string
    level1agency_en?: StringNullableFilter<"User"> | string | null
    level1agency_th?: StringFilter<"User"> | string
    level2agency_en?: StringNullableFilter<"User"> | string | null
    level2agency_th?: StringFilter<"User"> | string
    level3agency_en?: StringNullableFilter<"User"> | string | null
    level3agency_th?: StringNullableFilter<"User"> | string | null
    positiontitle_en?: StringNullableFilter<"User"> | string | null
    positiontitle_th?: StringFilter<"User"> | string
    ratenumber?: StringNullableFilter<"User"> | string | null
    workingstatus?: BoolFilter<"User"> | boolean
    imageprofile?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    evaluations?: EvaluationListRelationFilter
    evaluation_B?: Evaluation_BListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    accounttype_en?: SortOrderInput | SortOrder
    accounttype_th?: SortOrder
    cmuaccount?: SortOrder
    fullname_en?: SortOrderInput | SortOrder
    fullname_th?: SortOrder
    level1agency_en?: SortOrderInput | SortOrder
    level1agency_th?: SortOrder
    level2agency_en?: SortOrderInput | SortOrder
    level2agency_th?: SortOrder
    level3agency_en?: SortOrderInput | SortOrder
    level3agency_th?: SortOrderInput | SortOrder
    positiontitle_en?: SortOrderInput | SortOrder
    positiontitle_th?: SortOrder
    ratenumber?: SortOrderInput | SortOrder
    workingstatus?: SortOrder
    imageprofile?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    evaluations?: EvaluationOrderByRelationAggregateInput
    evaluation_B?: Evaluation_BOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    accountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounttype_en?: StringNullableFilter<"User"> | string | null
    accounttype_th?: StringFilter<"User"> | string
    cmuaccount?: StringFilter<"User"> | string
    fullname_en?: StringNullableFilter<"User"> | string | null
    fullname_th?: StringFilter<"User"> | string
    level1agency_en?: StringNullableFilter<"User"> | string | null
    level1agency_th?: StringFilter<"User"> | string
    level2agency_en?: StringNullableFilter<"User"> | string | null
    level2agency_th?: StringFilter<"User"> | string
    level3agency_en?: StringNullableFilter<"User"> | string | null
    level3agency_th?: StringNullableFilter<"User"> | string | null
    positiontitle_en?: StringNullableFilter<"User"> | string | null
    positiontitle_th?: StringFilter<"User"> | string
    ratenumber?: StringNullableFilter<"User"> | string | null
    workingstatus?: BoolFilter<"User"> | boolean
    imageprofile?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    evaluations?: EvaluationListRelationFilter
    evaluation_B?: Evaluation_BListRelationFilter
  }, "accountId" | "accountId">

  export type UserOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    accounttype_en?: SortOrderInput | SortOrder
    accounttype_th?: SortOrder
    cmuaccount?: SortOrder
    fullname_en?: SortOrderInput | SortOrder
    fullname_th?: SortOrder
    level1agency_en?: SortOrderInput | SortOrder
    level1agency_th?: SortOrder
    level2agency_en?: SortOrderInput | SortOrder
    level2agency_th?: SortOrder
    level3agency_en?: SortOrderInput | SortOrder
    level3agency_th?: SortOrderInput | SortOrder
    positiontitle_en?: SortOrderInput | SortOrder
    positiontitle_th?: SortOrder
    ratenumber?: SortOrderInput | SortOrder
    workingstatus?: SortOrder
    imageprofile?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    accountId?: UuidWithAggregatesFilter<"User"> | string
    accounttype_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    accounttype_th?: StringWithAggregatesFilter<"User"> | string
    cmuaccount?: StringWithAggregatesFilter<"User"> | string
    fullname_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullname_th?: StringWithAggregatesFilter<"User"> | string
    level1agency_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    level1agency_th?: StringWithAggregatesFilter<"User"> | string
    level2agency_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    level2agency_th?: StringWithAggregatesFilter<"User"> | string
    level3agency_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    level3agency_th?: StringNullableWithAggregatesFilter<"User"> | string | null
    positiontitle_en?: StringNullableWithAggregatesFilter<"User"> | string | null
    positiontitle_th?: StringWithAggregatesFilter<"User"> | string
    ratenumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    workingstatus?: BoolWithAggregatesFilter<"User"> | boolean
    imageprofile?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    evaluationId?: UuidFilter<"Evaluation"> | string
    topic1?: IntNullableFilter<"Evaluation"> | number | null
    topic2?: IntNullableFilter<"Evaluation"> | number | null
    topic3?: IntNullableFilter<"Evaluation"> | number | null
    topic4?: IntNullableFilter<"Evaluation"> | number | null
    topic5?: IntNullableFilter<"Evaluation"> | number | null
    topic6?: IntNullableFilter<"Evaluation"> | number | null
    topic7?: IntNullableFilter<"Evaluation"> | number | null
    topic8?: IntNullableFilter<"Evaluation"> | number | null
    topic9?: IntNullableFilter<"Evaluation"> | number | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    accountId?: UuidFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation"> | string | null
    assessor?: StringNullableFilter<"Evaluation"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    evaluationId?: SortOrder
    topic1?: SortOrderInput | SortOrder
    topic2?: SortOrderInput | SortOrder
    topic3?: SortOrderInput | SortOrder
    topic4?: SortOrderInput | SortOrder
    topic5?: SortOrderInput | SortOrder
    topic6?: SortOrderInput | SortOrder
    topic7?: SortOrderInput | SortOrder
    topic8?: SortOrderInput | SortOrder
    topic9?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrderInput | SortOrder
    fullname_th?: SortOrderInput | SortOrder
    assessor?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    evaluationId?: string
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    topic1?: IntNullableFilter<"Evaluation"> | number | null
    topic2?: IntNullableFilter<"Evaluation"> | number | null
    topic3?: IntNullableFilter<"Evaluation"> | number | null
    topic4?: IntNullableFilter<"Evaluation"> | number | null
    topic5?: IntNullableFilter<"Evaluation"> | number | null
    topic6?: IntNullableFilter<"Evaluation"> | number | null
    topic7?: IntNullableFilter<"Evaluation"> | number | null
    topic8?: IntNullableFilter<"Evaluation"> | number | null
    topic9?: IntNullableFilter<"Evaluation"> | number | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    accountId?: UuidFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation"> | string | null
    assessor?: StringNullableFilter<"Evaluation"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "evaluationId" | "evaluationId">

  export type EvaluationOrderByWithAggregationInput = {
    evaluationId?: SortOrder
    topic1?: SortOrderInput | SortOrder
    topic2?: SortOrderInput | SortOrder
    topic3?: SortOrderInput | SortOrder
    topic4?: SortOrderInput | SortOrder
    topic5?: SortOrderInput | SortOrder
    topic6?: SortOrderInput | SortOrder
    topic7?: SortOrderInput | SortOrder
    topic8?: SortOrderInput | SortOrder
    topic9?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrderInput | SortOrder
    fullname_th?: SortOrderInput | SortOrder
    assessor?: SortOrderInput | SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    evaluationId?: UuidWithAggregatesFilter<"Evaluation"> | string
    topic1?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic2?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic3?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic4?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic5?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic6?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic7?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic8?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    topic9?: IntNullableWithAggregatesFilter<"Evaluation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    accountId?: UuidWithAggregatesFilter<"Evaluation"> | string
    comment?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    fullname_th?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    assessor?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
  }

  export type Evaluation_BWhereInput = {
    AND?: Evaluation_BWhereInput | Evaluation_BWhereInput[]
    OR?: Evaluation_BWhereInput[]
    NOT?: Evaluation_BWhereInput | Evaluation_BWhereInput[]
    evaluationId?: UuidFilter<"Evaluation_B"> | string
    topic1?: IntNullableFilter<"Evaluation_B"> | number | null
    topic2?: IntNullableFilter<"Evaluation_B"> | number | null
    topic3?: IntNullableFilter<"Evaluation_B"> | number | null
    topic4?: IntNullableFilter<"Evaluation_B"> | number | null
    topic5?: IntNullableFilter<"Evaluation_B"> | number | null
    topic6?: IntNullableFilter<"Evaluation_B"> | number | null
    topic7?: IntNullableFilter<"Evaluation_B"> | number | null
    topic8?: IntNullableFilter<"Evaluation_B"> | number | null
    topic9?: IntNullableFilter<"Evaluation_B"> | number | null
    topic10?: IntNullableFilter<"Evaluation_B"> | number | null
    topic11?: IntNullableFilter<"Evaluation_B"> | number | null
    topic12?: IntNullableFilter<"Evaluation_B"> | number | null
    createdAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    accountId?: UuidFilter<"Evaluation_B"> | string
    comment?: StringNullableFilter<"Evaluation_B"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation_B"> | string | null
    assessor?: StringNullableFilter<"Evaluation_B"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Evaluation_BOrderByWithRelationInput = {
    evaluationId?: SortOrder
    topic1?: SortOrderInput | SortOrder
    topic2?: SortOrderInput | SortOrder
    topic3?: SortOrderInput | SortOrder
    topic4?: SortOrderInput | SortOrder
    topic5?: SortOrderInput | SortOrder
    topic6?: SortOrderInput | SortOrder
    topic7?: SortOrderInput | SortOrder
    topic8?: SortOrderInput | SortOrder
    topic9?: SortOrderInput | SortOrder
    topic10?: SortOrderInput | SortOrder
    topic11?: SortOrderInput | SortOrder
    topic12?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrderInput | SortOrder
    fullname_th?: SortOrderInput | SortOrder
    assessor?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Evaluation_BWhereUniqueInput = Prisma.AtLeast<{
    evaluationId?: string
    AND?: Evaluation_BWhereInput | Evaluation_BWhereInput[]
    OR?: Evaluation_BWhereInput[]
    NOT?: Evaluation_BWhereInput | Evaluation_BWhereInput[]
    topic1?: IntNullableFilter<"Evaluation_B"> | number | null
    topic2?: IntNullableFilter<"Evaluation_B"> | number | null
    topic3?: IntNullableFilter<"Evaluation_B"> | number | null
    topic4?: IntNullableFilter<"Evaluation_B"> | number | null
    topic5?: IntNullableFilter<"Evaluation_B"> | number | null
    topic6?: IntNullableFilter<"Evaluation_B"> | number | null
    topic7?: IntNullableFilter<"Evaluation_B"> | number | null
    topic8?: IntNullableFilter<"Evaluation_B"> | number | null
    topic9?: IntNullableFilter<"Evaluation_B"> | number | null
    topic10?: IntNullableFilter<"Evaluation_B"> | number | null
    topic11?: IntNullableFilter<"Evaluation_B"> | number | null
    topic12?: IntNullableFilter<"Evaluation_B"> | number | null
    createdAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    accountId?: UuidFilter<"Evaluation_B"> | string
    comment?: StringNullableFilter<"Evaluation_B"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation_B"> | string | null
    assessor?: StringNullableFilter<"Evaluation_B"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "evaluationId" | "evaluationId">

  export type Evaluation_BOrderByWithAggregationInput = {
    evaluationId?: SortOrder
    topic1?: SortOrderInput | SortOrder
    topic2?: SortOrderInput | SortOrder
    topic3?: SortOrderInput | SortOrder
    topic4?: SortOrderInput | SortOrder
    topic5?: SortOrderInput | SortOrder
    topic6?: SortOrderInput | SortOrder
    topic7?: SortOrderInput | SortOrder
    topic8?: SortOrderInput | SortOrder
    topic9?: SortOrderInput | SortOrder
    topic10?: SortOrderInput | SortOrder
    topic11?: SortOrderInput | SortOrder
    topic12?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrderInput | SortOrder
    fullname_th?: SortOrderInput | SortOrder
    assessor?: SortOrderInput | SortOrder
    _count?: Evaluation_BCountOrderByAggregateInput
    _avg?: Evaluation_BAvgOrderByAggregateInput
    _max?: Evaluation_BMaxOrderByAggregateInput
    _min?: Evaluation_BMinOrderByAggregateInput
    _sum?: Evaluation_BSumOrderByAggregateInput
  }

  export type Evaluation_BScalarWhereWithAggregatesInput = {
    AND?: Evaluation_BScalarWhereWithAggregatesInput | Evaluation_BScalarWhereWithAggregatesInput[]
    OR?: Evaluation_BScalarWhereWithAggregatesInput[]
    NOT?: Evaluation_BScalarWhereWithAggregatesInput | Evaluation_BScalarWhereWithAggregatesInput[]
    evaluationId?: UuidWithAggregatesFilter<"Evaluation_B"> | string
    topic1?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic2?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic3?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic4?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic5?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic6?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic7?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic8?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic9?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic10?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic11?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    topic12?: IntNullableWithAggregatesFilter<"Evaluation_B"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation_B"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evaluation_B"> | Date | string
    accountId?: UuidWithAggregatesFilter<"Evaluation_B"> | string
    comment?: StringNullableWithAggregatesFilter<"Evaluation_B"> | string | null
    fullname_th?: StringNullableWithAggregatesFilter<"Evaluation_B"> | string | null
    assessor?: StringNullableWithAggregatesFilter<"Evaluation_B"> | string | null
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    evaluation_B?: Evaluation_BCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    evaluation_B?: Evaluation_BUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    evaluation_B?: Evaluation_BUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    evaluation_B?: Evaluation_BUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationCreateInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
    user: UserCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type EvaluationUpdateInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationCreateManyInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type EvaluationUpdateManyMutationInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUncheckedUpdateManyInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BCreateInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
    user: UserCreateNestedOneWithoutEvaluation_BInput
  }

  export type Evaluation_BUncheckedCreateInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type Evaluation_BUpdateInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEvaluation_BNestedInput
  }

  export type Evaluation_BUncheckedUpdateInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BCreateManyInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type Evaluation_BUpdateManyMutationInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BUncheckedUpdateManyInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type Evaluation_BListRelationFilter = {
    every?: Evaluation_BWhereInput
    some?: Evaluation_BWhereInput
    none?: Evaluation_BWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Evaluation_BOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    accounttype_en?: SortOrder
    accounttype_th?: SortOrder
    cmuaccount?: SortOrder
    fullname_en?: SortOrder
    fullname_th?: SortOrder
    level1agency_en?: SortOrder
    level1agency_th?: SortOrder
    level2agency_en?: SortOrder
    level2agency_th?: SortOrder
    level3agency_en?: SortOrder
    level3agency_th?: SortOrder
    positiontitle_en?: SortOrder
    positiontitle_th?: SortOrder
    ratenumber?: SortOrder
    workingstatus?: SortOrder
    imageprofile?: SortOrder
    nickname?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    accounttype_en?: SortOrder
    accounttype_th?: SortOrder
    cmuaccount?: SortOrder
    fullname_en?: SortOrder
    fullname_th?: SortOrder
    level1agency_en?: SortOrder
    level1agency_th?: SortOrder
    level2agency_en?: SortOrder
    level2agency_th?: SortOrder
    level3agency_en?: SortOrder
    level3agency_th?: SortOrder
    positiontitle_en?: SortOrder
    positiontitle_th?: SortOrder
    ratenumber?: SortOrder
    workingstatus?: SortOrder
    imageprofile?: SortOrder
    nickname?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    accounttype_en?: SortOrder
    accounttype_th?: SortOrder
    cmuaccount?: SortOrder
    fullname_en?: SortOrder
    fullname_th?: SortOrder
    level1agency_en?: SortOrder
    level1agency_th?: SortOrder
    level2agency_en?: SortOrder
    level2agency_th?: SortOrder
    level3agency_en?: SortOrder
    level3agency_th?: SortOrder
    positiontitle_en?: SortOrder
    positiontitle_th?: SortOrder
    ratenumber?: SortOrder
    workingstatus?: SortOrder
    imageprofile?: SortOrder
    nickname?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EvaluationCountOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Evaluation_BCountOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    topic10?: SortOrder
    topic11?: SortOrder
    topic12?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type Evaluation_BAvgOrderByAggregateInput = {
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    topic10?: SortOrder
    topic11?: SortOrder
    topic12?: SortOrder
  }

  export type Evaluation_BMaxOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    topic10?: SortOrder
    topic11?: SortOrder
    topic12?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type Evaluation_BMinOrderByAggregateInput = {
    evaluationId?: SortOrder
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    topic10?: SortOrder
    topic11?: SortOrder
    topic12?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    comment?: SortOrder
    fullname_th?: SortOrder
    assessor?: SortOrder
  }

  export type Evaluation_BSumOrderByAggregateInput = {
    topic1?: SortOrder
    topic2?: SortOrder
    topic3?: SortOrder
    topic4?: SortOrder
    topic5?: SortOrder
    topic6?: SortOrder
    topic7?: SortOrder
    topic8?: SortOrder
    topic9?: SortOrder
    topic10?: SortOrder
    topic11?: SortOrder
    topic12?: SortOrder
  }

  export type EvaluationCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type Evaluation_BCreateNestedManyWithoutUserInput = {
    create?: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput> | Evaluation_BCreateWithoutUserInput[] | Evaluation_BUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Evaluation_BCreateOrConnectWithoutUserInput | Evaluation_BCreateOrConnectWithoutUserInput[]
    createMany?: Evaluation_BCreateManyUserInputEnvelope
    connect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type Evaluation_BUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput> | Evaluation_BCreateWithoutUserInput[] | Evaluation_BUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Evaluation_BCreateOrConnectWithoutUserInput | Evaluation_BCreateOrConnectWithoutUserInput[]
    createMany?: Evaluation_BCreateManyUserInputEnvelope
    connect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EvaluationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type Evaluation_BUpdateManyWithoutUserNestedInput = {
    create?: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput> | Evaluation_BCreateWithoutUserInput[] | Evaluation_BUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Evaluation_BCreateOrConnectWithoutUserInput | Evaluation_BCreateOrConnectWithoutUserInput[]
    upsert?: Evaluation_BUpsertWithWhereUniqueWithoutUserInput | Evaluation_BUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Evaluation_BCreateManyUserInputEnvelope
    set?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    disconnect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    delete?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    connect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    update?: Evaluation_BUpdateWithWhereUniqueWithoutUserInput | Evaluation_BUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Evaluation_BUpdateManyWithWhereWithoutUserInput | Evaluation_BUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Evaluation_BScalarWhereInput | Evaluation_BScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type Evaluation_BUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput> | Evaluation_BCreateWithoutUserInput[] | Evaluation_BUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Evaluation_BCreateOrConnectWithoutUserInput | Evaluation_BCreateOrConnectWithoutUserInput[]
    upsert?: Evaluation_BUpsertWithWhereUniqueWithoutUserInput | Evaluation_BUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Evaluation_BCreateManyUserInputEnvelope
    set?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    disconnect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    delete?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    connect?: Evaluation_BWhereUniqueInput | Evaluation_BWhereUniqueInput[]
    update?: Evaluation_BUpdateWithWhereUniqueWithoutUserInput | Evaluation_BUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Evaluation_BUpdateManyWithWhereWithoutUserInput | Evaluation_BUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Evaluation_BScalarWhereInput | Evaluation_BScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    upsert?: UserUpsertWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluationsInput, UserUpdateWithoutEvaluationsInput>, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserCreateNestedOneWithoutEvaluation_BInput = {
    create?: XOR<UserCreateWithoutEvaluation_BInput, UserUncheckedCreateWithoutEvaluation_BInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluation_BInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEvaluation_BNestedInput = {
    create?: XOR<UserCreateWithoutEvaluation_BInput, UserUncheckedCreateWithoutEvaluation_BInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluation_BInput
    upsert?: UserUpsertWithoutEvaluation_BInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluation_BInput, UserUpdateWithoutEvaluation_BInput>, UserUncheckedUpdateWithoutEvaluation_BInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EvaluationCreateWithoutUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type EvaluationUncheckedCreateWithoutUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type EvaluationCreateOrConnectWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationCreateManyUserInputEnvelope = {
    data: EvaluationCreateManyUserInput | EvaluationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Evaluation_BCreateWithoutUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type Evaluation_BUncheckedCreateWithoutUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type Evaluation_BCreateOrConnectWithoutUserInput = {
    where: Evaluation_BWhereUniqueInput
    create: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput>
  }

  export type Evaluation_BCreateManyUserInputEnvelope = {
    data: Evaluation_BCreateManyUserInput | Evaluation_BCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationUpsertWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutUserInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutUserInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    evaluationId?: UuidFilter<"Evaluation"> | string
    topic1?: IntNullableFilter<"Evaluation"> | number | null
    topic2?: IntNullableFilter<"Evaluation"> | number | null
    topic3?: IntNullableFilter<"Evaluation"> | number | null
    topic4?: IntNullableFilter<"Evaluation"> | number | null
    topic5?: IntNullableFilter<"Evaluation"> | number | null
    topic6?: IntNullableFilter<"Evaluation"> | number | null
    topic7?: IntNullableFilter<"Evaluation"> | number | null
    topic8?: IntNullableFilter<"Evaluation"> | number | null
    topic9?: IntNullableFilter<"Evaluation"> | number | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    accountId?: UuidFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation"> | string | null
    assessor?: StringNullableFilter<"Evaluation"> | string | null
  }

  export type Evaluation_BUpsertWithWhereUniqueWithoutUserInput = {
    where: Evaluation_BWhereUniqueInput
    update: XOR<Evaluation_BUpdateWithoutUserInput, Evaluation_BUncheckedUpdateWithoutUserInput>
    create: XOR<Evaluation_BCreateWithoutUserInput, Evaluation_BUncheckedCreateWithoutUserInput>
  }

  export type Evaluation_BUpdateWithWhereUniqueWithoutUserInput = {
    where: Evaluation_BWhereUniqueInput
    data: XOR<Evaluation_BUpdateWithoutUserInput, Evaluation_BUncheckedUpdateWithoutUserInput>
  }

  export type Evaluation_BUpdateManyWithWhereWithoutUserInput = {
    where: Evaluation_BScalarWhereInput
    data: XOR<Evaluation_BUpdateManyMutationInput, Evaluation_BUncheckedUpdateManyWithoutUserInput>
  }

  export type Evaluation_BScalarWhereInput = {
    AND?: Evaluation_BScalarWhereInput | Evaluation_BScalarWhereInput[]
    OR?: Evaluation_BScalarWhereInput[]
    NOT?: Evaluation_BScalarWhereInput | Evaluation_BScalarWhereInput[]
    evaluationId?: UuidFilter<"Evaluation_B"> | string
    topic1?: IntNullableFilter<"Evaluation_B"> | number | null
    topic2?: IntNullableFilter<"Evaluation_B"> | number | null
    topic3?: IntNullableFilter<"Evaluation_B"> | number | null
    topic4?: IntNullableFilter<"Evaluation_B"> | number | null
    topic5?: IntNullableFilter<"Evaluation_B"> | number | null
    topic6?: IntNullableFilter<"Evaluation_B"> | number | null
    topic7?: IntNullableFilter<"Evaluation_B"> | number | null
    topic8?: IntNullableFilter<"Evaluation_B"> | number | null
    topic9?: IntNullableFilter<"Evaluation_B"> | number | null
    topic10?: IntNullableFilter<"Evaluation_B"> | number | null
    topic11?: IntNullableFilter<"Evaluation_B"> | number | null
    topic12?: IntNullableFilter<"Evaluation_B"> | number | null
    createdAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation_B"> | Date | string
    accountId?: UuidFilter<"Evaluation_B"> | string
    comment?: StringNullableFilter<"Evaluation_B"> | string | null
    fullname_th?: StringNullableFilter<"Evaluation_B"> | string | null
    assessor?: StringNullableFilter<"Evaluation_B"> | string | null
  }

  export type UserCreateWithoutEvaluationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluation_B?: Evaluation_BCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluation_B?: Evaluation_BUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
  }

  export type UserUpsertWithoutEvaluationsInput = {
    update: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateWithoutEvaluationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_B?: Evaluation_BUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_B?: Evaluation_BUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEvaluation_BInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluation_BInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    accounttype_en?: string | null
    accounttype_th: string
    cmuaccount: string
    fullname_en?: string | null
    fullname_th: string
    level1agency_en?: string | null
    level1agency_th: string
    level2agency_en?: string | null
    level2agency_th: string
    level3agency_en?: string | null
    level3agency_th?: string | null
    positiontitle_en?: string | null
    positiontitle_th: string
    ratenumber?: string | null
    workingstatus?: boolean
    imageprofile?: string | null
    nickname?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluation_BInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluation_BInput, UserUncheckedCreateWithoutEvaluation_BInput>
  }

  export type UserUpsertWithoutEvaluation_BInput = {
    update: XOR<UserUpdateWithoutEvaluation_BInput, UserUncheckedUpdateWithoutEvaluation_BInput>
    create: XOR<UserCreateWithoutEvaluation_BInput, UserUncheckedCreateWithoutEvaluation_BInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluation_BInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluation_BInput, UserUncheckedUpdateWithoutEvaluation_BInput>
  }

  export type UserUpdateWithoutEvaluation_BInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluation_BInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    accounttype_en?: NullableStringFieldUpdateOperationsInput | string | null
    accounttype_th?: StringFieldUpdateOperationsInput | string
    cmuaccount?: StringFieldUpdateOperationsInput | string
    fullname_en?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: StringFieldUpdateOperationsInput | string
    level1agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level1agency_th?: StringFieldUpdateOperationsInput | string
    level2agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level2agency_th?: StringFieldUpdateOperationsInput | string
    level3agency_en?: NullableStringFieldUpdateOperationsInput | string | null
    level3agency_th?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_en?: NullableStringFieldUpdateOperationsInput | string | null
    positiontitle_th?: StringFieldUpdateOperationsInput | string
    ratenumber?: NullableStringFieldUpdateOperationsInput | string | null
    workingstatus?: BoolFieldUpdateOperationsInput | boolean
    imageprofile?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EvaluationCreateManyUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type Evaluation_BCreateManyUserInput = {
    evaluationId?: string
    topic1?: number | null
    topic2?: number | null
    topic3?: number | null
    topic4?: number | null
    topic5?: number | null
    topic6?: number | null
    topic7?: number | null
    topic8?: number | null
    topic9?: number | null
    topic10?: number | null
    topic11?: number | null
    topic12?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: string | null
    fullname_th?: string | null
    assessor?: string | null
  }

  export type EvaluationUpdateWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUncheckedUpdateWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUncheckedUpdateManyWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BUpdateWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BUncheckedUpdateWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Evaluation_BUncheckedUpdateManyWithoutUserInput = {
    evaluationId?: StringFieldUpdateOperationsInput | string
    topic1?: NullableIntFieldUpdateOperationsInput | number | null
    topic2?: NullableIntFieldUpdateOperationsInput | number | null
    topic3?: NullableIntFieldUpdateOperationsInput | number | null
    topic4?: NullableIntFieldUpdateOperationsInput | number | null
    topic5?: NullableIntFieldUpdateOperationsInput | number | null
    topic6?: NullableIntFieldUpdateOperationsInput | number | null
    topic7?: NullableIntFieldUpdateOperationsInput | number | null
    topic8?: NullableIntFieldUpdateOperationsInput | number | null
    topic9?: NullableIntFieldUpdateOperationsInput | number | null
    topic10?: NullableIntFieldUpdateOperationsInput | number | null
    topic11?: NullableIntFieldUpdateOperationsInput | number | null
    topic12?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fullname_th?: NullableStringFieldUpdateOperationsInput | string | null
    assessor?: NullableStringFieldUpdateOperationsInput | string | null
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