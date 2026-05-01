
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
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model Size_shirt
 * 
 */
export type Size_shirt = $Result.DefaultSelection<Prisma.$Size_shirtPayload>
/**
 * Model bib_sequence
 * 
 */
export type bib_sequence = $Result.DefaultSelection<Prisma.$bib_sequencePayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Sponsor
 * 
 */
export type Sponsor = $Result.DefaultSelection<Prisma.$SponsorPayload>
/**
 * Model Items_vip
 * 
 */
export type Items_vip = $Result.DefaultSelection<Prisma.$Items_vipPayload>
/**
 * Model ShirtModel
 * 
 */
export type ShirtModel = $Result.DefaultSelection<Prisma.$ShirtModelPayload>
/**
 * Model UserSaleShirt
 * 
 */
export type UserSaleShirt = $Result.DefaultSelection<Prisma.$UserSaleShirtPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model CheckPoint
 * 
 */
export type CheckPoint = $Result.DefaultSelection<Prisma.$CheckPointPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Types: {
  Diamond: 'Diamond',
  Platinum: 'Platinum',
  Titanium: 'Titanium',
  Gold: 'Gold',
  Silver: 'Silver',
  Bronze: 'Bronze'
};

export type Types = (typeof Types)[keyof typeof Types]

}

export type Types = $Enums.Types

export const Types: typeof $Enums.Types

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Options
 * const options = await prisma.option.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Options
   * const options = await prisma.option.findMany()
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
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.size_shirt`: Exposes CRUD operations for the **Size_shirt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Size_shirts
    * const size_shirts = await prisma.size_shirt.findMany()
    * ```
    */
  get size_shirt(): Prisma.Size_shirtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bib_sequence`: Exposes CRUD operations for the **bib_sequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bib_sequences
    * const bib_sequences = await prisma.bib_sequence.findMany()
    * ```
    */
  get bib_sequence(): Prisma.bib_sequenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsor`: Exposes CRUD operations for the **Sponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsors
    * const sponsors = await prisma.sponsor.findMany()
    * ```
    */
  get sponsor(): Prisma.SponsorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items_vip`: Exposes CRUD operations for the **Items_vip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items_vips
    * const items_vips = await prisma.items_vip.findMany()
    * ```
    */
  get items_vip(): Prisma.Items_vipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shirtModel`: Exposes CRUD operations for the **ShirtModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShirtModels
    * const shirtModels = await prisma.shirtModel.findMany()
    * ```
    */
  get shirtModel(): Prisma.ShirtModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSaleShirt`: Exposes CRUD operations for the **UserSaleShirt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSaleShirts
    * const userSaleShirts = await prisma.userSaleShirt.findMany()
    * ```
    */
  get userSaleShirt(): Prisma.UserSaleShirtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkPoint`: Exposes CRUD operations for the **CheckPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckPoints
    * const checkPoints = await prisma.checkPoint.findMany()
    * ```
    */
  get checkPoint(): Prisma.CheckPointDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Option: 'Option',
    Size_shirt: 'Size_shirt',
    bib_sequence: 'bib_sequence',
    Participant: 'Participant',
    Animal: 'Animal',
    Sponsor: 'Sponsor',
    Items_vip: 'Items_vip',
    ShirtModel: 'ShirtModel',
    UserSaleShirt: 'UserSaleShirt',
    OrderItem: 'OrderItem',
    CheckPoint: 'CheckPoint'
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
      modelProps: "option" | "size_shirt" | "bib_sequence" | "participant" | "animal" | "sponsor" | "items_vip" | "shirtModel" | "userSaleShirt" | "orderItem" | "checkPoint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      Size_shirt: {
        payload: Prisma.$Size_shirtPayload<ExtArgs>
        fields: Prisma.Size_shirtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Size_shirtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Size_shirtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          findFirst: {
            args: Prisma.Size_shirtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Size_shirtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          findMany: {
            args: Prisma.Size_shirtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>[]
          }
          create: {
            args: Prisma.Size_shirtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          createMany: {
            args: Prisma.Size_shirtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Size_shirtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>[]
          }
          delete: {
            args: Prisma.Size_shirtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          update: {
            args: Prisma.Size_shirtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          deleteMany: {
            args: Prisma.Size_shirtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Size_shirtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Size_shirtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>[]
          }
          upsert: {
            args: Prisma.Size_shirtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Size_shirtPayload>
          }
          aggregate: {
            args: Prisma.Size_shirtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSize_shirt>
          }
          groupBy: {
            args: Prisma.Size_shirtGroupByArgs<ExtArgs>
            result: $Utils.Optional<Size_shirtGroupByOutputType>[]
          }
          count: {
            args: Prisma.Size_shirtCountArgs<ExtArgs>
            result: $Utils.Optional<Size_shirtCountAggregateOutputType> | number
          }
        }
      }
      bib_sequence: {
        payload: Prisma.$bib_sequencePayload<ExtArgs>
        fields: Prisma.bib_sequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bib_sequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bib_sequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          findFirst: {
            args: Prisma.bib_sequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bib_sequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          findMany: {
            args: Prisma.bib_sequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>[]
          }
          create: {
            args: Prisma.bib_sequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          createMany: {
            args: Prisma.bib_sequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bib_sequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>[]
          }
          delete: {
            args: Prisma.bib_sequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          update: {
            args: Prisma.bib_sequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          deleteMany: {
            args: Prisma.bib_sequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bib_sequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bib_sequenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>[]
          }
          upsert: {
            args: Prisma.bib_sequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bib_sequencePayload>
          }
          aggregate: {
            args: Prisma.Bib_sequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBib_sequence>
          }
          groupBy: {
            args: Prisma.bib_sequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bib_sequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.bib_sequenceCountArgs<ExtArgs>
            result: $Utils.Optional<Bib_sequenceCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Sponsor: {
        payload: Prisma.$SponsorPayload<ExtArgs>
        fields: Prisma.SponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findFirst: {
            args: Prisma.SponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findMany: {
            args: Prisma.SponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          create: {
            args: Prisma.SponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          createMany: {
            args: Prisma.SponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SponsorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          delete: {
            args: Prisma.SponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          update: {
            args: Prisma.SponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          deleteMany: {
            args: Prisma.SponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SponsorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          upsert: {
            args: Prisma.SponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          aggregate: {
            args: Prisma.SponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsor>
          }
          groupBy: {
            args: Prisma.SponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorCountAggregateOutputType> | number
          }
        }
      }
      Items_vip: {
        payload: Prisma.$Items_vipPayload<ExtArgs>
        fields: Prisma.Items_vipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Items_vipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Items_vipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          findFirst: {
            args: Prisma.Items_vipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Items_vipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          findMany: {
            args: Prisma.Items_vipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>[]
          }
          create: {
            args: Prisma.Items_vipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          createMany: {
            args: Prisma.Items_vipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Items_vipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>[]
          }
          delete: {
            args: Prisma.Items_vipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          update: {
            args: Prisma.Items_vipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          deleteMany: {
            args: Prisma.Items_vipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Items_vipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Items_vipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>[]
          }
          upsert: {
            args: Prisma.Items_vipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Items_vipPayload>
          }
          aggregate: {
            args: Prisma.Items_vipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems_vip>
          }
          groupBy: {
            args: Prisma.Items_vipGroupByArgs<ExtArgs>
            result: $Utils.Optional<Items_vipGroupByOutputType>[]
          }
          count: {
            args: Prisma.Items_vipCountArgs<ExtArgs>
            result: $Utils.Optional<Items_vipCountAggregateOutputType> | number
          }
        }
      }
      ShirtModel: {
        payload: Prisma.$ShirtModelPayload<ExtArgs>
        fields: Prisma.ShirtModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShirtModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShirtModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          findFirst: {
            args: Prisma.ShirtModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShirtModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          findMany: {
            args: Prisma.ShirtModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>[]
          }
          create: {
            args: Prisma.ShirtModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          createMany: {
            args: Prisma.ShirtModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShirtModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>[]
          }
          delete: {
            args: Prisma.ShirtModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          update: {
            args: Prisma.ShirtModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          deleteMany: {
            args: Prisma.ShirtModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShirtModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShirtModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>[]
          }
          upsert: {
            args: Prisma.ShirtModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShirtModelPayload>
          }
          aggregate: {
            args: Prisma.ShirtModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShirtModel>
          }
          groupBy: {
            args: Prisma.ShirtModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShirtModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShirtModelCountArgs<ExtArgs>
            result: $Utils.Optional<ShirtModelCountAggregateOutputType> | number
          }
        }
      }
      UserSaleShirt: {
        payload: Prisma.$UserSaleShirtPayload<ExtArgs>
        fields: Prisma.UserSaleShirtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSaleShirtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSaleShirtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          findFirst: {
            args: Prisma.UserSaleShirtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSaleShirtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          findMany: {
            args: Prisma.UserSaleShirtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>[]
          }
          create: {
            args: Prisma.UserSaleShirtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          createMany: {
            args: Prisma.UserSaleShirtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSaleShirtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>[]
          }
          delete: {
            args: Prisma.UserSaleShirtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          update: {
            args: Prisma.UserSaleShirtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          deleteMany: {
            args: Prisma.UserSaleShirtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSaleShirtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSaleShirtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>[]
          }
          upsert: {
            args: Prisma.UserSaleShirtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSaleShirtPayload>
          }
          aggregate: {
            args: Prisma.UserSaleShirtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSaleShirt>
          }
          groupBy: {
            args: Prisma.UserSaleShirtGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSaleShirtGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSaleShirtCountArgs<ExtArgs>
            result: $Utils.Optional<UserSaleShirtCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      CheckPoint: {
        payload: Prisma.$CheckPointPayload<ExtArgs>
        fields: Prisma.CheckPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          findFirst: {
            args: Prisma.CheckPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          findMany: {
            args: Prisma.CheckPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>[]
          }
          create: {
            args: Prisma.CheckPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          createMany: {
            args: Prisma.CheckPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>[]
          }
          delete: {
            args: Prisma.CheckPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          update: {
            args: Prisma.CheckPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          deleteMany: {
            args: Prisma.CheckPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>[]
          }
          upsert: {
            args: Prisma.CheckPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPointPayload>
          }
          aggregate: {
            args: Prisma.CheckPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckPoint>
          }
          groupBy: {
            args: Prisma.CheckPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckPointCountArgs<ExtArgs>
            result: $Utils.Optional<CheckPointCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    option?: OptionOmit
    size_shirt?: Size_shirtOmit
    bib_sequence?: bib_sequenceOmit
    participant?: ParticipantOmit
    animal?: AnimalOmit
    sponsor?: SponsorOmit
    items_vip?: Items_vipOmit
    shirtModel?: ShirtModelOmit
    userSaleShirt?: UserSaleShirtOmit
    orderItem?: OrderItemOmit
    checkPoint?: CheckPointOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Size_shirtCountOutputType
   */

  export type Size_shirtCountOutputType = {
    participant: number
    Items_vip: number
    OrderItem: number
  }

  export type Size_shirtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | Size_shirtCountOutputTypeCountParticipantArgs
    Items_vip?: boolean | Size_shirtCountOutputTypeCountItems_vipArgs
    OrderItem?: boolean | Size_shirtCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * Size_shirtCountOutputType without action
   */
  export type Size_shirtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirtCountOutputType
     */
    select?: Size_shirtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Size_shirtCountOutputType without action
   */
  export type Size_shirtCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * Size_shirtCountOutputType without action
   */
  export type Size_shirtCountOutputTypeCountItems_vipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Items_vipWhereInput
  }

  /**
   * Size_shirtCountOutputType without action
   */
  export type Size_shirtCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    Animal: number
    Items_vip: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Animal?: boolean | ParticipantCountOutputTypeCountAnimalArgs
    Items_vip?: boolean | ParticipantCountOutputTypeCountItems_vipArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountItems_vipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Items_vipWhereInput
  }


  /**
   * Count Type ShirtModelCountOutputType
   */

  export type ShirtModelCountOutputType = {
    OrderItem: number
  }

  export type ShirtModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | ShirtModelCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * ShirtModelCountOutputType without action
   */
  export type ShirtModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModelCountOutputType
     */
    select?: ShirtModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShirtModelCountOutputType without action
   */
  export type ShirtModelCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type UserSaleShirtCountOutputType
   */

  export type UserSaleShirtCountOutputType = {
    OrderItem: number
  }

  export type UserSaleShirtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | UserSaleShirtCountOutputTypeCountOrderItemArgs
  }

  // Custom InputTypes
  /**
   * UserSaleShirtCountOutputType without action
   */
  export type UserSaleShirtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirtCountOutputType
     */
    select?: UserSaleShirtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSaleShirtCountOutputType without action
   */
  export type UserSaleShirtCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    limit: number | null
  }

  export type OptionSumAggregateOutputType = {
    limit: number | null
  }

  export type OptionMinAggregateOutputType = {
    optionId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    limit: number | null
  }

  export type OptionMaxAggregateOutputType = {
    optionId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    limit: number | null
  }

  export type OptionCountAggregateOutputType = {
    optionId: number
    name: number
    createdAt: number
    updatedAt: number
    limit: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    limit?: true
  }

  export type OptionSumAggregateInputType = {
    limit?: true
  }

  export type OptionMinAggregateInputType = {
    optionId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    limit?: true
  }

  export type OptionMaxAggregateInputType = {
    optionId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    limit?: true
  }

  export type OptionCountAggregateInputType = {
    optionId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    limit?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    optionId: string
    name: string
    createdAt: Date
    updatedAt: Date | null
    limit: number
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    limit?: boolean
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    limit?: boolean
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    limit?: boolean
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    optionId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    limit?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"optionId" | "name" | "createdAt" | "updatedAt" | "limit", ExtArgs["result"]["option"]>

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      optionId: string
      name: string
      createdAt: Date
      updatedAt: Date | null
      limit: number
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `optionId`
     * const optionWithOptionIdOnly = await prisma.option.findMany({ select: { optionId: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `optionId`
     * const optionWithOptionIdOnly = await prisma.option.createManyAndReturn({
     *   select: { optionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `optionId`
     * const optionWithOptionIdOnly = await prisma.option.updateManyAndReturn({
     *   select: { optionId: true },
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
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly optionId: FieldRef<"Option", 'String'>
    readonly name: FieldRef<"Option", 'String'>
    readonly createdAt: FieldRef<"Option", 'DateTime'>
    readonly updatedAt: FieldRef<"Option", 'DateTime'>
    readonly limit: FieldRef<"Option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
  }


  /**
   * Model Size_shirt
   */

  export type AggregateSize_shirt = {
    _count: Size_shirtCountAggregateOutputType | null
    _avg: Size_shirtAvgAggregateOutputType | null
    _sum: Size_shirtSumAggregateOutputType | null
    _min: Size_shirtMinAggregateOutputType | null
    _max: Size_shirtMaxAggregateOutputType | null
  }

  export type Size_shirtAvgAggregateOutputType = {
    s_width: number | null
    s_high: number | null
    point: number | null
  }

  export type Size_shirtSumAggregateOutputType = {
    s_width: number | null
    s_high: number | null
    point: number | null
  }

  export type Size_shirtMinAggregateOutputType = {
    shirtId: string | null
    size: string | null
    s_width: number | null
    s_high: number | null
    createdAt: Date | null
    point: number | null
    updatedAt: Date | null
  }

  export type Size_shirtMaxAggregateOutputType = {
    shirtId: string | null
    size: string | null
    s_width: number | null
    s_high: number | null
    createdAt: Date | null
    point: number | null
    updatedAt: Date | null
  }

  export type Size_shirtCountAggregateOutputType = {
    shirtId: number
    size: number
    s_width: number
    s_high: number
    createdAt: number
    point: number
    updatedAt: number
    _all: number
  }


  export type Size_shirtAvgAggregateInputType = {
    s_width?: true
    s_high?: true
    point?: true
  }

  export type Size_shirtSumAggregateInputType = {
    s_width?: true
    s_high?: true
    point?: true
  }

  export type Size_shirtMinAggregateInputType = {
    shirtId?: true
    size?: true
    s_width?: true
    s_high?: true
    createdAt?: true
    point?: true
    updatedAt?: true
  }

  export type Size_shirtMaxAggregateInputType = {
    shirtId?: true
    size?: true
    s_width?: true
    s_high?: true
    createdAt?: true
    point?: true
    updatedAt?: true
  }

  export type Size_shirtCountAggregateInputType = {
    shirtId?: true
    size?: true
    s_width?: true
    s_high?: true
    createdAt?: true
    point?: true
    updatedAt?: true
    _all?: true
  }

  export type Size_shirtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size_shirt to aggregate.
     */
    where?: Size_shirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Size_shirts to fetch.
     */
    orderBy?: Size_shirtOrderByWithRelationInput | Size_shirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Size_shirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Size_shirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Size_shirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Size_shirts
    **/
    _count?: true | Size_shirtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Size_shirtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Size_shirtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Size_shirtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Size_shirtMaxAggregateInputType
  }

  export type GetSize_shirtAggregateType<T extends Size_shirtAggregateArgs> = {
        [P in keyof T & keyof AggregateSize_shirt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize_shirt[P]>
      : GetScalarType<T[P], AggregateSize_shirt[P]>
  }




  export type Size_shirtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Size_shirtWhereInput
    orderBy?: Size_shirtOrderByWithAggregationInput | Size_shirtOrderByWithAggregationInput[]
    by: Size_shirtScalarFieldEnum[] | Size_shirtScalarFieldEnum
    having?: Size_shirtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Size_shirtCountAggregateInputType | true
    _avg?: Size_shirtAvgAggregateInputType
    _sum?: Size_shirtSumAggregateInputType
    _min?: Size_shirtMinAggregateInputType
    _max?: Size_shirtMaxAggregateInputType
  }

  export type Size_shirtGroupByOutputType = {
    shirtId: string
    size: string
    s_width: number
    s_high: number
    createdAt: Date
    point: number | null
    updatedAt: Date | null
    _count: Size_shirtCountAggregateOutputType | null
    _avg: Size_shirtAvgAggregateOutputType | null
    _sum: Size_shirtSumAggregateOutputType | null
    _min: Size_shirtMinAggregateOutputType | null
    _max: Size_shirtMaxAggregateOutputType | null
  }

  type GetSize_shirtGroupByPayload<T extends Size_shirtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Size_shirtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Size_shirtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Size_shirtGroupByOutputType[P]>
            : GetScalarType<T[P], Size_shirtGroupByOutputType[P]>
        }
      >
    >


  export type Size_shirtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtId?: boolean
    size?: boolean
    s_width?: boolean
    s_high?: boolean
    createdAt?: boolean
    point?: boolean
    updatedAt?: boolean
    participant?: boolean | Size_shirt$participantArgs<ExtArgs>
    Items_vip?: boolean | Size_shirt$Items_vipArgs<ExtArgs>
    OrderItem?: boolean | Size_shirt$OrderItemArgs<ExtArgs>
    _count?: boolean | Size_shirtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size_shirt"]>

  export type Size_shirtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtId?: boolean
    size?: boolean
    s_width?: boolean
    s_high?: boolean
    createdAt?: boolean
    point?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["size_shirt"]>

  export type Size_shirtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtId?: boolean
    size?: boolean
    s_width?: boolean
    s_high?: boolean
    createdAt?: boolean
    point?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["size_shirt"]>

  export type Size_shirtSelectScalar = {
    shirtId?: boolean
    size?: boolean
    s_width?: boolean
    s_high?: boolean
    createdAt?: boolean
    point?: boolean
    updatedAt?: boolean
  }

  export type Size_shirtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shirtId" | "size" | "s_width" | "s_high" | "createdAt" | "point" | "updatedAt", ExtArgs["result"]["size_shirt"]>
  export type Size_shirtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | Size_shirt$participantArgs<ExtArgs>
    Items_vip?: boolean | Size_shirt$Items_vipArgs<ExtArgs>
    OrderItem?: boolean | Size_shirt$OrderItemArgs<ExtArgs>
    _count?: boolean | Size_shirtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Size_shirtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Size_shirtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Size_shirtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size_shirt"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>[]
      Items_vip: Prisma.$Items_vipPayload<ExtArgs>[]
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      shirtId: string
      size: string
      s_width: number
      s_high: number
      createdAt: Date
      point: number | null
      updatedAt: Date | null
    }, ExtArgs["result"]["size_shirt"]>
    composites: {}
  }

  type Size_shirtGetPayload<S extends boolean | null | undefined | Size_shirtDefaultArgs> = $Result.GetResult<Prisma.$Size_shirtPayload, S>

  type Size_shirtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Size_shirtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Size_shirtCountAggregateInputType | true
    }

  export interface Size_shirtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size_shirt'], meta: { name: 'Size_shirt' } }
    /**
     * Find zero or one Size_shirt that matches the filter.
     * @param {Size_shirtFindUniqueArgs} args - Arguments to find a Size_shirt
     * @example
     * // Get one Size_shirt
     * const size_shirt = await prisma.size_shirt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Size_shirtFindUniqueArgs>(args: SelectSubset<T, Size_shirtFindUniqueArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Size_shirt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Size_shirtFindUniqueOrThrowArgs} args - Arguments to find a Size_shirt
     * @example
     * // Get one Size_shirt
     * const size_shirt = await prisma.size_shirt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Size_shirtFindUniqueOrThrowArgs>(args: SelectSubset<T, Size_shirtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size_shirt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtFindFirstArgs} args - Arguments to find a Size_shirt
     * @example
     * // Get one Size_shirt
     * const size_shirt = await prisma.size_shirt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Size_shirtFindFirstArgs>(args?: SelectSubset<T, Size_shirtFindFirstArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size_shirt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtFindFirstOrThrowArgs} args - Arguments to find a Size_shirt
     * @example
     * // Get one Size_shirt
     * const size_shirt = await prisma.size_shirt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Size_shirtFindFirstOrThrowArgs>(args?: SelectSubset<T, Size_shirtFindFirstOrThrowArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Size_shirts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Size_shirts
     * const size_shirts = await prisma.size_shirt.findMany()
     * 
     * // Get first 10 Size_shirts
     * const size_shirts = await prisma.size_shirt.findMany({ take: 10 })
     * 
     * // Only select the `shirtId`
     * const size_shirtWithShirtIdOnly = await prisma.size_shirt.findMany({ select: { shirtId: true } })
     * 
     */
    findMany<T extends Size_shirtFindManyArgs>(args?: SelectSubset<T, Size_shirtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Size_shirt.
     * @param {Size_shirtCreateArgs} args - Arguments to create a Size_shirt.
     * @example
     * // Create one Size_shirt
     * const Size_shirt = await prisma.size_shirt.create({
     *   data: {
     *     // ... data to create a Size_shirt
     *   }
     * })
     * 
     */
    create<T extends Size_shirtCreateArgs>(args: SelectSubset<T, Size_shirtCreateArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Size_shirts.
     * @param {Size_shirtCreateManyArgs} args - Arguments to create many Size_shirts.
     * @example
     * // Create many Size_shirts
     * const size_shirt = await prisma.size_shirt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Size_shirtCreateManyArgs>(args?: SelectSubset<T, Size_shirtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Size_shirts and returns the data saved in the database.
     * @param {Size_shirtCreateManyAndReturnArgs} args - Arguments to create many Size_shirts.
     * @example
     * // Create many Size_shirts
     * const size_shirt = await prisma.size_shirt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Size_shirts and only return the `shirtId`
     * const size_shirtWithShirtIdOnly = await prisma.size_shirt.createManyAndReturn({
     *   select: { shirtId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Size_shirtCreateManyAndReturnArgs>(args?: SelectSubset<T, Size_shirtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Size_shirt.
     * @param {Size_shirtDeleteArgs} args - Arguments to delete one Size_shirt.
     * @example
     * // Delete one Size_shirt
     * const Size_shirt = await prisma.size_shirt.delete({
     *   where: {
     *     // ... filter to delete one Size_shirt
     *   }
     * })
     * 
     */
    delete<T extends Size_shirtDeleteArgs>(args: SelectSubset<T, Size_shirtDeleteArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Size_shirt.
     * @param {Size_shirtUpdateArgs} args - Arguments to update one Size_shirt.
     * @example
     * // Update one Size_shirt
     * const size_shirt = await prisma.size_shirt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Size_shirtUpdateArgs>(args: SelectSubset<T, Size_shirtUpdateArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Size_shirts.
     * @param {Size_shirtDeleteManyArgs} args - Arguments to filter Size_shirts to delete.
     * @example
     * // Delete a few Size_shirts
     * const { count } = await prisma.size_shirt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Size_shirtDeleteManyArgs>(args?: SelectSubset<T, Size_shirtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Size_shirts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Size_shirts
     * const size_shirt = await prisma.size_shirt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Size_shirtUpdateManyArgs>(args: SelectSubset<T, Size_shirtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Size_shirts and returns the data updated in the database.
     * @param {Size_shirtUpdateManyAndReturnArgs} args - Arguments to update many Size_shirts.
     * @example
     * // Update many Size_shirts
     * const size_shirt = await prisma.size_shirt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Size_shirts and only return the `shirtId`
     * const size_shirtWithShirtIdOnly = await prisma.size_shirt.updateManyAndReturn({
     *   select: { shirtId: true },
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
    updateManyAndReturn<T extends Size_shirtUpdateManyAndReturnArgs>(args: SelectSubset<T, Size_shirtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Size_shirt.
     * @param {Size_shirtUpsertArgs} args - Arguments to update or create a Size_shirt.
     * @example
     * // Update or create a Size_shirt
     * const size_shirt = await prisma.size_shirt.upsert({
     *   create: {
     *     // ... data to create a Size_shirt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size_shirt we want to update
     *   }
     * })
     */
    upsert<T extends Size_shirtUpsertArgs>(args: SelectSubset<T, Size_shirtUpsertArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Size_shirts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtCountArgs} args - Arguments to filter Size_shirts to count.
     * @example
     * // Count the number of Size_shirts
     * const count = await prisma.size_shirt.count({
     *   where: {
     *     // ... the filter for the Size_shirts we want to count
     *   }
     * })
    **/
    count<T extends Size_shirtCountArgs>(
      args?: Subset<T, Size_shirtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Size_shirtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size_shirt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Size_shirtAggregateArgs>(args: Subset<T, Size_shirtAggregateArgs>): Prisma.PrismaPromise<GetSize_shirtAggregateType<T>>

    /**
     * Group by Size_shirt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Size_shirtGroupByArgs} args - Group by arguments.
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
      T extends Size_shirtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Size_shirtGroupByArgs['orderBy'] }
        : { orderBy?: Size_shirtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Size_shirtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSize_shirtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size_shirt model
   */
  readonly fields: Size_shirtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size_shirt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Size_shirtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends Size_shirt$participantArgs<ExtArgs> = {}>(args?: Subset<T, Size_shirt$participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Items_vip<T extends Size_shirt$Items_vipArgs<ExtArgs> = {}>(args?: Subset<T, Size_shirt$Items_vipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderItem<T extends Size_shirt$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, Size_shirt$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Size_shirt model
   */
  interface Size_shirtFieldRefs {
    readonly shirtId: FieldRef<"Size_shirt", 'String'>
    readonly size: FieldRef<"Size_shirt", 'String'>
    readonly s_width: FieldRef<"Size_shirt", 'Int'>
    readonly s_high: FieldRef<"Size_shirt", 'Int'>
    readonly createdAt: FieldRef<"Size_shirt", 'DateTime'>
    readonly point: FieldRef<"Size_shirt", 'Int'>
    readonly updatedAt: FieldRef<"Size_shirt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Size_shirt findUnique
   */
  export type Size_shirtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter, which Size_shirt to fetch.
     */
    where: Size_shirtWhereUniqueInput
  }

  /**
   * Size_shirt findUniqueOrThrow
   */
  export type Size_shirtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter, which Size_shirt to fetch.
     */
    where: Size_shirtWhereUniqueInput
  }

  /**
   * Size_shirt findFirst
   */
  export type Size_shirtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter, which Size_shirt to fetch.
     */
    where?: Size_shirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Size_shirts to fetch.
     */
    orderBy?: Size_shirtOrderByWithRelationInput | Size_shirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Size_shirts.
     */
    cursor?: Size_shirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Size_shirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Size_shirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Size_shirts.
     */
    distinct?: Size_shirtScalarFieldEnum | Size_shirtScalarFieldEnum[]
  }

  /**
   * Size_shirt findFirstOrThrow
   */
  export type Size_shirtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter, which Size_shirt to fetch.
     */
    where?: Size_shirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Size_shirts to fetch.
     */
    orderBy?: Size_shirtOrderByWithRelationInput | Size_shirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Size_shirts.
     */
    cursor?: Size_shirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Size_shirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Size_shirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Size_shirts.
     */
    distinct?: Size_shirtScalarFieldEnum | Size_shirtScalarFieldEnum[]
  }

  /**
   * Size_shirt findMany
   */
  export type Size_shirtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter, which Size_shirts to fetch.
     */
    where?: Size_shirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Size_shirts to fetch.
     */
    orderBy?: Size_shirtOrderByWithRelationInput | Size_shirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Size_shirts.
     */
    cursor?: Size_shirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Size_shirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Size_shirts.
     */
    skip?: number
    distinct?: Size_shirtScalarFieldEnum | Size_shirtScalarFieldEnum[]
  }

  /**
   * Size_shirt create
   */
  export type Size_shirtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * The data needed to create a Size_shirt.
     */
    data: XOR<Size_shirtCreateInput, Size_shirtUncheckedCreateInput>
  }

  /**
   * Size_shirt createMany
   */
  export type Size_shirtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Size_shirts.
     */
    data: Size_shirtCreateManyInput | Size_shirtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Size_shirt createManyAndReturn
   */
  export type Size_shirtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * The data used to create many Size_shirts.
     */
    data: Size_shirtCreateManyInput | Size_shirtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Size_shirt update
   */
  export type Size_shirtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * The data needed to update a Size_shirt.
     */
    data: XOR<Size_shirtUpdateInput, Size_shirtUncheckedUpdateInput>
    /**
     * Choose, which Size_shirt to update.
     */
    where: Size_shirtWhereUniqueInput
  }

  /**
   * Size_shirt updateMany
   */
  export type Size_shirtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Size_shirts.
     */
    data: XOR<Size_shirtUpdateManyMutationInput, Size_shirtUncheckedUpdateManyInput>
    /**
     * Filter which Size_shirts to update
     */
    where?: Size_shirtWhereInput
    /**
     * Limit how many Size_shirts to update.
     */
    limit?: number
  }

  /**
   * Size_shirt updateManyAndReturn
   */
  export type Size_shirtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * The data used to update Size_shirts.
     */
    data: XOR<Size_shirtUpdateManyMutationInput, Size_shirtUncheckedUpdateManyInput>
    /**
     * Filter which Size_shirts to update
     */
    where?: Size_shirtWhereInput
    /**
     * Limit how many Size_shirts to update.
     */
    limit?: number
  }

  /**
   * Size_shirt upsert
   */
  export type Size_shirtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * The filter to search for the Size_shirt to update in case it exists.
     */
    where: Size_shirtWhereUniqueInput
    /**
     * In case the Size_shirt found by the `where` argument doesn't exist, create a new Size_shirt with this data.
     */
    create: XOR<Size_shirtCreateInput, Size_shirtUncheckedCreateInput>
    /**
     * In case the Size_shirt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Size_shirtUpdateInput, Size_shirtUncheckedUpdateInput>
  }

  /**
   * Size_shirt delete
   */
  export type Size_shirtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    /**
     * Filter which Size_shirt to delete.
     */
    where: Size_shirtWhereUniqueInput
  }

  /**
   * Size_shirt deleteMany
   */
  export type Size_shirtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size_shirts to delete
     */
    where?: Size_shirtWhereInput
    /**
     * Limit how many Size_shirts to delete.
     */
    limit?: number
  }

  /**
   * Size_shirt.participant
   */
  export type Size_shirt$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Size_shirt.Items_vip
   */
  export type Size_shirt$Items_vipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    where?: Items_vipWhereInput
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    cursor?: Items_vipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Items_vipScalarFieldEnum | Items_vipScalarFieldEnum[]
  }

  /**
   * Size_shirt.OrderItem
   */
  export type Size_shirt$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Size_shirt without action
   */
  export type Size_shirtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
  }


  /**
   * Model bib_sequence
   */

  export type AggregateBib_sequence = {
    _count: Bib_sequenceCountAggregateOutputType | null
    _avg: Bib_sequenceAvgAggregateOutputType | null
    _sum: Bib_sequenceSumAggregateOutputType | null
    _min: Bib_sequenceMinAggregateOutputType | null
    _max: Bib_sequenceMaxAggregateOutputType | null
  }

  export type Bib_sequenceAvgAggregateOutputType = {
    current_value: number | null
    max_value: number | null
  }

  export type Bib_sequenceSumAggregateOutputType = {
    current_value: number | null
    max_value: number | null
  }

  export type Bib_sequenceMinAggregateOutputType = {
    id: string | null
    prefix: string | null
    current_value: number | null
    max_value: number | null
  }

  export type Bib_sequenceMaxAggregateOutputType = {
    id: string | null
    prefix: string | null
    current_value: number | null
    max_value: number | null
  }

  export type Bib_sequenceCountAggregateOutputType = {
    id: number
    prefix: number
    current_value: number
    max_value: number
    _all: number
  }


  export type Bib_sequenceAvgAggregateInputType = {
    current_value?: true
    max_value?: true
  }

  export type Bib_sequenceSumAggregateInputType = {
    current_value?: true
    max_value?: true
  }

  export type Bib_sequenceMinAggregateInputType = {
    id?: true
    prefix?: true
    current_value?: true
    max_value?: true
  }

  export type Bib_sequenceMaxAggregateInputType = {
    id?: true
    prefix?: true
    current_value?: true
    max_value?: true
  }

  export type Bib_sequenceCountAggregateInputType = {
    id?: true
    prefix?: true
    current_value?: true
    max_value?: true
    _all?: true
  }

  export type Bib_sequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bib_sequence to aggregate.
     */
    where?: bib_sequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bib_sequences to fetch.
     */
    orderBy?: bib_sequenceOrderByWithRelationInput | bib_sequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bib_sequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bib_sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bib_sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bib_sequences
    **/
    _count?: true | Bib_sequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bib_sequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bib_sequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bib_sequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bib_sequenceMaxAggregateInputType
  }

  export type GetBib_sequenceAggregateType<T extends Bib_sequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateBib_sequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBib_sequence[P]>
      : GetScalarType<T[P], AggregateBib_sequence[P]>
  }




  export type bib_sequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bib_sequenceWhereInput
    orderBy?: bib_sequenceOrderByWithAggregationInput | bib_sequenceOrderByWithAggregationInput[]
    by: Bib_sequenceScalarFieldEnum[] | Bib_sequenceScalarFieldEnum
    having?: bib_sequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bib_sequenceCountAggregateInputType | true
    _avg?: Bib_sequenceAvgAggregateInputType
    _sum?: Bib_sequenceSumAggregateInputType
    _min?: Bib_sequenceMinAggregateInputType
    _max?: Bib_sequenceMaxAggregateInputType
  }

  export type Bib_sequenceGroupByOutputType = {
    id: string
    prefix: string
    current_value: number
    max_value: number
    _count: Bib_sequenceCountAggregateOutputType | null
    _avg: Bib_sequenceAvgAggregateOutputType | null
    _sum: Bib_sequenceSumAggregateOutputType | null
    _min: Bib_sequenceMinAggregateOutputType | null
    _max: Bib_sequenceMaxAggregateOutputType | null
  }

  type GetBib_sequenceGroupByPayload<T extends bib_sequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bib_sequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bib_sequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bib_sequenceGroupByOutputType[P]>
            : GetScalarType<T[P], Bib_sequenceGroupByOutputType[P]>
        }
      >
    >


  export type bib_sequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    current_value?: boolean
    max_value?: boolean
  }, ExtArgs["result"]["bib_sequence"]>

  export type bib_sequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    current_value?: boolean
    max_value?: boolean
  }, ExtArgs["result"]["bib_sequence"]>

  export type bib_sequenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    current_value?: boolean
    max_value?: boolean
  }, ExtArgs["result"]["bib_sequence"]>

  export type bib_sequenceSelectScalar = {
    id?: boolean
    prefix?: boolean
    current_value?: boolean
    max_value?: boolean
  }

  export type bib_sequenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "current_value" | "max_value", ExtArgs["result"]["bib_sequence"]>

  export type $bib_sequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bib_sequence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prefix: string
      current_value: number
      max_value: number
    }, ExtArgs["result"]["bib_sequence"]>
    composites: {}
  }

  type bib_sequenceGetPayload<S extends boolean | null | undefined | bib_sequenceDefaultArgs> = $Result.GetResult<Prisma.$bib_sequencePayload, S>

  type bib_sequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bib_sequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bib_sequenceCountAggregateInputType | true
    }

  export interface bib_sequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bib_sequence'], meta: { name: 'bib_sequence' } }
    /**
     * Find zero or one Bib_sequence that matches the filter.
     * @param {bib_sequenceFindUniqueArgs} args - Arguments to find a Bib_sequence
     * @example
     * // Get one Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bib_sequenceFindUniqueArgs>(args: SelectSubset<T, bib_sequenceFindUniqueArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bib_sequence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bib_sequenceFindUniqueOrThrowArgs} args - Arguments to find a Bib_sequence
     * @example
     * // Get one Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bib_sequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, bib_sequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bib_sequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceFindFirstArgs} args - Arguments to find a Bib_sequence
     * @example
     * // Get one Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bib_sequenceFindFirstArgs>(args?: SelectSubset<T, bib_sequenceFindFirstArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bib_sequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceFindFirstOrThrowArgs} args - Arguments to find a Bib_sequence
     * @example
     * // Get one Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bib_sequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, bib_sequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bib_sequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bib_sequences
     * const bib_sequences = await prisma.bib_sequence.findMany()
     * 
     * // Get first 10 Bib_sequences
     * const bib_sequences = await prisma.bib_sequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bib_sequenceWithIdOnly = await prisma.bib_sequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bib_sequenceFindManyArgs>(args?: SelectSubset<T, bib_sequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bib_sequence.
     * @param {bib_sequenceCreateArgs} args - Arguments to create a Bib_sequence.
     * @example
     * // Create one Bib_sequence
     * const Bib_sequence = await prisma.bib_sequence.create({
     *   data: {
     *     // ... data to create a Bib_sequence
     *   }
     * })
     * 
     */
    create<T extends bib_sequenceCreateArgs>(args: SelectSubset<T, bib_sequenceCreateArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bib_sequences.
     * @param {bib_sequenceCreateManyArgs} args - Arguments to create many Bib_sequences.
     * @example
     * // Create many Bib_sequences
     * const bib_sequence = await prisma.bib_sequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bib_sequenceCreateManyArgs>(args?: SelectSubset<T, bib_sequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bib_sequences and returns the data saved in the database.
     * @param {bib_sequenceCreateManyAndReturnArgs} args - Arguments to create many Bib_sequences.
     * @example
     * // Create many Bib_sequences
     * const bib_sequence = await prisma.bib_sequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bib_sequences and only return the `id`
     * const bib_sequenceWithIdOnly = await prisma.bib_sequence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bib_sequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, bib_sequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bib_sequence.
     * @param {bib_sequenceDeleteArgs} args - Arguments to delete one Bib_sequence.
     * @example
     * // Delete one Bib_sequence
     * const Bib_sequence = await prisma.bib_sequence.delete({
     *   where: {
     *     // ... filter to delete one Bib_sequence
     *   }
     * })
     * 
     */
    delete<T extends bib_sequenceDeleteArgs>(args: SelectSubset<T, bib_sequenceDeleteArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bib_sequence.
     * @param {bib_sequenceUpdateArgs} args - Arguments to update one Bib_sequence.
     * @example
     * // Update one Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bib_sequenceUpdateArgs>(args: SelectSubset<T, bib_sequenceUpdateArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bib_sequences.
     * @param {bib_sequenceDeleteManyArgs} args - Arguments to filter Bib_sequences to delete.
     * @example
     * // Delete a few Bib_sequences
     * const { count } = await prisma.bib_sequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bib_sequenceDeleteManyArgs>(args?: SelectSubset<T, bib_sequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bib_sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bib_sequences
     * const bib_sequence = await prisma.bib_sequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bib_sequenceUpdateManyArgs>(args: SelectSubset<T, bib_sequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bib_sequences and returns the data updated in the database.
     * @param {bib_sequenceUpdateManyAndReturnArgs} args - Arguments to update many Bib_sequences.
     * @example
     * // Update many Bib_sequences
     * const bib_sequence = await prisma.bib_sequence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bib_sequences and only return the `id`
     * const bib_sequenceWithIdOnly = await prisma.bib_sequence.updateManyAndReturn({
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
    updateManyAndReturn<T extends bib_sequenceUpdateManyAndReturnArgs>(args: SelectSubset<T, bib_sequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bib_sequence.
     * @param {bib_sequenceUpsertArgs} args - Arguments to update or create a Bib_sequence.
     * @example
     * // Update or create a Bib_sequence
     * const bib_sequence = await prisma.bib_sequence.upsert({
     *   create: {
     *     // ... data to create a Bib_sequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bib_sequence we want to update
     *   }
     * })
     */
    upsert<T extends bib_sequenceUpsertArgs>(args: SelectSubset<T, bib_sequenceUpsertArgs<ExtArgs>>): Prisma__bib_sequenceClient<$Result.GetResult<Prisma.$bib_sequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bib_sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceCountArgs} args - Arguments to filter Bib_sequences to count.
     * @example
     * // Count the number of Bib_sequences
     * const count = await prisma.bib_sequence.count({
     *   where: {
     *     // ... the filter for the Bib_sequences we want to count
     *   }
     * })
    **/
    count<T extends bib_sequenceCountArgs>(
      args?: Subset<T, bib_sequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bib_sequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bib_sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bib_sequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bib_sequenceAggregateArgs>(args: Subset<T, Bib_sequenceAggregateArgs>): Prisma.PrismaPromise<GetBib_sequenceAggregateType<T>>

    /**
     * Group by Bib_sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bib_sequenceGroupByArgs} args - Group by arguments.
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
      T extends bib_sequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bib_sequenceGroupByArgs['orderBy'] }
        : { orderBy?: bib_sequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bib_sequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBib_sequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bib_sequence model
   */
  readonly fields: bib_sequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bib_sequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bib_sequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the bib_sequence model
   */
  interface bib_sequenceFieldRefs {
    readonly id: FieldRef<"bib_sequence", 'String'>
    readonly prefix: FieldRef<"bib_sequence", 'String'>
    readonly current_value: FieldRef<"bib_sequence", 'Int'>
    readonly max_value: FieldRef<"bib_sequence", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bib_sequence findUnique
   */
  export type bib_sequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter, which bib_sequence to fetch.
     */
    where: bib_sequenceWhereUniqueInput
  }

  /**
   * bib_sequence findUniqueOrThrow
   */
  export type bib_sequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter, which bib_sequence to fetch.
     */
    where: bib_sequenceWhereUniqueInput
  }

  /**
   * bib_sequence findFirst
   */
  export type bib_sequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter, which bib_sequence to fetch.
     */
    where?: bib_sequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bib_sequences to fetch.
     */
    orderBy?: bib_sequenceOrderByWithRelationInput | bib_sequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bib_sequences.
     */
    cursor?: bib_sequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bib_sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bib_sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bib_sequences.
     */
    distinct?: Bib_sequenceScalarFieldEnum | Bib_sequenceScalarFieldEnum[]
  }

  /**
   * bib_sequence findFirstOrThrow
   */
  export type bib_sequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter, which bib_sequence to fetch.
     */
    where?: bib_sequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bib_sequences to fetch.
     */
    orderBy?: bib_sequenceOrderByWithRelationInput | bib_sequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bib_sequences.
     */
    cursor?: bib_sequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bib_sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bib_sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bib_sequences.
     */
    distinct?: Bib_sequenceScalarFieldEnum | Bib_sequenceScalarFieldEnum[]
  }

  /**
   * bib_sequence findMany
   */
  export type bib_sequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter, which bib_sequences to fetch.
     */
    where?: bib_sequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bib_sequences to fetch.
     */
    orderBy?: bib_sequenceOrderByWithRelationInput | bib_sequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bib_sequences.
     */
    cursor?: bib_sequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bib_sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bib_sequences.
     */
    skip?: number
    distinct?: Bib_sequenceScalarFieldEnum | Bib_sequenceScalarFieldEnum[]
  }

  /**
   * bib_sequence create
   */
  export type bib_sequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * The data needed to create a bib_sequence.
     */
    data: XOR<bib_sequenceCreateInput, bib_sequenceUncheckedCreateInput>
  }

  /**
   * bib_sequence createMany
   */
  export type bib_sequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bib_sequences.
     */
    data: bib_sequenceCreateManyInput | bib_sequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bib_sequence createManyAndReturn
   */
  export type bib_sequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * The data used to create many bib_sequences.
     */
    data: bib_sequenceCreateManyInput | bib_sequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bib_sequence update
   */
  export type bib_sequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * The data needed to update a bib_sequence.
     */
    data: XOR<bib_sequenceUpdateInput, bib_sequenceUncheckedUpdateInput>
    /**
     * Choose, which bib_sequence to update.
     */
    where: bib_sequenceWhereUniqueInput
  }

  /**
   * bib_sequence updateMany
   */
  export type bib_sequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bib_sequences.
     */
    data: XOR<bib_sequenceUpdateManyMutationInput, bib_sequenceUncheckedUpdateManyInput>
    /**
     * Filter which bib_sequences to update
     */
    where?: bib_sequenceWhereInput
    /**
     * Limit how many bib_sequences to update.
     */
    limit?: number
  }

  /**
   * bib_sequence updateManyAndReturn
   */
  export type bib_sequenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * The data used to update bib_sequences.
     */
    data: XOR<bib_sequenceUpdateManyMutationInput, bib_sequenceUncheckedUpdateManyInput>
    /**
     * Filter which bib_sequences to update
     */
    where?: bib_sequenceWhereInput
    /**
     * Limit how many bib_sequences to update.
     */
    limit?: number
  }

  /**
   * bib_sequence upsert
   */
  export type bib_sequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * The filter to search for the bib_sequence to update in case it exists.
     */
    where: bib_sequenceWhereUniqueInput
    /**
     * In case the bib_sequence found by the `where` argument doesn't exist, create a new bib_sequence with this data.
     */
    create: XOR<bib_sequenceCreateInput, bib_sequenceUncheckedCreateInput>
    /**
     * In case the bib_sequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bib_sequenceUpdateInput, bib_sequenceUncheckedUpdateInput>
  }

  /**
   * bib_sequence delete
   */
  export type bib_sequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
    /**
     * Filter which bib_sequence to delete.
     */
    where: bib_sequenceWhereUniqueInput
  }

  /**
   * bib_sequence deleteMany
   */
  export type bib_sequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bib_sequences to delete
     */
    where?: bib_sequenceWhereInput
    /**
     * Limit how many bib_sequences to delete.
     */
    limit?: number
  }

  /**
   * bib_sequence without action
   */
  export type bib_sequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bib_sequence
     */
    select?: bib_sequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bib_sequence
     */
    omit?: bib_sequenceOmit<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    participantId: string | null
    nameBib: string | null
    numberBib: string | null
    payment: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    sex: string | null
    age: string | null
    sizeId: string | null
    transferFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
    year: string | null
    address: string | null
    typeBib: string | null
  }

  export type ParticipantMaxAggregateOutputType = {
    participantId: string | null
    nameBib: string | null
    numberBib: string | null
    payment: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    sex: string | null
    age: string | null
    sizeId: string | null
    transferFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
    year: string | null
    address: string | null
    typeBib: string | null
  }

  export type ParticipantCountAggregateOutputType = {
    participantId: number
    nameBib: number
    numberBib: number
    payment: number
    firstName: number
    lastName: number
    email: number
    phone: number
    sex: number
    age: number
    sizeId: number
    transferFile: number
    createdAt: number
    updatedAt: number
    year: number
    address: number
    typeBib: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    participantId?: true
    nameBib?: true
    numberBib?: true
    payment?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    sex?: true
    age?: true
    sizeId?: true
    transferFile?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    address?: true
    typeBib?: true
  }

  export type ParticipantMaxAggregateInputType = {
    participantId?: true
    nameBib?: true
    numberBib?: true
    payment?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    sex?: true
    age?: true
    sizeId?: true
    transferFile?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    address?: true
    typeBib?: true
  }

  export type ParticipantCountAggregateInputType = {
    participantId?: true
    nameBib?: true
    numberBib?: true
    payment?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    sex?: true
    age?: true
    sizeId?: true
    transferFile?: true
    createdAt?: true
    updatedAt?: true
    year?: true
    address?: true
    typeBib?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    participantId: string
    nameBib: string | null
    numberBib: string | null
    payment: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age: string | null
    sizeId: string
    transferFile: string
    createdAt: Date
    updatedAt: Date | null
    year: string | null
    address: string | null
    typeBib: string | null
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participantId?: boolean
    nameBib?: boolean
    numberBib?: boolean
    payment?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    age?: boolean
    sizeId?: boolean
    transferFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    year?: boolean
    address?: boolean
    typeBib?: boolean
    Animal?: boolean | Participant$AnimalArgs<ExtArgs>
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
    Items_vip?: boolean | Participant$Items_vipArgs<ExtArgs>
    CheckPoint?: boolean | Participant$CheckPointArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participantId?: boolean
    nameBib?: boolean
    numberBib?: boolean
    payment?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    age?: boolean
    sizeId?: boolean
    transferFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    year?: boolean
    address?: boolean
    typeBib?: boolean
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    participantId?: boolean
    nameBib?: boolean
    numberBib?: boolean
    payment?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    age?: boolean
    sizeId?: boolean
    transferFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    year?: boolean
    address?: boolean
    typeBib?: boolean
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    participantId?: boolean
    nameBib?: boolean
    numberBib?: boolean
    payment?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    age?: boolean
    sizeId?: boolean
    transferFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    year?: boolean
    address?: boolean
    typeBib?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"participantId" | "nameBib" | "numberBib" | "payment" | "firstName" | "lastName" | "email" | "phone" | "sex" | "age" | "sizeId" | "transferFile" | "createdAt" | "updatedAt" | "year" | "address" | "typeBib", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Animal?: boolean | Participant$AnimalArgs<ExtArgs>
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
    Items_vip?: boolean | Participant$Items_vipArgs<ExtArgs>
    CheckPoint?: boolean | Participant$CheckPointArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    size_sh?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      Animal: Prisma.$AnimalPayload<ExtArgs>[]
      size_sh: Prisma.$Size_shirtPayload<ExtArgs>
      Items_vip: Prisma.$Items_vipPayload<ExtArgs>[]
      CheckPoint: Prisma.$CheckPointPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      participantId: string
      nameBib: string | null
      numberBib: string | null
      payment: boolean
      firstName: string
      lastName: string
      email: string
      phone: string
      sex: string
      age: string | null
      sizeId: string
      transferFile: string
      createdAt: Date
      updatedAt: Date | null
      year: string | null
      address: string | null
      typeBib: string | null
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `participantId`
     * const participantWithParticipantIdOnly = await prisma.participant.findMany({ select: { participantId: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `participantId`
     * const participantWithParticipantIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { participantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `participantId`
     * const participantWithParticipantIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { participantId: true },
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Animal<T extends Participant$AnimalArgs<ExtArgs> = {}>(args?: Subset<T, Participant$AnimalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    size_sh<T extends Size_shirtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Size_shirtDefaultArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Items_vip<T extends Participant$Items_vipArgs<ExtArgs> = {}>(args?: Subset<T, Participant$Items_vipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CheckPoint<T extends Participant$CheckPointArgs<ExtArgs> = {}>(args?: Subset<T, Participant$CheckPointArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly participantId: FieldRef<"Participant", 'String'>
    readonly nameBib: FieldRef<"Participant", 'String'>
    readonly numberBib: FieldRef<"Participant", 'String'>
    readonly payment: FieldRef<"Participant", 'Boolean'>
    readonly firstName: FieldRef<"Participant", 'String'>
    readonly lastName: FieldRef<"Participant", 'String'>
    readonly email: FieldRef<"Participant", 'String'>
    readonly phone: FieldRef<"Participant", 'String'>
    readonly sex: FieldRef<"Participant", 'String'>
    readonly age: FieldRef<"Participant", 'String'>
    readonly sizeId: FieldRef<"Participant", 'String'>
    readonly transferFile: FieldRef<"Participant", 'String'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
    readonly updatedAt: FieldRef<"Participant", 'DateTime'>
    readonly year: FieldRef<"Participant", 'String'>
    readonly address: FieldRef<"Participant", 'String'>
    readonly typeBib: FieldRef<"Participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.Animal
   */
  export type Participant$AnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Participant.Items_vip
   */
  export type Participant$Items_vipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    where?: Items_vipWhereInput
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    cursor?: Items_vipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Items_vipScalarFieldEnum | Items_vipScalarFieldEnum[]
  }

  /**
   * Participant.CheckPoint
   */
  export type Participant$CheckPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    where?: CheckPointWhereInput
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalMinAggregateOutputType = {
    animalId: string | null
    name: string | null
    weight: string | null
    sex: string | null
    createdAt: Date | null
    updatedAt: Date | null
    participantId: string | null
    fancys: boolean | null
    breed: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    animalId: string | null
    name: string | null
    weight: string | null
    sex: string | null
    createdAt: Date | null
    updatedAt: Date | null
    participantId: string | null
    fancys: boolean | null
    breed: string | null
  }

  export type AnimalCountAggregateOutputType = {
    animalId: number
    name: number
    weight: number
    sex: number
    createdAt: number
    updatedAt: number
    participantId: number
    fancys: number
    breed: number
    _all: number
  }


  export type AnimalMinAggregateInputType = {
    animalId?: true
    name?: true
    weight?: true
    sex?: true
    createdAt?: true
    updatedAt?: true
    participantId?: true
    fancys?: true
    breed?: true
  }

  export type AnimalMaxAggregateInputType = {
    animalId?: true
    name?: true
    weight?: true
    sex?: true
    createdAt?: true
    updatedAt?: true
    participantId?: true
    fancys?: true
    breed?: true
  }

  export type AnimalCountAggregateInputType = {
    animalId?: true
    name?: true
    weight?: true
    sex?: true
    createdAt?: true
    updatedAt?: true
    participantId?: true
    fancys?: true
    breed?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    animalId: string
    name: string
    weight: string
    sex: string
    createdAt: Date
    updatedAt: Date | null
    participantId: string
    fancys: boolean
    breed: string
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    weight?: boolean
    sex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantId?: boolean
    fancys?: boolean
    breed?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    weight?: boolean
    sex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantId?: boolean
    fancys?: boolean
    breed?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animalId?: boolean
    name?: boolean
    weight?: boolean
    sex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantId?: boolean
    fancys?: boolean
    breed?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    animalId?: boolean
    name?: boolean
    weight?: boolean
    sex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participantId?: boolean
    fancys?: boolean
    breed?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"animalId" | "name" | "weight" | "sex" | "createdAt" | "updatedAt" | "participantId" | "fancys" | "breed", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animalId: string
      name: string
      weight: string
      sex: string
      createdAt: Date
      updatedAt: Date | null
      participantId: string
      fancys: boolean
      breed: string
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.findMany({ select: { animalId: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { animalId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `animalId`
     * const animalWithAnimalIdOnly = await prisma.animal.updateManyAndReturn({
     *   select: { animalId: true },
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly animalId: FieldRef<"Animal", 'String'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly weight: FieldRef<"Animal", 'String'>
    readonly sex: FieldRef<"Animal", 'String'>
    readonly createdAt: FieldRef<"Animal", 'DateTime'>
    readonly updatedAt: FieldRef<"Animal", 'DateTime'>
    readonly participantId: FieldRef<"Animal", 'String'>
    readonly fancys: FieldRef<"Animal", 'Boolean'>
    readonly breed: FieldRef<"Animal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Sponsor
   */

  export type AggregateSponsor = {
    _count: SponsorCountAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  export type SponsorMinAggregateOutputType = {
    sponsorId: string | null
    name: string | null
    image: string | null
    link: string | null
    price: string | null
    type: $Enums.Types | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorMaxAggregateOutputType = {
    sponsorId: string | null
    name: string | null
    image: string | null
    link: string | null
    price: string | null
    type: $Enums.Types | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorCountAggregateOutputType = {
    sponsorId: number
    name: number
    image: number
    link: number
    price: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SponsorMinAggregateInputType = {
    sponsorId?: true
    name?: true
    image?: true
    link?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorMaxAggregateInputType = {
    sponsorId?: true
    name?: true
    image?: true
    link?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorCountAggregateInputType = {
    sponsorId?: true
    name?: true
    image?: true
    link?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsor to aggregate.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sponsors
    **/
    _count?: true | SponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorMaxAggregateInputType
  }

  export type GetSponsorAggregateType<T extends SponsorAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsor[P]>
      : GetScalarType<T[P], AggregateSponsor[P]>
  }




  export type SponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorWhereInput
    orderBy?: SponsorOrderByWithAggregationInput | SponsorOrderByWithAggregationInput[]
    by: SponsorScalarFieldEnum[] | SponsorScalarFieldEnum
    having?: SponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorCountAggregateInputType | true
    _min?: SponsorMinAggregateInputType
    _max?: SponsorMaxAggregateInputType
  }

  export type SponsorGroupByOutputType = {
    sponsorId: string
    name: string
    image: string | null
    link: string | null
    price: string | null
    type: $Enums.Types
    createdAt: Date
    updatedAt: Date | null
    _count: SponsorCountAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  type GetSponsorGroupByPayload<T extends SponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorGroupByOutputType[P]>
        }
      >
    >


  export type SponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sponsorId?: boolean
    name?: boolean
    image?: boolean
    link?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sponsorId?: boolean
    name?: boolean
    image?: boolean
    link?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sponsorId?: boolean
    name?: boolean
    image?: boolean
    link?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectScalar = {
    sponsorId?: boolean
    name?: boolean
    image?: boolean
    link?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sponsorId" | "name" | "image" | "link" | "price" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["sponsor"]>

  export type $SponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sponsor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sponsorId: string
      name: string
      image: string | null
      link: string | null
      price: string | null
      type: $Enums.Types
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["sponsor"]>
    composites: {}
  }

  type SponsorGetPayload<S extends boolean | null | undefined | SponsorDefaultArgs> = $Result.GetResult<Prisma.$SponsorPayload, S>

  type SponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorCountAggregateInputType | true
    }

  export interface SponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sponsor'], meta: { name: 'Sponsor' } }
    /**
     * Find zero or one Sponsor that matches the filter.
     * @param {SponsorFindUniqueArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorFindUniqueArgs>(args: SelectSubset<T, SponsorFindUniqueArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SponsorFindUniqueOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorFindFirstArgs>(args?: SelectSubset<T, SponsorFindFirstArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsors
     * const sponsors = await prisma.sponsor.findMany()
     * 
     * // Get first 10 Sponsors
     * const sponsors = await prisma.sponsor.findMany({ take: 10 })
     * 
     * // Only select the `sponsorId`
     * const sponsorWithSponsorIdOnly = await prisma.sponsor.findMany({ select: { sponsorId: true } })
     * 
     */
    findMany<T extends SponsorFindManyArgs>(args?: SelectSubset<T, SponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sponsor.
     * @param {SponsorCreateArgs} args - Arguments to create a Sponsor.
     * @example
     * // Create one Sponsor
     * const Sponsor = await prisma.sponsor.create({
     *   data: {
     *     // ... data to create a Sponsor
     *   }
     * })
     * 
     */
    create<T extends SponsorCreateArgs>(args: SelectSubset<T, SponsorCreateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sponsors.
     * @param {SponsorCreateManyArgs} args - Arguments to create many Sponsors.
     * @example
     * // Create many Sponsors
     * const sponsor = await prisma.sponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorCreateManyArgs>(args?: SelectSubset<T, SponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sponsors and returns the data saved in the database.
     * @param {SponsorCreateManyAndReturnArgs} args - Arguments to create many Sponsors.
     * @example
     * // Create many Sponsors
     * const sponsor = await prisma.sponsor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sponsors and only return the `sponsorId`
     * const sponsorWithSponsorIdOnly = await prisma.sponsor.createManyAndReturn({
     *   select: { sponsorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SponsorCreateManyAndReturnArgs>(args?: SelectSubset<T, SponsorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sponsor.
     * @param {SponsorDeleteArgs} args - Arguments to delete one Sponsor.
     * @example
     * // Delete one Sponsor
     * const Sponsor = await prisma.sponsor.delete({
     *   where: {
     *     // ... filter to delete one Sponsor
     *   }
     * })
     * 
     */
    delete<T extends SponsorDeleteArgs>(args: SelectSubset<T, SponsorDeleteArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sponsor.
     * @param {SponsorUpdateArgs} args - Arguments to update one Sponsor.
     * @example
     * // Update one Sponsor
     * const sponsor = await prisma.sponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorUpdateArgs>(args: SelectSubset<T, SponsorUpdateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sponsors.
     * @param {SponsorDeleteManyArgs} args - Arguments to filter Sponsors to delete.
     * @example
     * // Delete a few Sponsors
     * const { count } = await prisma.sponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorDeleteManyArgs>(args?: SelectSubset<T, SponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsors
     * const sponsor = await prisma.sponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorUpdateManyArgs>(args: SelectSubset<T, SponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors and returns the data updated in the database.
     * @param {SponsorUpdateManyAndReturnArgs} args - Arguments to update many Sponsors.
     * @example
     * // Update many Sponsors
     * const sponsor = await prisma.sponsor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sponsors and only return the `sponsorId`
     * const sponsorWithSponsorIdOnly = await prisma.sponsor.updateManyAndReturn({
     *   select: { sponsorId: true },
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
    updateManyAndReturn<T extends SponsorUpdateManyAndReturnArgs>(args: SelectSubset<T, SponsorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sponsor.
     * @param {SponsorUpsertArgs} args - Arguments to update or create a Sponsor.
     * @example
     * // Update or create a Sponsor
     * const sponsor = await prisma.sponsor.upsert({
     *   create: {
     *     // ... data to create a Sponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsor we want to update
     *   }
     * })
     */
    upsert<T extends SponsorUpsertArgs>(args: SelectSubset<T, SponsorUpsertArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorCountArgs} args - Arguments to filter Sponsors to count.
     * @example
     * // Count the number of Sponsors
     * const count = await prisma.sponsor.count({
     *   where: {
     *     // ... the filter for the Sponsors we want to count
     *   }
     * })
    **/
    count<T extends SponsorCountArgs>(
      args?: Subset<T, SponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SponsorAggregateArgs>(args: Subset<T, SponsorAggregateArgs>): Prisma.PrismaPromise<GetSponsorAggregateType<T>>

    /**
     * Group by Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorGroupByArgs} args - Group by arguments.
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
      T extends SponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorGroupByArgs['orderBy'] }
        : { orderBy?: SponsorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sponsor model
   */
  readonly fields: SponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Sponsor model
   */
  interface SponsorFieldRefs {
    readonly sponsorId: FieldRef<"Sponsor", 'String'>
    readonly name: FieldRef<"Sponsor", 'String'>
    readonly image: FieldRef<"Sponsor", 'String'>
    readonly link: FieldRef<"Sponsor", 'String'>
    readonly price: FieldRef<"Sponsor", 'String'>
    readonly type: FieldRef<"Sponsor", 'Types'>
    readonly createdAt: FieldRef<"Sponsor", 'DateTime'>
    readonly updatedAt: FieldRef<"Sponsor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sponsor findUnique
   */
  export type SponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findUniqueOrThrow
   */
  export type SponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findFirst
   */
  export type SponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findFirstOrThrow
   */
  export type SponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findMany
   */
  export type SponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor create
   */
  export type SponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data needed to create a Sponsor.
     */
    data: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
  }

  /**
   * Sponsor createMany
   */
  export type SponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorCreateManyInput | SponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sponsor createManyAndReturn
   */
  export type SponsorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorCreateManyInput | SponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sponsor update
   */
  export type SponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data needed to update a Sponsor.
     */
    data: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
    /**
     * Choose, which Sponsor to update.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor updateMany
   */
  export type SponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorUpdateManyMutationInput, SponsorUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to update.
     */
    limit?: number
  }

  /**
   * Sponsor updateManyAndReturn
   */
  export type SponsorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorUpdateManyMutationInput, SponsorUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to update.
     */
    limit?: number
  }

  /**
   * Sponsor upsert
   */
  export type SponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The filter to search for the Sponsor to update in case it exists.
     */
    where: SponsorWhereUniqueInput
    /**
     * In case the Sponsor found by the `where` argument doesn't exist, create a new Sponsor with this data.
     */
    create: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
    /**
     * In case the Sponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
  }

  /**
   * Sponsor delete
   */
  export type SponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter which Sponsor to delete.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor deleteMany
   */
  export type SponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsors to delete
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to delete.
     */
    limit?: number
  }

  /**
   * Sponsor without action
   */
  export type SponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
  }


  /**
   * Model Items_vip
   */

  export type AggregateItems_vip = {
    _count: Items_vipCountAggregateOutputType | null
    _min: Items_vipMinAggregateOutputType | null
    _max: Items_vipMaxAggregateOutputType | null
  }

  export type Items_vipMinAggregateOutputType = {
    itemId: string | null
    participantId: string | null
    sizeId: string | null
    items: string | null
    model_shirt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Items_vipMaxAggregateOutputType = {
    itemId: string | null
    participantId: string | null
    sizeId: string | null
    items: string | null
    model_shirt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Items_vipCountAggregateOutputType = {
    itemId: number
    participantId: number
    sizeId: number
    items: number
    model_shirt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Items_vipMinAggregateInputType = {
    itemId?: true
    participantId?: true
    sizeId?: true
    items?: true
    model_shirt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Items_vipMaxAggregateInputType = {
    itemId?: true
    participantId?: true
    sizeId?: true
    items?: true
    model_shirt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Items_vipCountAggregateInputType = {
    itemId?: true
    participantId?: true
    sizeId?: true
    items?: true
    model_shirt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Items_vipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items_vip to aggregate.
     */
    where?: Items_vipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items_vips to fetch.
     */
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Items_vipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items_vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items_vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items_vips
    **/
    _count?: true | Items_vipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Items_vipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Items_vipMaxAggregateInputType
  }

  export type GetItems_vipAggregateType<T extends Items_vipAggregateArgs> = {
        [P in keyof T & keyof AggregateItems_vip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems_vip[P]>
      : GetScalarType<T[P], AggregateItems_vip[P]>
  }




  export type Items_vipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Items_vipWhereInput
    orderBy?: Items_vipOrderByWithAggregationInput | Items_vipOrderByWithAggregationInput[]
    by: Items_vipScalarFieldEnum[] | Items_vipScalarFieldEnum
    having?: Items_vipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Items_vipCountAggregateInputType | true
    _min?: Items_vipMinAggregateInputType
    _max?: Items_vipMaxAggregateInputType
  }

  export type Items_vipGroupByOutputType = {
    itemId: string
    participantId: string
    sizeId: string | null
    items: string
    model_shirt: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: Items_vipCountAggregateOutputType | null
    _min: Items_vipMinAggregateOutputType | null
    _max: Items_vipMaxAggregateOutputType | null
  }

  type GetItems_vipGroupByPayload<T extends Items_vipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Items_vipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Items_vipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Items_vipGroupByOutputType[P]>
            : GetScalarType<T[P], Items_vipGroupByOutputType[P]>
        }
      >
    >


  export type Items_vipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    participantId?: boolean
    sizeId?: boolean
    items?: boolean
    model_shirt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }, ExtArgs["result"]["items_vip"]>

  export type Items_vipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    participantId?: boolean
    sizeId?: boolean
    items?: boolean
    model_shirt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }, ExtArgs["result"]["items_vip"]>

  export type Items_vipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    participantId?: boolean
    sizeId?: boolean
    items?: boolean
    model_shirt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }, ExtArgs["result"]["items_vip"]>

  export type Items_vipSelectScalar = {
    itemId?: boolean
    participantId?: boolean
    sizeId?: boolean
    items?: boolean
    model_shirt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Items_vipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "participantId" | "sizeId" | "items" | "model_shirt" | "createdAt" | "updatedAt", ExtArgs["result"]["items_vip"]>
  export type Items_vipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }
  export type Items_vipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }
  export type Items_vipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    size_sh?: boolean | Items_vip$size_shArgs<ExtArgs>
  }

  export type $Items_vipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items_vip"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
      size_sh: Prisma.$Size_shirtPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: string
      participantId: string
      sizeId: string | null
      items: string
      model_shirt: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["items_vip"]>
    composites: {}
  }

  type Items_vipGetPayload<S extends boolean | null | undefined | Items_vipDefaultArgs> = $Result.GetResult<Prisma.$Items_vipPayload, S>

  type Items_vipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Items_vipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Items_vipCountAggregateInputType | true
    }

  export interface Items_vipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items_vip'], meta: { name: 'Items_vip' } }
    /**
     * Find zero or one Items_vip that matches the filter.
     * @param {Items_vipFindUniqueArgs} args - Arguments to find a Items_vip
     * @example
     * // Get one Items_vip
     * const items_vip = await prisma.items_vip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Items_vipFindUniqueArgs>(args: SelectSubset<T, Items_vipFindUniqueArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items_vip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Items_vipFindUniqueOrThrowArgs} args - Arguments to find a Items_vip
     * @example
     * // Get one Items_vip
     * const items_vip = await prisma.items_vip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Items_vipFindUniqueOrThrowArgs>(args: SelectSubset<T, Items_vipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items_vip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipFindFirstArgs} args - Arguments to find a Items_vip
     * @example
     * // Get one Items_vip
     * const items_vip = await prisma.items_vip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Items_vipFindFirstArgs>(args?: SelectSubset<T, Items_vipFindFirstArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items_vip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipFindFirstOrThrowArgs} args - Arguments to find a Items_vip
     * @example
     * // Get one Items_vip
     * const items_vip = await prisma.items_vip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Items_vipFindFirstOrThrowArgs>(args?: SelectSubset<T, Items_vipFindFirstOrThrowArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items_vips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items_vips
     * const items_vips = await prisma.items_vip.findMany()
     * 
     * // Get first 10 Items_vips
     * const items_vips = await prisma.items_vip.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const items_vipWithItemIdOnly = await prisma.items_vip.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends Items_vipFindManyArgs>(args?: SelectSubset<T, Items_vipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items_vip.
     * @param {Items_vipCreateArgs} args - Arguments to create a Items_vip.
     * @example
     * // Create one Items_vip
     * const Items_vip = await prisma.items_vip.create({
     *   data: {
     *     // ... data to create a Items_vip
     *   }
     * })
     * 
     */
    create<T extends Items_vipCreateArgs>(args: SelectSubset<T, Items_vipCreateArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items_vips.
     * @param {Items_vipCreateManyArgs} args - Arguments to create many Items_vips.
     * @example
     * // Create many Items_vips
     * const items_vip = await prisma.items_vip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Items_vipCreateManyArgs>(args?: SelectSubset<T, Items_vipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items_vips and returns the data saved in the database.
     * @param {Items_vipCreateManyAndReturnArgs} args - Arguments to create many Items_vips.
     * @example
     * // Create many Items_vips
     * const items_vip = await prisma.items_vip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items_vips and only return the `itemId`
     * const items_vipWithItemIdOnly = await prisma.items_vip.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Items_vipCreateManyAndReturnArgs>(args?: SelectSubset<T, Items_vipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items_vip.
     * @param {Items_vipDeleteArgs} args - Arguments to delete one Items_vip.
     * @example
     * // Delete one Items_vip
     * const Items_vip = await prisma.items_vip.delete({
     *   where: {
     *     // ... filter to delete one Items_vip
     *   }
     * })
     * 
     */
    delete<T extends Items_vipDeleteArgs>(args: SelectSubset<T, Items_vipDeleteArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items_vip.
     * @param {Items_vipUpdateArgs} args - Arguments to update one Items_vip.
     * @example
     * // Update one Items_vip
     * const items_vip = await prisma.items_vip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Items_vipUpdateArgs>(args: SelectSubset<T, Items_vipUpdateArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items_vips.
     * @param {Items_vipDeleteManyArgs} args - Arguments to filter Items_vips to delete.
     * @example
     * // Delete a few Items_vips
     * const { count } = await prisma.items_vip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Items_vipDeleteManyArgs>(args?: SelectSubset<T, Items_vipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items_vips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items_vips
     * const items_vip = await prisma.items_vip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Items_vipUpdateManyArgs>(args: SelectSubset<T, Items_vipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items_vips and returns the data updated in the database.
     * @param {Items_vipUpdateManyAndReturnArgs} args - Arguments to update many Items_vips.
     * @example
     * // Update many Items_vips
     * const items_vip = await prisma.items_vip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items_vips and only return the `itemId`
     * const items_vipWithItemIdOnly = await prisma.items_vip.updateManyAndReturn({
     *   select: { itemId: true },
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
    updateManyAndReturn<T extends Items_vipUpdateManyAndReturnArgs>(args: SelectSubset<T, Items_vipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items_vip.
     * @param {Items_vipUpsertArgs} args - Arguments to update or create a Items_vip.
     * @example
     * // Update or create a Items_vip
     * const items_vip = await prisma.items_vip.upsert({
     *   create: {
     *     // ... data to create a Items_vip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items_vip we want to update
     *   }
     * })
     */
    upsert<T extends Items_vipUpsertArgs>(args: SelectSubset<T, Items_vipUpsertArgs<ExtArgs>>): Prisma__Items_vipClient<$Result.GetResult<Prisma.$Items_vipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items_vips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipCountArgs} args - Arguments to filter Items_vips to count.
     * @example
     * // Count the number of Items_vips
     * const count = await prisma.items_vip.count({
     *   where: {
     *     // ... the filter for the Items_vips we want to count
     *   }
     * })
    **/
    count<T extends Items_vipCountArgs>(
      args?: Subset<T, Items_vipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Items_vipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items_vip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Items_vipAggregateArgs>(args: Subset<T, Items_vipAggregateArgs>): Prisma.PrismaPromise<GetItems_vipAggregateType<T>>

    /**
     * Group by Items_vip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Items_vipGroupByArgs} args - Group by arguments.
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
      T extends Items_vipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Items_vipGroupByArgs['orderBy'] }
        : { orderBy?: Items_vipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Items_vipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItems_vipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items_vip model
   */
  readonly fields: Items_vipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items_vip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Items_vipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size_sh<T extends Items_vip$size_shArgs<ExtArgs> = {}>(args?: Subset<T, Items_vip$size_shArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Items_vip model
   */
  interface Items_vipFieldRefs {
    readonly itemId: FieldRef<"Items_vip", 'String'>
    readonly participantId: FieldRef<"Items_vip", 'String'>
    readonly sizeId: FieldRef<"Items_vip", 'String'>
    readonly items: FieldRef<"Items_vip", 'String'>
    readonly model_shirt: FieldRef<"Items_vip", 'String'>
    readonly createdAt: FieldRef<"Items_vip", 'DateTime'>
    readonly updatedAt: FieldRef<"Items_vip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Items_vip findUnique
   */
  export type Items_vipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter, which Items_vip to fetch.
     */
    where: Items_vipWhereUniqueInput
  }

  /**
   * Items_vip findUniqueOrThrow
   */
  export type Items_vipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter, which Items_vip to fetch.
     */
    where: Items_vipWhereUniqueInput
  }

  /**
   * Items_vip findFirst
   */
  export type Items_vipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter, which Items_vip to fetch.
     */
    where?: Items_vipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items_vips to fetch.
     */
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items_vips.
     */
    cursor?: Items_vipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items_vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items_vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items_vips.
     */
    distinct?: Items_vipScalarFieldEnum | Items_vipScalarFieldEnum[]
  }

  /**
   * Items_vip findFirstOrThrow
   */
  export type Items_vipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter, which Items_vip to fetch.
     */
    where?: Items_vipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items_vips to fetch.
     */
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items_vips.
     */
    cursor?: Items_vipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items_vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items_vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items_vips.
     */
    distinct?: Items_vipScalarFieldEnum | Items_vipScalarFieldEnum[]
  }

  /**
   * Items_vip findMany
   */
  export type Items_vipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter, which Items_vips to fetch.
     */
    where?: Items_vipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items_vips to fetch.
     */
    orderBy?: Items_vipOrderByWithRelationInput | Items_vipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items_vips.
     */
    cursor?: Items_vipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items_vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items_vips.
     */
    skip?: number
    distinct?: Items_vipScalarFieldEnum | Items_vipScalarFieldEnum[]
  }

  /**
   * Items_vip create
   */
  export type Items_vipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * The data needed to create a Items_vip.
     */
    data: XOR<Items_vipCreateInput, Items_vipUncheckedCreateInput>
  }

  /**
   * Items_vip createMany
   */
  export type Items_vipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items_vips.
     */
    data: Items_vipCreateManyInput | Items_vipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items_vip createManyAndReturn
   */
  export type Items_vipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * The data used to create many Items_vips.
     */
    data: Items_vipCreateManyInput | Items_vipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items_vip update
   */
  export type Items_vipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * The data needed to update a Items_vip.
     */
    data: XOR<Items_vipUpdateInput, Items_vipUncheckedUpdateInput>
    /**
     * Choose, which Items_vip to update.
     */
    where: Items_vipWhereUniqueInput
  }

  /**
   * Items_vip updateMany
   */
  export type Items_vipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items_vips.
     */
    data: XOR<Items_vipUpdateManyMutationInput, Items_vipUncheckedUpdateManyInput>
    /**
     * Filter which Items_vips to update
     */
    where?: Items_vipWhereInput
    /**
     * Limit how many Items_vips to update.
     */
    limit?: number
  }

  /**
   * Items_vip updateManyAndReturn
   */
  export type Items_vipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * The data used to update Items_vips.
     */
    data: XOR<Items_vipUpdateManyMutationInput, Items_vipUncheckedUpdateManyInput>
    /**
     * Filter which Items_vips to update
     */
    where?: Items_vipWhereInput
    /**
     * Limit how many Items_vips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items_vip upsert
   */
  export type Items_vipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * The filter to search for the Items_vip to update in case it exists.
     */
    where: Items_vipWhereUniqueInput
    /**
     * In case the Items_vip found by the `where` argument doesn't exist, create a new Items_vip with this data.
     */
    create: XOR<Items_vipCreateInput, Items_vipUncheckedCreateInput>
    /**
     * In case the Items_vip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Items_vipUpdateInput, Items_vipUncheckedUpdateInput>
  }

  /**
   * Items_vip delete
   */
  export type Items_vipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
    /**
     * Filter which Items_vip to delete.
     */
    where: Items_vipWhereUniqueInput
  }

  /**
   * Items_vip deleteMany
   */
  export type Items_vipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items_vips to delete
     */
    where?: Items_vipWhereInput
    /**
     * Limit how many Items_vips to delete.
     */
    limit?: number
  }

  /**
   * Items_vip.size_sh
   */
  export type Items_vip$size_shArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size_shirt
     */
    select?: Size_shirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size_shirt
     */
    omit?: Size_shirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Size_shirtInclude<ExtArgs> | null
    where?: Size_shirtWhereInput
  }

  /**
   * Items_vip without action
   */
  export type Items_vipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items_vip
     */
    select?: Items_vipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items_vip
     */
    omit?: Items_vipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Items_vipInclude<ExtArgs> | null
  }


  /**
   * Model ShirtModel
   */

  export type AggregateShirtModel = {
    _count: ShirtModelCountAggregateOutputType | null
    _avg: ShirtModelAvgAggregateOutputType | null
    _sum: ShirtModelSumAggregateOutputType | null
    _min: ShirtModelMinAggregateOutputType | null
    _max: ShirtModelMaxAggregateOutputType | null
  }

  export type ShirtModelAvgAggregateOutputType = {
    price: number | null
  }

  export type ShirtModelSumAggregateOutputType = {
    price: number | null
  }

  export type ShirtModelMinAggregateOutputType = {
    shirtmodelId: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShirtModelMaxAggregateOutputType = {
    shirtmodelId: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShirtModelCountAggregateOutputType = {
    shirtmodelId: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShirtModelAvgAggregateInputType = {
    price?: true
  }

  export type ShirtModelSumAggregateInputType = {
    price?: true
  }

  export type ShirtModelMinAggregateInputType = {
    shirtmodelId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShirtModelMaxAggregateInputType = {
    shirtmodelId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShirtModelCountAggregateInputType = {
    shirtmodelId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShirtModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShirtModel to aggregate.
     */
    where?: ShirtModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShirtModels to fetch.
     */
    orderBy?: ShirtModelOrderByWithRelationInput | ShirtModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShirtModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShirtModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShirtModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShirtModels
    **/
    _count?: true | ShirtModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShirtModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShirtModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShirtModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShirtModelMaxAggregateInputType
  }

  export type GetShirtModelAggregateType<T extends ShirtModelAggregateArgs> = {
        [P in keyof T & keyof AggregateShirtModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShirtModel[P]>
      : GetScalarType<T[P], AggregateShirtModel[P]>
  }




  export type ShirtModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShirtModelWhereInput
    orderBy?: ShirtModelOrderByWithAggregationInput | ShirtModelOrderByWithAggregationInput[]
    by: ShirtModelScalarFieldEnum[] | ShirtModelScalarFieldEnum
    having?: ShirtModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShirtModelCountAggregateInputType | true
    _avg?: ShirtModelAvgAggregateInputType
    _sum?: ShirtModelSumAggregateInputType
    _min?: ShirtModelMinAggregateInputType
    _max?: ShirtModelMaxAggregateInputType
  }

  export type ShirtModelGroupByOutputType = {
    shirtmodelId: string
    name: string
    price: number | null
    createdAt: Date
    updatedAt: Date | null
    _count: ShirtModelCountAggregateOutputType | null
    _avg: ShirtModelAvgAggregateOutputType | null
    _sum: ShirtModelSumAggregateOutputType | null
    _min: ShirtModelMinAggregateOutputType | null
    _max: ShirtModelMaxAggregateOutputType | null
  }

  type GetShirtModelGroupByPayload<T extends ShirtModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShirtModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShirtModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShirtModelGroupByOutputType[P]>
            : GetScalarType<T[P], ShirtModelGroupByOutputType[P]>
        }
      >
    >


  export type ShirtModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtmodelId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OrderItem?: boolean | ShirtModel$OrderItemArgs<ExtArgs>
    _count?: boolean | ShirtModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shirtModel"]>

  export type ShirtModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtmodelId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shirtModel"]>

  export type ShirtModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shirtmodelId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shirtModel"]>

  export type ShirtModelSelectScalar = {
    shirtmodelId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShirtModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shirtmodelId" | "name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["shirtModel"]>
  export type ShirtModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | ShirtModel$OrderItemArgs<ExtArgs>
    _count?: boolean | ShirtModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShirtModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShirtModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShirtModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShirtModel"
    objects: {
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      shirtmodelId: string
      name: string
      price: number | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["shirtModel"]>
    composites: {}
  }

  type ShirtModelGetPayload<S extends boolean | null | undefined | ShirtModelDefaultArgs> = $Result.GetResult<Prisma.$ShirtModelPayload, S>

  type ShirtModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShirtModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShirtModelCountAggregateInputType | true
    }

  export interface ShirtModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShirtModel'], meta: { name: 'ShirtModel' } }
    /**
     * Find zero or one ShirtModel that matches the filter.
     * @param {ShirtModelFindUniqueArgs} args - Arguments to find a ShirtModel
     * @example
     * // Get one ShirtModel
     * const shirtModel = await prisma.shirtModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShirtModelFindUniqueArgs>(args: SelectSubset<T, ShirtModelFindUniqueArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShirtModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShirtModelFindUniqueOrThrowArgs} args - Arguments to find a ShirtModel
     * @example
     * // Get one ShirtModel
     * const shirtModel = await prisma.shirtModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShirtModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ShirtModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShirtModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelFindFirstArgs} args - Arguments to find a ShirtModel
     * @example
     * // Get one ShirtModel
     * const shirtModel = await prisma.shirtModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShirtModelFindFirstArgs>(args?: SelectSubset<T, ShirtModelFindFirstArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShirtModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelFindFirstOrThrowArgs} args - Arguments to find a ShirtModel
     * @example
     * // Get one ShirtModel
     * const shirtModel = await prisma.shirtModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShirtModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ShirtModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShirtModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShirtModels
     * const shirtModels = await prisma.shirtModel.findMany()
     * 
     * // Get first 10 ShirtModels
     * const shirtModels = await prisma.shirtModel.findMany({ take: 10 })
     * 
     * // Only select the `shirtmodelId`
     * const shirtModelWithShirtmodelIdOnly = await prisma.shirtModel.findMany({ select: { shirtmodelId: true } })
     * 
     */
    findMany<T extends ShirtModelFindManyArgs>(args?: SelectSubset<T, ShirtModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShirtModel.
     * @param {ShirtModelCreateArgs} args - Arguments to create a ShirtModel.
     * @example
     * // Create one ShirtModel
     * const ShirtModel = await prisma.shirtModel.create({
     *   data: {
     *     // ... data to create a ShirtModel
     *   }
     * })
     * 
     */
    create<T extends ShirtModelCreateArgs>(args: SelectSubset<T, ShirtModelCreateArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShirtModels.
     * @param {ShirtModelCreateManyArgs} args - Arguments to create many ShirtModels.
     * @example
     * // Create many ShirtModels
     * const shirtModel = await prisma.shirtModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShirtModelCreateManyArgs>(args?: SelectSubset<T, ShirtModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShirtModels and returns the data saved in the database.
     * @param {ShirtModelCreateManyAndReturnArgs} args - Arguments to create many ShirtModels.
     * @example
     * // Create many ShirtModels
     * const shirtModel = await prisma.shirtModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShirtModels and only return the `shirtmodelId`
     * const shirtModelWithShirtmodelIdOnly = await prisma.shirtModel.createManyAndReturn({
     *   select: { shirtmodelId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShirtModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ShirtModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShirtModel.
     * @param {ShirtModelDeleteArgs} args - Arguments to delete one ShirtModel.
     * @example
     * // Delete one ShirtModel
     * const ShirtModel = await prisma.shirtModel.delete({
     *   where: {
     *     // ... filter to delete one ShirtModel
     *   }
     * })
     * 
     */
    delete<T extends ShirtModelDeleteArgs>(args: SelectSubset<T, ShirtModelDeleteArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShirtModel.
     * @param {ShirtModelUpdateArgs} args - Arguments to update one ShirtModel.
     * @example
     * // Update one ShirtModel
     * const shirtModel = await prisma.shirtModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShirtModelUpdateArgs>(args: SelectSubset<T, ShirtModelUpdateArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShirtModels.
     * @param {ShirtModelDeleteManyArgs} args - Arguments to filter ShirtModels to delete.
     * @example
     * // Delete a few ShirtModels
     * const { count } = await prisma.shirtModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShirtModelDeleteManyArgs>(args?: SelectSubset<T, ShirtModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShirtModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShirtModels
     * const shirtModel = await prisma.shirtModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShirtModelUpdateManyArgs>(args: SelectSubset<T, ShirtModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShirtModels and returns the data updated in the database.
     * @param {ShirtModelUpdateManyAndReturnArgs} args - Arguments to update many ShirtModels.
     * @example
     * // Update many ShirtModels
     * const shirtModel = await prisma.shirtModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShirtModels and only return the `shirtmodelId`
     * const shirtModelWithShirtmodelIdOnly = await prisma.shirtModel.updateManyAndReturn({
     *   select: { shirtmodelId: true },
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
    updateManyAndReturn<T extends ShirtModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ShirtModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShirtModel.
     * @param {ShirtModelUpsertArgs} args - Arguments to update or create a ShirtModel.
     * @example
     * // Update or create a ShirtModel
     * const shirtModel = await prisma.shirtModel.upsert({
     *   create: {
     *     // ... data to create a ShirtModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShirtModel we want to update
     *   }
     * })
     */
    upsert<T extends ShirtModelUpsertArgs>(args: SelectSubset<T, ShirtModelUpsertArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShirtModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelCountArgs} args - Arguments to filter ShirtModels to count.
     * @example
     * // Count the number of ShirtModels
     * const count = await prisma.shirtModel.count({
     *   where: {
     *     // ... the filter for the ShirtModels we want to count
     *   }
     * })
    **/
    count<T extends ShirtModelCountArgs>(
      args?: Subset<T, ShirtModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShirtModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShirtModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShirtModelAggregateArgs>(args: Subset<T, ShirtModelAggregateArgs>): Prisma.PrismaPromise<GetShirtModelAggregateType<T>>

    /**
     * Group by ShirtModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShirtModelGroupByArgs} args - Group by arguments.
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
      T extends ShirtModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShirtModelGroupByArgs['orderBy'] }
        : { orderBy?: ShirtModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShirtModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShirtModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShirtModel model
   */
  readonly fields: ShirtModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShirtModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShirtModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItem<T extends ShirtModel$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, ShirtModel$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShirtModel model
   */
  interface ShirtModelFieldRefs {
    readonly shirtmodelId: FieldRef<"ShirtModel", 'String'>
    readonly name: FieldRef<"ShirtModel", 'String'>
    readonly price: FieldRef<"ShirtModel", 'Float'>
    readonly createdAt: FieldRef<"ShirtModel", 'DateTime'>
    readonly updatedAt: FieldRef<"ShirtModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShirtModel findUnique
   */
  export type ShirtModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter, which ShirtModel to fetch.
     */
    where: ShirtModelWhereUniqueInput
  }

  /**
   * ShirtModel findUniqueOrThrow
   */
  export type ShirtModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter, which ShirtModel to fetch.
     */
    where: ShirtModelWhereUniqueInput
  }

  /**
   * ShirtModel findFirst
   */
  export type ShirtModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter, which ShirtModel to fetch.
     */
    where?: ShirtModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShirtModels to fetch.
     */
    orderBy?: ShirtModelOrderByWithRelationInput | ShirtModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShirtModels.
     */
    cursor?: ShirtModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShirtModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShirtModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShirtModels.
     */
    distinct?: ShirtModelScalarFieldEnum | ShirtModelScalarFieldEnum[]
  }

  /**
   * ShirtModel findFirstOrThrow
   */
  export type ShirtModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter, which ShirtModel to fetch.
     */
    where?: ShirtModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShirtModels to fetch.
     */
    orderBy?: ShirtModelOrderByWithRelationInput | ShirtModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShirtModels.
     */
    cursor?: ShirtModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShirtModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShirtModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShirtModels.
     */
    distinct?: ShirtModelScalarFieldEnum | ShirtModelScalarFieldEnum[]
  }

  /**
   * ShirtModel findMany
   */
  export type ShirtModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter, which ShirtModels to fetch.
     */
    where?: ShirtModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShirtModels to fetch.
     */
    orderBy?: ShirtModelOrderByWithRelationInput | ShirtModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShirtModels.
     */
    cursor?: ShirtModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShirtModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShirtModels.
     */
    skip?: number
    distinct?: ShirtModelScalarFieldEnum | ShirtModelScalarFieldEnum[]
  }

  /**
   * ShirtModel create
   */
  export type ShirtModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ShirtModel.
     */
    data: XOR<ShirtModelCreateInput, ShirtModelUncheckedCreateInput>
  }

  /**
   * ShirtModel createMany
   */
  export type ShirtModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShirtModels.
     */
    data: ShirtModelCreateManyInput | ShirtModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShirtModel createManyAndReturn
   */
  export type ShirtModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * The data used to create many ShirtModels.
     */
    data: ShirtModelCreateManyInput | ShirtModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShirtModel update
   */
  export type ShirtModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ShirtModel.
     */
    data: XOR<ShirtModelUpdateInput, ShirtModelUncheckedUpdateInput>
    /**
     * Choose, which ShirtModel to update.
     */
    where: ShirtModelWhereUniqueInput
  }

  /**
   * ShirtModel updateMany
   */
  export type ShirtModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShirtModels.
     */
    data: XOR<ShirtModelUpdateManyMutationInput, ShirtModelUncheckedUpdateManyInput>
    /**
     * Filter which ShirtModels to update
     */
    where?: ShirtModelWhereInput
    /**
     * Limit how many ShirtModels to update.
     */
    limit?: number
  }

  /**
   * ShirtModel updateManyAndReturn
   */
  export type ShirtModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * The data used to update ShirtModels.
     */
    data: XOR<ShirtModelUpdateManyMutationInput, ShirtModelUncheckedUpdateManyInput>
    /**
     * Filter which ShirtModels to update
     */
    where?: ShirtModelWhereInput
    /**
     * Limit how many ShirtModels to update.
     */
    limit?: number
  }

  /**
   * ShirtModel upsert
   */
  export type ShirtModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ShirtModel to update in case it exists.
     */
    where: ShirtModelWhereUniqueInput
    /**
     * In case the ShirtModel found by the `where` argument doesn't exist, create a new ShirtModel with this data.
     */
    create: XOR<ShirtModelCreateInput, ShirtModelUncheckedCreateInput>
    /**
     * In case the ShirtModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShirtModelUpdateInput, ShirtModelUncheckedUpdateInput>
  }

  /**
   * ShirtModel delete
   */
  export type ShirtModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
    /**
     * Filter which ShirtModel to delete.
     */
    where: ShirtModelWhereUniqueInput
  }

  /**
   * ShirtModel deleteMany
   */
  export type ShirtModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShirtModels to delete
     */
    where?: ShirtModelWhereInput
    /**
     * Limit how many ShirtModels to delete.
     */
    limit?: number
  }

  /**
   * ShirtModel.OrderItem
   */
  export type ShirtModel$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ShirtModel without action
   */
  export type ShirtModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShirtModel
     */
    select?: ShirtModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShirtModel
     */
    omit?: ShirtModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShirtModelInclude<ExtArgs> | null
  }


  /**
   * Model UserSaleShirt
   */

  export type AggregateUserSaleShirt = {
    _count: UserSaleShirtCountAggregateOutputType | null
    _avg: UserSaleShirtAvgAggregateOutputType | null
    _sum: UserSaleShirtSumAggregateOutputType | null
    _min: UserSaleShirtMinAggregateOutputType | null
    _max: UserSaleShirtMaxAggregateOutputType | null
  }

  export type UserSaleShirtAvgAggregateOutputType = {
    total_amount: number | null
  }

  export type UserSaleShirtSumAggregateOutputType = {
    total_amount: number | null
  }

  export type UserSaleShirtMinAggregateOutputType = {
    userId: string | null
    fullname: string | null
    phone: string | null
    email: string | null
    sh_collection_method: string | null
    delivery_address: string | null
    total_amount: number | null
    payment: boolean | null
    transferFile: string | null
    ems_tracking: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSaleShirtMaxAggregateOutputType = {
    userId: string | null
    fullname: string | null
    phone: string | null
    email: string | null
    sh_collection_method: string | null
    delivery_address: string | null
    total_amount: number | null
    payment: boolean | null
    transferFile: string | null
    ems_tracking: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSaleShirtCountAggregateOutputType = {
    userId: number
    fullname: number
    phone: number
    email: number
    sh_collection_method: number
    delivery_address: number
    total_amount: number
    payment: number
    transferFile: number
    ems_tracking: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSaleShirtAvgAggregateInputType = {
    total_amount?: true
  }

  export type UserSaleShirtSumAggregateInputType = {
    total_amount?: true
  }

  export type UserSaleShirtMinAggregateInputType = {
    userId?: true
    fullname?: true
    phone?: true
    email?: true
    sh_collection_method?: true
    delivery_address?: true
    total_amount?: true
    payment?: true
    transferFile?: true
    ems_tracking?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSaleShirtMaxAggregateInputType = {
    userId?: true
    fullname?: true
    phone?: true
    email?: true
    sh_collection_method?: true
    delivery_address?: true
    total_amount?: true
    payment?: true
    transferFile?: true
    ems_tracking?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSaleShirtCountAggregateInputType = {
    userId?: true
    fullname?: true
    phone?: true
    email?: true
    sh_collection_method?: true
    delivery_address?: true
    total_amount?: true
    payment?: true
    transferFile?: true
    ems_tracking?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSaleShirtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSaleShirt to aggregate.
     */
    where?: UserSaleShirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSaleShirts to fetch.
     */
    orderBy?: UserSaleShirtOrderByWithRelationInput | UserSaleShirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSaleShirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSaleShirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSaleShirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSaleShirts
    **/
    _count?: true | UserSaleShirtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSaleShirtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSaleShirtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSaleShirtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSaleShirtMaxAggregateInputType
  }

  export type GetUserSaleShirtAggregateType<T extends UserSaleShirtAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSaleShirt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSaleShirt[P]>
      : GetScalarType<T[P], AggregateUserSaleShirt[P]>
  }




  export type UserSaleShirtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSaleShirtWhereInput
    orderBy?: UserSaleShirtOrderByWithAggregationInput | UserSaleShirtOrderByWithAggregationInput[]
    by: UserSaleShirtScalarFieldEnum[] | UserSaleShirtScalarFieldEnum
    having?: UserSaleShirtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSaleShirtCountAggregateInputType | true
    _avg?: UserSaleShirtAvgAggregateInputType
    _sum?: UserSaleShirtSumAggregateInputType
    _min?: UserSaleShirtMinAggregateInputType
    _max?: UserSaleShirtMaxAggregateInputType
  }

  export type UserSaleShirtGroupByOutputType = {
    userId: string
    fullname: string
    phone: string
    email: string
    sh_collection_method: string
    delivery_address: string | null
    total_amount: number
    payment: boolean
    transferFile: string
    ems_tracking: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: UserSaleShirtCountAggregateOutputType | null
    _avg: UserSaleShirtAvgAggregateOutputType | null
    _sum: UserSaleShirtSumAggregateOutputType | null
    _min: UserSaleShirtMinAggregateOutputType | null
    _max: UserSaleShirtMaxAggregateOutputType | null
  }

  type GetUserSaleShirtGroupByPayload<T extends UserSaleShirtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSaleShirtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSaleShirtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSaleShirtGroupByOutputType[P]>
            : GetScalarType<T[P], UserSaleShirtGroupByOutputType[P]>
        }
      >
    >


  export type UserSaleShirtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    sh_collection_method?: boolean
    delivery_address?: boolean
    total_amount?: boolean
    payment?: boolean
    transferFile?: boolean
    ems_tracking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OrderItem?: boolean | UserSaleShirt$OrderItemArgs<ExtArgs>
    _count?: boolean | UserSaleShirtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSaleShirt"]>

  export type UserSaleShirtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    sh_collection_method?: boolean
    delivery_address?: boolean
    total_amount?: boolean
    payment?: boolean
    transferFile?: boolean
    ems_tracking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSaleShirt"]>

  export type UserSaleShirtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    sh_collection_method?: boolean
    delivery_address?: boolean
    total_amount?: boolean
    payment?: boolean
    transferFile?: boolean
    ems_tracking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSaleShirt"]>

  export type UserSaleShirtSelectScalar = {
    userId?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    sh_collection_method?: boolean
    delivery_address?: boolean
    total_amount?: boolean
    payment?: boolean
    transferFile?: boolean
    ems_tracking?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSaleShirtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullname" | "phone" | "email" | "sh_collection_method" | "delivery_address" | "total_amount" | "payment" | "transferFile" | "ems_tracking" | "createdAt" | "updatedAt", ExtArgs["result"]["userSaleShirt"]>
  export type UserSaleShirtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderItem?: boolean | UserSaleShirt$OrderItemArgs<ExtArgs>
    _count?: boolean | UserSaleShirtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSaleShirtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSaleShirtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSaleShirtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSaleShirt"
    objects: {
      OrderItem: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullname: string
      phone: string
      email: string
      sh_collection_method: string
      delivery_address: string | null
      total_amount: number
      payment: boolean
      transferFile: string
      ems_tracking: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["userSaleShirt"]>
    composites: {}
  }

  type UserSaleShirtGetPayload<S extends boolean | null | undefined | UserSaleShirtDefaultArgs> = $Result.GetResult<Prisma.$UserSaleShirtPayload, S>

  type UserSaleShirtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSaleShirtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSaleShirtCountAggregateInputType | true
    }

  export interface UserSaleShirtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSaleShirt'], meta: { name: 'UserSaleShirt' } }
    /**
     * Find zero or one UserSaleShirt that matches the filter.
     * @param {UserSaleShirtFindUniqueArgs} args - Arguments to find a UserSaleShirt
     * @example
     * // Get one UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSaleShirtFindUniqueArgs>(args: SelectSubset<T, UserSaleShirtFindUniqueArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSaleShirt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSaleShirtFindUniqueOrThrowArgs} args - Arguments to find a UserSaleShirt
     * @example
     * // Get one UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSaleShirtFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSaleShirtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSaleShirt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtFindFirstArgs} args - Arguments to find a UserSaleShirt
     * @example
     * // Get one UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSaleShirtFindFirstArgs>(args?: SelectSubset<T, UserSaleShirtFindFirstArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSaleShirt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtFindFirstOrThrowArgs} args - Arguments to find a UserSaleShirt
     * @example
     * // Get one UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSaleShirtFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSaleShirtFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSaleShirts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSaleShirts
     * const userSaleShirts = await prisma.userSaleShirt.findMany()
     * 
     * // Get first 10 UserSaleShirts
     * const userSaleShirts = await prisma.userSaleShirt.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSaleShirtWithUserIdOnly = await prisma.userSaleShirt.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserSaleShirtFindManyArgs>(args?: SelectSubset<T, UserSaleShirtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSaleShirt.
     * @param {UserSaleShirtCreateArgs} args - Arguments to create a UserSaleShirt.
     * @example
     * // Create one UserSaleShirt
     * const UserSaleShirt = await prisma.userSaleShirt.create({
     *   data: {
     *     // ... data to create a UserSaleShirt
     *   }
     * })
     * 
     */
    create<T extends UserSaleShirtCreateArgs>(args: SelectSubset<T, UserSaleShirtCreateArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSaleShirts.
     * @param {UserSaleShirtCreateManyArgs} args - Arguments to create many UserSaleShirts.
     * @example
     * // Create many UserSaleShirts
     * const userSaleShirt = await prisma.userSaleShirt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSaleShirtCreateManyArgs>(args?: SelectSubset<T, UserSaleShirtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSaleShirts and returns the data saved in the database.
     * @param {UserSaleShirtCreateManyAndReturnArgs} args - Arguments to create many UserSaleShirts.
     * @example
     * // Create many UserSaleShirts
     * const userSaleShirt = await prisma.userSaleShirt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSaleShirts and only return the `userId`
     * const userSaleShirtWithUserIdOnly = await prisma.userSaleShirt.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSaleShirtCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSaleShirtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSaleShirt.
     * @param {UserSaleShirtDeleteArgs} args - Arguments to delete one UserSaleShirt.
     * @example
     * // Delete one UserSaleShirt
     * const UserSaleShirt = await prisma.userSaleShirt.delete({
     *   where: {
     *     // ... filter to delete one UserSaleShirt
     *   }
     * })
     * 
     */
    delete<T extends UserSaleShirtDeleteArgs>(args: SelectSubset<T, UserSaleShirtDeleteArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSaleShirt.
     * @param {UserSaleShirtUpdateArgs} args - Arguments to update one UserSaleShirt.
     * @example
     * // Update one UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSaleShirtUpdateArgs>(args: SelectSubset<T, UserSaleShirtUpdateArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSaleShirts.
     * @param {UserSaleShirtDeleteManyArgs} args - Arguments to filter UserSaleShirts to delete.
     * @example
     * // Delete a few UserSaleShirts
     * const { count } = await prisma.userSaleShirt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSaleShirtDeleteManyArgs>(args?: SelectSubset<T, UserSaleShirtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSaleShirts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSaleShirts
     * const userSaleShirt = await prisma.userSaleShirt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSaleShirtUpdateManyArgs>(args: SelectSubset<T, UserSaleShirtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSaleShirts and returns the data updated in the database.
     * @param {UserSaleShirtUpdateManyAndReturnArgs} args - Arguments to update many UserSaleShirts.
     * @example
     * // Update many UserSaleShirts
     * const userSaleShirt = await prisma.userSaleShirt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSaleShirts and only return the `userId`
     * const userSaleShirtWithUserIdOnly = await prisma.userSaleShirt.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserSaleShirtUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSaleShirtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSaleShirt.
     * @param {UserSaleShirtUpsertArgs} args - Arguments to update or create a UserSaleShirt.
     * @example
     * // Update or create a UserSaleShirt
     * const userSaleShirt = await prisma.userSaleShirt.upsert({
     *   create: {
     *     // ... data to create a UserSaleShirt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSaleShirt we want to update
     *   }
     * })
     */
    upsert<T extends UserSaleShirtUpsertArgs>(args: SelectSubset<T, UserSaleShirtUpsertArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSaleShirts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtCountArgs} args - Arguments to filter UserSaleShirts to count.
     * @example
     * // Count the number of UserSaleShirts
     * const count = await prisma.userSaleShirt.count({
     *   where: {
     *     // ... the filter for the UserSaleShirts we want to count
     *   }
     * })
    **/
    count<T extends UserSaleShirtCountArgs>(
      args?: Subset<T, UserSaleShirtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSaleShirtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSaleShirt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSaleShirtAggregateArgs>(args: Subset<T, UserSaleShirtAggregateArgs>): Prisma.PrismaPromise<GetUserSaleShirtAggregateType<T>>

    /**
     * Group by UserSaleShirt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSaleShirtGroupByArgs} args - Group by arguments.
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
      T extends UserSaleShirtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSaleShirtGroupByArgs['orderBy'] }
        : { orderBy?: UserSaleShirtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSaleShirtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSaleShirtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSaleShirt model
   */
  readonly fields: UserSaleShirtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSaleShirt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSaleShirtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderItem<T extends UserSaleShirt$OrderItemArgs<ExtArgs> = {}>(args?: Subset<T, UserSaleShirt$OrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserSaleShirt model
   */
  interface UserSaleShirtFieldRefs {
    readonly userId: FieldRef<"UserSaleShirt", 'String'>
    readonly fullname: FieldRef<"UserSaleShirt", 'String'>
    readonly phone: FieldRef<"UserSaleShirt", 'String'>
    readonly email: FieldRef<"UserSaleShirt", 'String'>
    readonly sh_collection_method: FieldRef<"UserSaleShirt", 'String'>
    readonly delivery_address: FieldRef<"UserSaleShirt", 'String'>
    readonly total_amount: FieldRef<"UserSaleShirt", 'Float'>
    readonly payment: FieldRef<"UserSaleShirt", 'Boolean'>
    readonly transferFile: FieldRef<"UserSaleShirt", 'String'>
    readonly ems_tracking: FieldRef<"UserSaleShirt", 'String'>
    readonly createdAt: FieldRef<"UserSaleShirt", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSaleShirt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSaleShirt findUnique
   */
  export type UserSaleShirtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter, which UserSaleShirt to fetch.
     */
    where: UserSaleShirtWhereUniqueInput
  }

  /**
   * UserSaleShirt findUniqueOrThrow
   */
  export type UserSaleShirtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter, which UserSaleShirt to fetch.
     */
    where: UserSaleShirtWhereUniqueInput
  }

  /**
   * UserSaleShirt findFirst
   */
  export type UserSaleShirtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter, which UserSaleShirt to fetch.
     */
    where?: UserSaleShirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSaleShirts to fetch.
     */
    orderBy?: UserSaleShirtOrderByWithRelationInput | UserSaleShirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSaleShirts.
     */
    cursor?: UserSaleShirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSaleShirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSaleShirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSaleShirts.
     */
    distinct?: UserSaleShirtScalarFieldEnum | UserSaleShirtScalarFieldEnum[]
  }

  /**
   * UserSaleShirt findFirstOrThrow
   */
  export type UserSaleShirtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter, which UserSaleShirt to fetch.
     */
    where?: UserSaleShirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSaleShirts to fetch.
     */
    orderBy?: UserSaleShirtOrderByWithRelationInput | UserSaleShirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSaleShirts.
     */
    cursor?: UserSaleShirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSaleShirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSaleShirts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSaleShirts.
     */
    distinct?: UserSaleShirtScalarFieldEnum | UserSaleShirtScalarFieldEnum[]
  }

  /**
   * UserSaleShirt findMany
   */
  export type UserSaleShirtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter, which UserSaleShirts to fetch.
     */
    where?: UserSaleShirtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSaleShirts to fetch.
     */
    orderBy?: UserSaleShirtOrderByWithRelationInput | UserSaleShirtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSaleShirts.
     */
    cursor?: UserSaleShirtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSaleShirts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSaleShirts.
     */
    skip?: number
    distinct?: UserSaleShirtScalarFieldEnum | UserSaleShirtScalarFieldEnum[]
  }

  /**
   * UserSaleShirt create
   */
  export type UserSaleShirtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSaleShirt.
     */
    data: XOR<UserSaleShirtCreateInput, UserSaleShirtUncheckedCreateInput>
  }

  /**
   * UserSaleShirt createMany
   */
  export type UserSaleShirtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSaleShirts.
     */
    data: UserSaleShirtCreateManyInput | UserSaleShirtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSaleShirt createManyAndReturn
   */
  export type UserSaleShirtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * The data used to create many UserSaleShirts.
     */
    data: UserSaleShirtCreateManyInput | UserSaleShirtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSaleShirt update
   */
  export type UserSaleShirtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSaleShirt.
     */
    data: XOR<UserSaleShirtUpdateInput, UserSaleShirtUncheckedUpdateInput>
    /**
     * Choose, which UserSaleShirt to update.
     */
    where: UserSaleShirtWhereUniqueInput
  }

  /**
   * UserSaleShirt updateMany
   */
  export type UserSaleShirtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSaleShirts.
     */
    data: XOR<UserSaleShirtUpdateManyMutationInput, UserSaleShirtUncheckedUpdateManyInput>
    /**
     * Filter which UserSaleShirts to update
     */
    where?: UserSaleShirtWhereInput
    /**
     * Limit how many UserSaleShirts to update.
     */
    limit?: number
  }

  /**
   * UserSaleShirt updateManyAndReturn
   */
  export type UserSaleShirtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * The data used to update UserSaleShirts.
     */
    data: XOR<UserSaleShirtUpdateManyMutationInput, UserSaleShirtUncheckedUpdateManyInput>
    /**
     * Filter which UserSaleShirts to update
     */
    where?: UserSaleShirtWhereInput
    /**
     * Limit how many UserSaleShirts to update.
     */
    limit?: number
  }

  /**
   * UserSaleShirt upsert
   */
  export type UserSaleShirtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSaleShirt to update in case it exists.
     */
    where: UserSaleShirtWhereUniqueInput
    /**
     * In case the UserSaleShirt found by the `where` argument doesn't exist, create a new UserSaleShirt with this data.
     */
    create: XOR<UserSaleShirtCreateInput, UserSaleShirtUncheckedCreateInput>
    /**
     * In case the UserSaleShirt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSaleShirtUpdateInput, UserSaleShirtUncheckedUpdateInput>
  }

  /**
   * UserSaleShirt delete
   */
  export type UserSaleShirtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
    /**
     * Filter which UserSaleShirt to delete.
     */
    where: UserSaleShirtWhereUniqueInput
  }

  /**
   * UserSaleShirt deleteMany
   */
  export type UserSaleShirtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSaleShirts to delete
     */
    where?: UserSaleShirtWhereInput
    /**
     * Limit how many UserSaleShirts to delete.
     */
    limit?: number
  }

  /**
   * UserSaleShirt.OrderItem
   */
  export type UserSaleShirt$OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * UserSaleShirt without action
   */
  export type UserSaleShirtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSaleShirt
     */
    select?: UserSaleShirtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSaleShirt
     */
    omit?: UserSaleShirtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSaleShirtInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemMinAggregateOutputType = {
    orderId: string | null
    userSaleshirtId: string | null
    shirtmodelId: string | null
    sizeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    orderId: string | null
    userSaleshirtId: string | null
    shirtmodelId: string | null
    sizeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    orderId: number
    userSaleshirtId: number
    shirtmodelId: number
    sizeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemMinAggregateInputType = {
    orderId?: true
    userSaleshirtId?: true
    shirtmodelId?: true
    sizeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    orderId?: true
    userSaleshirtId?: true
    shirtmodelId?: true
    sizeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    orderId?: true
    userSaleshirtId?: true
    shirtmodelId?: true
    sizeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    orderId: string
    userSaleshirtId: string
    shirtmodelId: string
    sizeId: string
    createdAt: Date
    updatedAt: Date | null
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userSaleshirtId?: boolean
    shirtmodelId?: boolean
    sizeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userSaleshirtId?: boolean
    shirtmodelId?: boolean
    sizeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userSaleshirtId?: boolean
    shirtmodelId?: boolean
    sizeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    orderId?: boolean
    userSaleshirtId?: boolean
    shirtmodelId?: boolean
    sizeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "userSaleshirtId" | "shirtmodelId" | "sizeId" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSaleshirt?: boolean | UserSaleShirtDefaultArgs<ExtArgs>
    shirtmodel?: boolean | ShirtModelDefaultArgs<ExtArgs>
    size?: boolean | Size_shirtDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      userSaleshirt: Prisma.$UserSaleShirtPayload<ExtArgs>
      shirtmodel: Prisma.$ShirtModelPayload<ExtArgs>
      size: Prisma.$Size_shirtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      userSaleshirtId: string
      shirtmodelId: string
      sizeId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderItemWithOrderIdOnly = await prisma.orderItem.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `orderId`
     * const orderItemWithOrderIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `orderId`
     * const orderItemWithOrderIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { orderId: true },
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSaleshirt<T extends UserSaleShirtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSaleShirtDefaultArgs<ExtArgs>>): Prisma__UserSaleShirtClient<$Result.GetResult<Prisma.$UserSaleShirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shirtmodel<T extends ShirtModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShirtModelDefaultArgs<ExtArgs>>): Prisma__ShirtModelClient<$Result.GetResult<Prisma.$ShirtModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size<T extends Size_shirtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Size_shirtDefaultArgs<ExtArgs>>): Prisma__Size_shirtClient<$Result.GetResult<Prisma.$Size_shirtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly userSaleshirtId: FieldRef<"OrderItem", 'String'>
    readonly shirtmodelId: FieldRef<"OrderItem", 'String'>
    readonly sizeId: FieldRef<"OrderItem", 'String'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model CheckPoint
   */

  export type AggregateCheckPoint = {
    _count: CheckPointCountAggregateOutputType | null
    _min: CheckPointMinAggregateOutputType | null
    _max: CheckPointMaxAggregateOutputType | null
  }

  export type CheckPointMinAggregateOutputType = {
    checkPointId: string | null
    checkPoint: boolean | null
    participantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckPointMaxAggregateOutputType = {
    checkPointId: string | null
    checkPoint: boolean | null
    participantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckPointCountAggregateOutputType = {
    checkPointId: number
    checkPoint: number
    participantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CheckPointMinAggregateInputType = {
    checkPointId?: true
    checkPoint?: true
    participantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckPointMaxAggregateInputType = {
    checkPointId?: true
    checkPoint?: true
    participantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckPointCountAggregateInputType = {
    checkPointId?: true
    checkPoint?: true
    participantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CheckPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckPoint to aggregate.
     */
    where?: CheckPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckPoints to fetch.
     */
    orderBy?: CheckPointOrderByWithRelationInput | CheckPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckPoints
    **/
    _count?: true | CheckPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckPointMaxAggregateInputType
  }

  export type GetCheckPointAggregateType<T extends CheckPointAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckPoint[P]>
      : GetScalarType<T[P], AggregateCheckPoint[P]>
  }




  export type CheckPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckPointWhereInput
    orderBy?: CheckPointOrderByWithAggregationInput | CheckPointOrderByWithAggregationInput[]
    by: CheckPointScalarFieldEnum[] | CheckPointScalarFieldEnum
    having?: CheckPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckPointCountAggregateInputType | true
    _min?: CheckPointMinAggregateInputType
    _max?: CheckPointMaxAggregateInputType
  }

  export type CheckPointGroupByOutputType = {
    checkPointId: string
    checkPoint: boolean
    participantId: string
    createdAt: Date
    updatedAt: Date | null
    _count: CheckPointCountAggregateOutputType | null
    _min: CheckPointMinAggregateOutputType | null
    _max: CheckPointMaxAggregateOutputType | null
  }

  type GetCheckPointGroupByPayload<T extends CheckPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckPointGroupByOutputType[P]>
            : GetScalarType<T[P], CheckPointGroupByOutputType[P]>
        }
      >
    >


  export type CheckPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkPointId?: boolean
    checkPoint?: boolean
    participantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkPoint"]>

  export type CheckPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkPointId?: boolean
    checkPoint?: boolean
    participantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkPoint"]>

  export type CheckPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    checkPointId?: boolean
    checkPoint?: boolean
    participantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkPoint"]>

  export type CheckPointSelectScalar = {
    checkPointId?: boolean
    checkPoint?: boolean
    participantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CheckPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"checkPointId" | "checkPoint" | "participantId" | "createdAt" | "updatedAt", ExtArgs["result"]["checkPoint"]>
  export type CheckPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type CheckPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type CheckPointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $CheckPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckPoint"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      checkPointId: string
      checkPoint: boolean
      participantId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["checkPoint"]>
    composites: {}
  }

  type CheckPointGetPayload<S extends boolean | null | undefined | CheckPointDefaultArgs> = $Result.GetResult<Prisma.$CheckPointPayload, S>

  type CheckPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckPointCountAggregateInputType | true
    }

  export interface CheckPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckPoint'], meta: { name: 'CheckPoint' } }
    /**
     * Find zero or one CheckPoint that matches the filter.
     * @param {CheckPointFindUniqueArgs} args - Arguments to find a CheckPoint
     * @example
     * // Get one CheckPoint
     * const checkPoint = await prisma.checkPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckPointFindUniqueArgs>(args: SelectSubset<T, CheckPointFindUniqueArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckPointFindUniqueOrThrowArgs} args - Arguments to find a CheckPoint
     * @example
     * // Get one CheckPoint
     * const checkPoint = await prisma.checkPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckPointFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointFindFirstArgs} args - Arguments to find a CheckPoint
     * @example
     * // Get one CheckPoint
     * const checkPoint = await prisma.checkPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckPointFindFirstArgs>(args?: SelectSubset<T, CheckPointFindFirstArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointFindFirstOrThrowArgs} args - Arguments to find a CheckPoint
     * @example
     * // Get one CheckPoint
     * const checkPoint = await prisma.checkPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckPointFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckPoints
     * const checkPoints = await prisma.checkPoint.findMany()
     * 
     * // Get first 10 CheckPoints
     * const checkPoints = await prisma.checkPoint.findMany({ take: 10 })
     * 
     * // Only select the `checkPointId`
     * const checkPointWithCheckPointIdOnly = await prisma.checkPoint.findMany({ select: { checkPointId: true } })
     * 
     */
    findMany<T extends CheckPointFindManyArgs>(args?: SelectSubset<T, CheckPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckPoint.
     * @param {CheckPointCreateArgs} args - Arguments to create a CheckPoint.
     * @example
     * // Create one CheckPoint
     * const CheckPoint = await prisma.checkPoint.create({
     *   data: {
     *     // ... data to create a CheckPoint
     *   }
     * })
     * 
     */
    create<T extends CheckPointCreateArgs>(args: SelectSubset<T, CheckPointCreateArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckPoints.
     * @param {CheckPointCreateManyArgs} args - Arguments to create many CheckPoints.
     * @example
     * // Create many CheckPoints
     * const checkPoint = await prisma.checkPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckPointCreateManyArgs>(args?: SelectSubset<T, CheckPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckPoints and returns the data saved in the database.
     * @param {CheckPointCreateManyAndReturnArgs} args - Arguments to create many CheckPoints.
     * @example
     * // Create many CheckPoints
     * const checkPoint = await prisma.checkPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckPoints and only return the `checkPointId`
     * const checkPointWithCheckPointIdOnly = await prisma.checkPoint.createManyAndReturn({
     *   select: { checkPointId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckPointCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckPoint.
     * @param {CheckPointDeleteArgs} args - Arguments to delete one CheckPoint.
     * @example
     * // Delete one CheckPoint
     * const CheckPoint = await prisma.checkPoint.delete({
     *   where: {
     *     // ... filter to delete one CheckPoint
     *   }
     * })
     * 
     */
    delete<T extends CheckPointDeleteArgs>(args: SelectSubset<T, CheckPointDeleteArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckPoint.
     * @param {CheckPointUpdateArgs} args - Arguments to update one CheckPoint.
     * @example
     * // Update one CheckPoint
     * const checkPoint = await prisma.checkPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckPointUpdateArgs>(args: SelectSubset<T, CheckPointUpdateArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckPoints.
     * @param {CheckPointDeleteManyArgs} args - Arguments to filter CheckPoints to delete.
     * @example
     * // Delete a few CheckPoints
     * const { count } = await prisma.checkPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckPointDeleteManyArgs>(args?: SelectSubset<T, CheckPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckPoints
     * const checkPoint = await prisma.checkPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckPointUpdateManyArgs>(args: SelectSubset<T, CheckPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckPoints and returns the data updated in the database.
     * @param {CheckPointUpdateManyAndReturnArgs} args - Arguments to update many CheckPoints.
     * @example
     * // Update many CheckPoints
     * const checkPoint = await prisma.checkPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckPoints and only return the `checkPointId`
     * const checkPointWithCheckPointIdOnly = await prisma.checkPoint.updateManyAndReturn({
     *   select: { checkPointId: true },
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
    updateManyAndReturn<T extends CheckPointUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckPoint.
     * @param {CheckPointUpsertArgs} args - Arguments to update or create a CheckPoint.
     * @example
     * // Update or create a CheckPoint
     * const checkPoint = await prisma.checkPoint.upsert({
     *   create: {
     *     // ... data to create a CheckPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckPoint we want to update
     *   }
     * })
     */
    upsert<T extends CheckPointUpsertArgs>(args: SelectSubset<T, CheckPointUpsertArgs<ExtArgs>>): Prisma__CheckPointClient<$Result.GetResult<Prisma.$CheckPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointCountArgs} args - Arguments to filter CheckPoints to count.
     * @example
     * // Count the number of CheckPoints
     * const count = await prisma.checkPoint.count({
     *   where: {
     *     // ... the filter for the CheckPoints we want to count
     *   }
     * })
    **/
    count<T extends CheckPointCountArgs>(
      args?: Subset<T, CheckPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckPointAggregateArgs>(args: Subset<T, CheckPointAggregateArgs>): Prisma.PrismaPromise<GetCheckPointAggregateType<T>>

    /**
     * Group by CheckPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckPointGroupByArgs} args - Group by arguments.
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
      T extends CheckPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckPointGroupByArgs['orderBy'] }
        : { orderBy?: CheckPointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckPoint model
   */
  readonly fields: CheckPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckPoint model
   */
  interface CheckPointFieldRefs {
    readonly checkPointId: FieldRef<"CheckPoint", 'String'>
    readonly checkPoint: FieldRef<"CheckPoint", 'Boolean'>
    readonly participantId: FieldRef<"CheckPoint", 'String'>
    readonly createdAt: FieldRef<"CheckPoint", 'DateTime'>
    readonly updatedAt: FieldRef<"CheckPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckPoint findUnique
   */
  export type CheckPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter, which CheckPoint to fetch.
     */
    where: CheckPointWhereUniqueInput
  }

  /**
   * CheckPoint findUniqueOrThrow
   */
  export type CheckPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter, which CheckPoint to fetch.
     */
    where: CheckPointWhereUniqueInput
  }

  /**
   * CheckPoint findFirst
   */
  export type CheckPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter, which CheckPoint to fetch.
     */
    where?: CheckPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckPoints to fetch.
     */
    orderBy?: CheckPointOrderByWithRelationInput | CheckPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckPoints.
     */
    cursor?: CheckPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckPoints.
     */
    distinct?: CheckPointScalarFieldEnum | CheckPointScalarFieldEnum[]
  }

  /**
   * CheckPoint findFirstOrThrow
   */
  export type CheckPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter, which CheckPoint to fetch.
     */
    where?: CheckPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckPoints to fetch.
     */
    orderBy?: CheckPointOrderByWithRelationInput | CheckPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckPoints.
     */
    cursor?: CheckPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckPoints.
     */
    distinct?: CheckPointScalarFieldEnum | CheckPointScalarFieldEnum[]
  }

  /**
   * CheckPoint findMany
   */
  export type CheckPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter, which CheckPoints to fetch.
     */
    where?: CheckPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckPoints to fetch.
     */
    orderBy?: CheckPointOrderByWithRelationInput | CheckPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckPoints.
     */
    cursor?: CheckPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckPoints.
     */
    skip?: number
    distinct?: CheckPointScalarFieldEnum | CheckPointScalarFieldEnum[]
  }

  /**
   * CheckPoint create
   */
  export type CheckPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckPoint.
     */
    data: XOR<CheckPointCreateInput, CheckPointUncheckedCreateInput>
  }

  /**
   * CheckPoint createMany
   */
  export type CheckPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckPoints.
     */
    data: CheckPointCreateManyInput | CheckPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckPoint createManyAndReturn
   */
  export type CheckPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * The data used to create many CheckPoints.
     */
    data: CheckPointCreateManyInput | CheckPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckPoint update
   */
  export type CheckPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckPoint.
     */
    data: XOR<CheckPointUpdateInput, CheckPointUncheckedUpdateInput>
    /**
     * Choose, which CheckPoint to update.
     */
    where: CheckPointWhereUniqueInput
  }

  /**
   * CheckPoint updateMany
   */
  export type CheckPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckPoints.
     */
    data: XOR<CheckPointUpdateManyMutationInput, CheckPointUncheckedUpdateManyInput>
    /**
     * Filter which CheckPoints to update
     */
    where?: CheckPointWhereInput
    /**
     * Limit how many CheckPoints to update.
     */
    limit?: number
  }

  /**
   * CheckPoint updateManyAndReturn
   */
  export type CheckPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * The data used to update CheckPoints.
     */
    data: XOR<CheckPointUpdateManyMutationInput, CheckPointUncheckedUpdateManyInput>
    /**
     * Filter which CheckPoints to update
     */
    where?: CheckPointWhereInput
    /**
     * Limit how many CheckPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckPoint upsert
   */
  export type CheckPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckPoint to update in case it exists.
     */
    where: CheckPointWhereUniqueInput
    /**
     * In case the CheckPoint found by the `where` argument doesn't exist, create a new CheckPoint with this data.
     */
    create: XOR<CheckPointCreateInput, CheckPointUncheckedCreateInput>
    /**
     * In case the CheckPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckPointUpdateInput, CheckPointUncheckedUpdateInput>
  }

  /**
   * CheckPoint delete
   */
  export type CheckPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
    /**
     * Filter which CheckPoint to delete.
     */
    where: CheckPointWhereUniqueInput
  }

  /**
   * CheckPoint deleteMany
   */
  export type CheckPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckPoints to delete
     */
    where?: CheckPointWhereInput
    /**
     * Limit how many CheckPoints to delete.
     */
    limit?: number
  }

  /**
   * CheckPoint without action
   */
  export type CheckPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckPoint
     */
    select?: CheckPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckPoint
     */
    omit?: CheckPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckPointInclude<ExtArgs> | null
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


  export const OptionScalarFieldEnum: {
    optionId: 'optionId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    limit: 'limit'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const Size_shirtScalarFieldEnum: {
    shirtId: 'shirtId',
    size: 'size',
    s_width: 's_width',
    s_high: 's_high',
    createdAt: 'createdAt',
    point: 'point',
    updatedAt: 'updatedAt'
  };

  export type Size_shirtScalarFieldEnum = (typeof Size_shirtScalarFieldEnum)[keyof typeof Size_shirtScalarFieldEnum]


  export const Bib_sequenceScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    current_value: 'current_value',
    max_value: 'max_value'
  };

  export type Bib_sequenceScalarFieldEnum = (typeof Bib_sequenceScalarFieldEnum)[keyof typeof Bib_sequenceScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    participantId: 'participantId',
    nameBib: 'nameBib',
    numberBib: 'numberBib',
    payment: 'payment',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    sex: 'sex',
    age: 'age',
    sizeId: 'sizeId',
    transferFile: 'transferFile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    year: 'year',
    address: 'address',
    typeBib: 'typeBib'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    animalId: 'animalId',
    name: 'name',
    weight: 'weight',
    sex: 'sex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    participantId: 'participantId',
    fancys: 'fancys',
    breed: 'breed'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const SponsorScalarFieldEnum: {
    sponsorId: 'sponsorId',
    name: 'name',
    image: 'image',
    link: 'link',
    price: 'price',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SponsorScalarFieldEnum = (typeof SponsorScalarFieldEnum)[keyof typeof SponsorScalarFieldEnum]


  export const Items_vipScalarFieldEnum: {
    itemId: 'itemId',
    participantId: 'participantId',
    sizeId: 'sizeId',
    items: 'items',
    model_shirt: 'model_shirt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Items_vipScalarFieldEnum = (typeof Items_vipScalarFieldEnum)[keyof typeof Items_vipScalarFieldEnum]


  export const ShirtModelScalarFieldEnum: {
    shirtmodelId: 'shirtmodelId',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShirtModelScalarFieldEnum = (typeof ShirtModelScalarFieldEnum)[keyof typeof ShirtModelScalarFieldEnum]


  export const UserSaleShirtScalarFieldEnum: {
    userId: 'userId',
    fullname: 'fullname',
    phone: 'phone',
    email: 'email',
    sh_collection_method: 'sh_collection_method',
    delivery_address: 'delivery_address',
    total_amount: 'total_amount',
    payment: 'payment',
    transferFile: 'transferFile',
    ems_tracking: 'ems_tracking',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSaleShirtScalarFieldEnum = (typeof UserSaleShirtScalarFieldEnum)[keyof typeof UserSaleShirtScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    orderId: 'orderId',
    userSaleshirtId: 'userSaleshirtId',
    shirtmodelId: 'shirtmodelId',
    sizeId: 'sizeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const CheckPointScalarFieldEnum: {
    checkPointId: 'checkPointId',
    checkPoint: 'checkPoint',
    participantId: 'participantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CheckPointScalarFieldEnum = (typeof CheckPointScalarFieldEnum)[keyof typeof CheckPointScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Types'
   */
  export type EnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types'>
    


  /**
   * Reference to a field of type 'Types[]'
   */
  export type ListEnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types[]'>
    


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


  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    optionId?: UuidFilter<"Option"> | string
    name?: StringFilter<"Option"> | string
    createdAt?: DateTimeFilter<"Option"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Option"> | Date | string | null
    limit?: IntFilter<"Option"> | number
  }

  export type OptionOrderByWithRelationInput = {
    optionId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    limit?: SortOrder
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    optionId?: string
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    name?: StringFilter<"Option"> | string
    createdAt?: DateTimeFilter<"Option"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Option"> | Date | string | null
    limit?: IntFilter<"Option"> | number
  }, "optionId">

  export type OptionOrderByWithAggregationInput = {
    optionId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    limit?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    optionId?: UuidWithAggregatesFilter<"Option"> | string
    name?: StringWithAggregatesFilter<"Option"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Option"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Option"> | Date | string | null
    limit?: IntWithAggregatesFilter<"Option"> | number
  }

  export type Size_shirtWhereInput = {
    AND?: Size_shirtWhereInput | Size_shirtWhereInput[]
    OR?: Size_shirtWhereInput[]
    NOT?: Size_shirtWhereInput | Size_shirtWhereInput[]
    shirtId?: UuidFilter<"Size_shirt"> | string
    size?: StringFilter<"Size_shirt"> | string
    s_width?: IntFilter<"Size_shirt"> | number
    s_high?: IntFilter<"Size_shirt"> | number
    createdAt?: DateTimeFilter<"Size_shirt"> | Date | string
    point?: IntNullableFilter<"Size_shirt"> | number | null
    updatedAt?: DateTimeNullableFilter<"Size_shirt"> | Date | string | null
    participant?: ParticipantListRelationFilter
    Items_vip?: Items_vipListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }

  export type Size_shirtOrderByWithRelationInput = {
    shirtId?: SortOrder
    size?: SortOrder
    s_width?: SortOrder
    s_high?: SortOrder
    createdAt?: SortOrder
    point?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participant?: ParticipantOrderByRelationAggregateInput
    Items_vip?: Items_vipOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type Size_shirtWhereUniqueInput = Prisma.AtLeast<{
    shirtId?: string
    AND?: Size_shirtWhereInput | Size_shirtWhereInput[]
    OR?: Size_shirtWhereInput[]
    NOT?: Size_shirtWhereInput | Size_shirtWhereInput[]
    size?: StringFilter<"Size_shirt"> | string
    s_width?: IntFilter<"Size_shirt"> | number
    s_high?: IntFilter<"Size_shirt"> | number
    createdAt?: DateTimeFilter<"Size_shirt"> | Date | string
    point?: IntNullableFilter<"Size_shirt"> | number | null
    updatedAt?: DateTimeNullableFilter<"Size_shirt"> | Date | string | null
    participant?: ParticipantListRelationFilter
    Items_vip?: Items_vipListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }, "shirtId">

  export type Size_shirtOrderByWithAggregationInput = {
    shirtId?: SortOrder
    size?: SortOrder
    s_width?: SortOrder
    s_high?: SortOrder
    createdAt?: SortOrder
    point?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: Size_shirtCountOrderByAggregateInput
    _avg?: Size_shirtAvgOrderByAggregateInput
    _max?: Size_shirtMaxOrderByAggregateInput
    _min?: Size_shirtMinOrderByAggregateInput
    _sum?: Size_shirtSumOrderByAggregateInput
  }

  export type Size_shirtScalarWhereWithAggregatesInput = {
    AND?: Size_shirtScalarWhereWithAggregatesInput | Size_shirtScalarWhereWithAggregatesInput[]
    OR?: Size_shirtScalarWhereWithAggregatesInput[]
    NOT?: Size_shirtScalarWhereWithAggregatesInput | Size_shirtScalarWhereWithAggregatesInput[]
    shirtId?: UuidWithAggregatesFilter<"Size_shirt"> | string
    size?: StringWithAggregatesFilter<"Size_shirt"> | string
    s_width?: IntWithAggregatesFilter<"Size_shirt"> | number
    s_high?: IntWithAggregatesFilter<"Size_shirt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Size_shirt"> | Date | string
    point?: IntNullableWithAggregatesFilter<"Size_shirt"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Size_shirt"> | Date | string | null
  }

  export type bib_sequenceWhereInput = {
    AND?: bib_sequenceWhereInput | bib_sequenceWhereInput[]
    OR?: bib_sequenceWhereInput[]
    NOT?: bib_sequenceWhereInput | bib_sequenceWhereInput[]
    id?: UuidFilter<"bib_sequence"> | string
    prefix?: StringFilter<"bib_sequence"> | string
    current_value?: IntFilter<"bib_sequence"> | number
    max_value?: IntFilter<"bib_sequence"> | number
  }

  export type bib_sequenceOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrder
    current_value?: SortOrder
    max_value?: SortOrder
  }

  export type bib_sequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    prefix?: string
    AND?: bib_sequenceWhereInput | bib_sequenceWhereInput[]
    OR?: bib_sequenceWhereInput[]
    NOT?: bib_sequenceWhereInput | bib_sequenceWhereInput[]
    current_value?: IntFilter<"bib_sequence"> | number
    max_value?: IntFilter<"bib_sequence"> | number
  }, "id" | "prefix">

  export type bib_sequenceOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrder
    current_value?: SortOrder
    max_value?: SortOrder
    _count?: bib_sequenceCountOrderByAggregateInput
    _avg?: bib_sequenceAvgOrderByAggregateInput
    _max?: bib_sequenceMaxOrderByAggregateInput
    _min?: bib_sequenceMinOrderByAggregateInput
    _sum?: bib_sequenceSumOrderByAggregateInput
  }

  export type bib_sequenceScalarWhereWithAggregatesInput = {
    AND?: bib_sequenceScalarWhereWithAggregatesInput | bib_sequenceScalarWhereWithAggregatesInput[]
    OR?: bib_sequenceScalarWhereWithAggregatesInput[]
    NOT?: bib_sequenceScalarWhereWithAggregatesInput | bib_sequenceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"bib_sequence"> | string
    prefix?: StringWithAggregatesFilter<"bib_sequence"> | string
    current_value?: IntWithAggregatesFilter<"bib_sequence"> | number
    max_value?: IntWithAggregatesFilter<"bib_sequence"> | number
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    participantId?: UuidFilter<"Participant"> | string
    nameBib?: StringNullableFilter<"Participant"> | string | null
    numberBib?: StringNullableFilter<"Participant"> | string | null
    payment?: BoolFilter<"Participant"> | boolean
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    phone?: StringFilter<"Participant"> | string
    sex?: StringFilter<"Participant"> | string
    age?: StringNullableFilter<"Participant"> | string | null
    sizeId?: UuidFilter<"Participant"> | string
    transferFile?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Participant"> | Date | string | null
    year?: StringNullableFilter<"Participant"> | string | null
    address?: StringNullableFilter<"Participant"> | string | null
    typeBib?: StringNullableFilter<"Participant"> | string | null
    Animal?: AnimalListRelationFilter
    size_sh?: XOR<Size_shirtScalarRelationFilter, Size_shirtWhereInput>
    Items_vip?: Items_vipListRelationFilter
    CheckPoint?: XOR<CheckPointNullableScalarRelationFilter, CheckPointWhereInput> | null
  }

  export type ParticipantOrderByWithRelationInput = {
    participantId?: SortOrder
    nameBib?: SortOrderInput | SortOrder
    numberBib?: SortOrderInput | SortOrder
    payment?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    age?: SortOrderInput | SortOrder
    sizeId?: SortOrder
    transferFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    typeBib?: SortOrderInput | SortOrder
    Animal?: AnimalOrderByRelationAggregateInput
    size_sh?: Size_shirtOrderByWithRelationInput
    Items_vip?: Items_vipOrderByRelationAggregateInput
    CheckPoint?: CheckPointOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    participantId?: string
    firstName_lastName?: ParticipantFirstNameLastNameCompoundUniqueInput
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    nameBib?: StringNullableFilter<"Participant"> | string | null
    numberBib?: StringNullableFilter<"Participant"> | string | null
    payment?: BoolFilter<"Participant"> | boolean
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    phone?: StringFilter<"Participant"> | string
    sex?: StringFilter<"Participant"> | string
    age?: StringNullableFilter<"Participant"> | string | null
    sizeId?: UuidFilter<"Participant"> | string
    transferFile?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Participant"> | Date | string | null
    year?: StringNullableFilter<"Participant"> | string | null
    address?: StringNullableFilter<"Participant"> | string | null
    typeBib?: StringNullableFilter<"Participant"> | string | null
    Animal?: AnimalListRelationFilter
    size_sh?: XOR<Size_shirtScalarRelationFilter, Size_shirtWhereInput>
    Items_vip?: Items_vipListRelationFilter
    CheckPoint?: XOR<CheckPointNullableScalarRelationFilter, CheckPointWhereInput> | null
  }, "participantId" | "firstName_lastName">

  export type ParticipantOrderByWithAggregationInput = {
    participantId?: SortOrder
    nameBib?: SortOrderInput | SortOrder
    numberBib?: SortOrderInput | SortOrder
    payment?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    age?: SortOrderInput | SortOrder
    sizeId?: SortOrder
    transferFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    typeBib?: SortOrderInput | SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    participantId?: UuidWithAggregatesFilter<"Participant"> | string
    nameBib?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    numberBib?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    payment?: BoolWithAggregatesFilter<"Participant"> | boolean
    firstName?: StringWithAggregatesFilter<"Participant"> | string
    lastName?: StringWithAggregatesFilter<"Participant"> | string
    email?: StringWithAggregatesFilter<"Participant"> | string
    phone?: StringWithAggregatesFilter<"Participant"> | string
    sex?: StringWithAggregatesFilter<"Participant"> | string
    age?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    sizeId?: UuidWithAggregatesFilter<"Participant"> | string
    transferFile?: StringWithAggregatesFilter<"Participant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Participant"> | Date | string | null
    year?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    address?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    typeBib?: StringNullableWithAggregatesFilter<"Participant"> | string | null
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    animalId?: UuidFilter<"Animal"> | string
    name?: StringFilter<"Animal"> | string
    weight?: StringFilter<"Animal"> | string
    sex?: StringFilter<"Animal"> | string
    createdAt?: DateTimeFilter<"Animal"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Animal"> | Date | string | null
    participantId?: UuidFilter<"Animal"> | string
    fancys?: BoolFilter<"Animal"> | boolean
    breed?: StringFilter<"Animal"> | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type AnimalOrderByWithRelationInput = {
    animalId?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participantId?: SortOrder
    fancys?: SortOrder
    breed?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    animalId?: string
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    name?: StringFilter<"Animal"> | string
    weight?: StringFilter<"Animal"> | string
    sex?: StringFilter<"Animal"> | string
    createdAt?: DateTimeFilter<"Animal"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Animal"> | Date | string | null
    participantId?: UuidFilter<"Animal"> | string
    fancys?: BoolFilter<"Animal"> | boolean
    breed?: StringFilter<"Animal"> | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "animalId">

  export type AnimalOrderByWithAggregationInput = {
    animalId?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participantId?: SortOrder
    fancys?: SortOrder
    breed?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    animalId?: UuidWithAggregatesFilter<"Animal"> | string
    name?: StringWithAggregatesFilter<"Animal"> | string
    weight?: StringWithAggregatesFilter<"Animal"> | string
    sex?: StringWithAggregatesFilter<"Animal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Animal"> | Date | string | null
    participantId?: UuidWithAggregatesFilter<"Animal"> | string
    fancys?: BoolWithAggregatesFilter<"Animal"> | boolean
    breed?: StringWithAggregatesFilter<"Animal"> | string
  }

  export type SponsorWhereInput = {
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    sponsorId?: UuidFilter<"Sponsor"> | string
    name?: StringFilter<"Sponsor"> | string
    image?: StringNullableFilter<"Sponsor"> | string | null
    link?: StringNullableFilter<"Sponsor"> | string | null
    price?: StringNullableFilter<"Sponsor"> | string | null
    type?: EnumTypesFilter<"Sponsor"> | $Enums.Types
    createdAt?: DateTimeFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Sponsor"> | Date | string | null
  }

  export type SponsorOrderByWithRelationInput = {
    sponsorId?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type SponsorWhereUniqueInput = Prisma.AtLeast<{
    sponsorId?: string
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    name?: StringFilter<"Sponsor"> | string
    image?: StringNullableFilter<"Sponsor"> | string | null
    link?: StringNullableFilter<"Sponsor"> | string | null
    price?: StringNullableFilter<"Sponsor"> | string | null
    type?: EnumTypesFilter<"Sponsor"> | $Enums.Types
    createdAt?: DateTimeFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Sponsor"> | Date | string | null
  }, "sponsorId">

  export type SponsorOrderByWithAggregationInput = {
    sponsorId?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SponsorCountOrderByAggregateInput
    _max?: SponsorMaxOrderByAggregateInput
    _min?: SponsorMinOrderByAggregateInput
  }

  export type SponsorScalarWhereWithAggregatesInput = {
    AND?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    OR?: SponsorScalarWhereWithAggregatesInput[]
    NOT?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    sponsorId?: UuidWithAggregatesFilter<"Sponsor"> | string
    name?: StringWithAggregatesFilter<"Sponsor"> | string
    image?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    link?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    price?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    type?: EnumTypesWithAggregatesFilter<"Sponsor"> | $Enums.Types
    createdAt?: DateTimeWithAggregatesFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Sponsor"> | Date | string | null
  }

  export type Items_vipWhereInput = {
    AND?: Items_vipWhereInput | Items_vipWhereInput[]
    OR?: Items_vipWhereInput[]
    NOT?: Items_vipWhereInput | Items_vipWhereInput[]
    itemId?: UuidFilter<"Items_vip"> | string
    participantId?: UuidFilter<"Items_vip"> | string
    sizeId?: UuidNullableFilter<"Items_vip"> | string | null
    items?: StringFilter<"Items_vip"> | string
    model_shirt?: StringNullableFilter<"Items_vip"> | string | null
    createdAt?: DateTimeFilter<"Items_vip"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Items_vip"> | Date | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    size_sh?: XOR<Size_shirtNullableScalarRelationFilter, Size_shirtWhereInput> | null
  }

  export type Items_vipOrderByWithRelationInput = {
    itemId?: SortOrder
    participantId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    items?: SortOrder
    model_shirt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participant?: ParticipantOrderByWithRelationInput
    size_sh?: Size_shirtOrderByWithRelationInput
  }

  export type Items_vipWhereUniqueInput = Prisma.AtLeast<{
    itemId?: string
    AND?: Items_vipWhereInput | Items_vipWhereInput[]
    OR?: Items_vipWhereInput[]
    NOT?: Items_vipWhereInput | Items_vipWhereInput[]
    participantId?: UuidFilter<"Items_vip"> | string
    sizeId?: UuidNullableFilter<"Items_vip"> | string | null
    items?: StringFilter<"Items_vip"> | string
    model_shirt?: StringNullableFilter<"Items_vip"> | string | null
    createdAt?: DateTimeFilter<"Items_vip"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Items_vip"> | Date | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    size_sh?: XOR<Size_shirtNullableScalarRelationFilter, Size_shirtWhereInput> | null
  }, "itemId">

  export type Items_vipOrderByWithAggregationInput = {
    itemId?: SortOrder
    participantId?: SortOrder
    sizeId?: SortOrderInput | SortOrder
    items?: SortOrder
    model_shirt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: Items_vipCountOrderByAggregateInput
    _max?: Items_vipMaxOrderByAggregateInput
    _min?: Items_vipMinOrderByAggregateInput
  }

  export type Items_vipScalarWhereWithAggregatesInput = {
    AND?: Items_vipScalarWhereWithAggregatesInput | Items_vipScalarWhereWithAggregatesInput[]
    OR?: Items_vipScalarWhereWithAggregatesInput[]
    NOT?: Items_vipScalarWhereWithAggregatesInput | Items_vipScalarWhereWithAggregatesInput[]
    itemId?: UuidWithAggregatesFilter<"Items_vip"> | string
    participantId?: UuidWithAggregatesFilter<"Items_vip"> | string
    sizeId?: UuidNullableWithAggregatesFilter<"Items_vip"> | string | null
    items?: StringWithAggregatesFilter<"Items_vip"> | string
    model_shirt?: StringNullableWithAggregatesFilter<"Items_vip"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Items_vip"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Items_vip"> | Date | string | null
  }

  export type ShirtModelWhereInput = {
    AND?: ShirtModelWhereInput | ShirtModelWhereInput[]
    OR?: ShirtModelWhereInput[]
    NOT?: ShirtModelWhereInput | ShirtModelWhereInput[]
    shirtmodelId?: UuidFilter<"ShirtModel"> | string
    name?: StringFilter<"ShirtModel"> | string
    price?: FloatNullableFilter<"ShirtModel"> | number | null
    createdAt?: DateTimeFilter<"ShirtModel"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ShirtModel"> | Date | string | null
    OrderItem?: OrderItemListRelationFilter
  }

  export type ShirtModelOrderByWithRelationInput = {
    shirtmodelId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type ShirtModelWhereUniqueInput = Prisma.AtLeast<{
    shirtmodelId?: string
    AND?: ShirtModelWhereInput | ShirtModelWhereInput[]
    OR?: ShirtModelWhereInput[]
    NOT?: ShirtModelWhereInput | ShirtModelWhereInput[]
    name?: StringFilter<"ShirtModel"> | string
    price?: FloatNullableFilter<"ShirtModel"> | number | null
    createdAt?: DateTimeFilter<"ShirtModel"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ShirtModel"> | Date | string | null
    OrderItem?: OrderItemListRelationFilter
  }, "shirtmodelId">

  export type ShirtModelOrderByWithAggregationInput = {
    shirtmodelId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ShirtModelCountOrderByAggregateInput
    _avg?: ShirtModelAvgOrderByAggregateInput
    _max?: ShirtModelMaxOrderByAggregateInput
    _min?: ShirtModelMinOrderByAggregateInput
    _sum?: ShirtModelSumOrderByAggregateInput
  }

  export type ShirtModelScalarWhereWithAggregatesInput = {
    AND?: ShirtModelScalarWhereWithAggregatesInput | ShirtModelScalarWhereWithAggregatesInput[]
    OR?: ShirtModelScalarWhereWithAggregatesInput[]
    NOT?: ShirtModelScalarWhereWithAggregatesInput | ShirtModelScalarWhereWithAggregatesInput[]
    shirtmodelId?: UuidWithAggregatesFilter<"ShirtModel"> | string
    name?: StringWithAggregatesFilter<"ShirtModel"> | string
    price?: FloatNullableWithAggregatesFilter<"ShirtModel"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ShirtModel"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ShirtModel"> | Date | string | null
  }

  export type UserSaleShirtWhereInput = {
    AND?: UserSaleShirtWhereInput | UserSaleShirtWhereInput[]
    OR?: UserSaleShirtWhereInput[]
    NOT?: UserSaleShirtWhereInput | UserSaleShirtWhereInput[]
    userId?: UuidFilter<"UserSaleShirt"> | string
    fullname?: StringFilter<"UserSaleShirt"> | string
    phone?: StringFilter<"UserSaleShirt"> | string
    email?: StringFilter<"UserSaleShirt"> | string
    sh_collection_method?: StringFilter<"UserSaleShirt"> | string
    delivery_address?: StringNullableFilter<"UserSaleShirt"> | string | null
    total_amount?: FloatFilter<"UserSaleShirt"> | number
    payment?: BoolFilter<"UserSaleShirt"> | boolean
    transferFile?: StringFilter<"UserSaleShirt"> | string
    ems_tracking?: StringNullableFilter<"UserSaleShirt"> | string | null
    createdAt?: DateTimeFilter<"UserSaleShirt"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSaleShirt"> | Date | string | null
    OrderItem?: OrderItemListRelationFilter
  }

  export type UserSaleShirtOrderByWithRelationInput = {
    userId?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    sh_collection_method?: SortOrder
    delivery_address?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    payment?: SortOrder
    transferFile?: SortOrder
    ems_tracking?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type UserSaleShirtWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserSaleShirtWhereInput | UserSaleShirtWhereInput[]
    OR?: UserSaleShirtWhereInput[]
    NOT?: UserSaleShirtWhereInput | UserSaleShirtWhereInput[]
    fullname?: StringFilter<"UserSaleShirt"> | string
    phone?: StringFilter<"UserSaleShirt"> | string
    email?: StringFilter<"UserSaleShirt"> | string
    sh_collection_method?: StringFilter<"UserSaleShirt"> | string
    delivery_address?: StringNullableFilter<"UserSaleShirt"> | string | null
    total_amount?: FloatFilter<"UserSaleShirt"> | number
    payment?: BoolFilter<"UserSaleShirt"> | boolean
    transferFile?: StringFilter<"UserSaleShirt"> | string
    ems_tracking?: StringNullableFilter<"UserSaleShirt"> | string | null
    createdAt?: DateTimeFilter<"UserSaleShirt"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserSaleShirt"> | Date | string | null
    OrderItem?: OrderItemListRelationFilter
  }, "userId">

  export type UserSaleShirtOrderByWithAggregationInput = {
    userId?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    sh_collection_method?: SortOrder
    delivery_address?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    payment?: SortOrder
    transferFile?: SortOrder
    ems_tracking?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserSaleShirtCountOrderByAggregateInput
    _avg?: UserSaleShirtAvgOrderByAggregateInput
    _max?: UserSaleShirtMaxOrderByAggregateInput
    _min?: UserSaleShirtMinOrderByAggregateInput
    _sum?: UserSaleShirtSumOrderByAggregateInput
  }

  export type UserSaleShirtScalarWhereWithAggregatesInput = {
    AND?: UserSaleShirtScalarWhereWithAggregatesInput | UserSaleShirtScalarWhereWithAggregatesInput[]
    OR?: UserSaleShirtScalarWhereWithAggregatesInput[]
    NOT?: UserSaleShirtScalarWhereWithAggregatesInput | UserSaleShirtScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserSaleShirt"> | string
    fullname?: StringWithAggregatesFilter<"UserSaleShirt"> | string
    phone?: StringWithAggregatesFilter<"UserSaleShirt"> | string
    email?: StringWithAggregatesFilter<"UserSaleShirt"> | string
    sh_collection_method?: StringWithAggregatesFilter<"UserSaleShirt"> | string
    delivery_address?: StringNullableWithAggregatesFilter<"UserSaleShirt"> | string | null
    total_amount?: FloatWithAggregatesFilter<"UserSaleShirt"> | number
    payment?: BoolWithAggregatesFilter<"UserSaleShirt"> | boolean
    transferFile?: StringWithAggregatesFilter<"UserSaleShirt"> | string
    ems_tracking?: StringNullableWithAggregatesFilter<"UserSaleShirt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSaleShirt"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserSaleShirt"> | Date | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: UuidFilter<"OrderItem"> | string
    userSaleshirtId?: UuidFilter<"OrderItem"> | string
    shirtmodelId?: UuidFilter<"OrderItem"> | string
    sizeId?: UuidFilter<"OrderItem"> | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    userSaleshirt?: XOR<UserSaleShirtScalarRelationFilter, UserSaleShirtWhereInput>
    shirtmodel?: XOR<ShirtModelScalarRelationFilter, ShirtModelWhereInput>
    size?: XOR<Size_shirtScalarRelationFilter, Size_shirtWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    orderId?: SortOrder
    userSaleshirtId?: SortOrder
    shirtmodelId?: SortOrder
    sizeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userSaleshirt?: UserSaleShirtOrderByWithRelationInput
    shirtmodel?: ShirtModelOrderByWithRelationInput
    size?: Size_shirtOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    userSaleshirtId?: UuidFilter<"OrderItem"> | string
    shirtmodelId?: UuidFilter<"OrderItem"> | string
    sizeId?: UuidFilter<"OrderItem"> | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
    userSaleshirt?: XOR<UserSaleShirtScalarRelationFilter, UserSaleShirtWhereInput>
    shirtmodel?: XOR<ShirtModelScalarRelationFilter, ShirtModelWhereInput>
    size?: XOR<Size_shirtScalarRelationFilter, Size_shirtWhereInput>
  }, "orderId">

  export type OrderItemOrderByWithAggregationInput = {
    orderId?: SortOrder
    userSaleshirtId?: SortOrder
    shirtmodelId?: SortOrder
    sizeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    orderId?: UuidWithAggregatesFilter<"OrderItem"> | string
    userSaleshirtId?: UuidWithAggregatesFilter<"OrderItem"> | string
    shirtmodelId?: UuidWithAggregatesFilter<"OrderItem"> | string
    sizeId?: UuidWithAggregatesFilter<"OrderItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OrderItem"> | Date | string | null
  }

  export type CheckPointWhereInput = {
    AND?: CheckPointWhereInput | CheckPointWhereInput[]
    OR?: CheckPointWhereInput[]
    NOT?: CheckPointWhereInput | CheckPointWhereInput[]
    checkPointId?: UuidFilter<"CheckPoint"> | string
    checkPoint?: BoolFilter<"CheckPoint"> | boolean
    participantId?: UuidFilter<"CheckPoint"> | string
    createdAt?: DateTimeFilter<"CheckPoint"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CheckPoint"> | Date | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type CheckPointOrderByWithRelationInput = {
    checkPointId?: SortOrder
    checkPoint?: SortOrder
    participantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participant?: ParticipantOrderByWithRelationInput
  }

  export type CheckPointWhereUniqueInput = Prisma.AtLeast<{
    checkPointId?: string
    participantId?: string
    AND?: CheckPointWhereInput | CheckPointWhereInput[]
    OR?: CheckPointWhereInput[]
    NOT?: CheckPointWhereInput | CheckPointWhereInput[]
    checkPoint?: BoolFilter<"CheckPoint"> | boolean
    createdAt?: DateTimeFilter<"CheckPoint"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CheckPoint"> | Date | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "checkPointId" | "participantId">

  export type CheckPointOrderByWithAggregationInput = {
    checkPointId?: SortOrder
    checkPoint?: SortOrder
    participantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CheckPointCountOrderByAggregateInput
    _max?: CheckPointMaxOrderByAggregateInput
    _min?: CheckPointMinOrderByAggregateInput
  }

  export type CheckPointScalarWhereWithAggregatesInput = {
    AND?: CheckPointScalarWhereWithAggregatesInput | CheckPointScalarWhereWithAggregatesInput[]
    OR?: CheckPointScalarWhereWithAggregatesInput[]
    NOT?: CheckPointScalarWhereWithAggregatesInput | CheckPointScalarWhereWithAggregatesInput[]
    checkPointId?: UuidWithAggregatesFilter<"CheckPoint"> | string
    checkPoint?: BoolWithAggregatesFilter<"CheckPoint"> | boolean
    participantId?: UuidWithAggregatesFilter<"CheckPoint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CheckPoint"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CheckPoint"> | Date | string | null
  }

  export type OptionCreateInput = {
    optionId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    limit?: number
  }

  export type OptionUncheckedCreateInput = {
    optionId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    limit?: number
  }

  export type OptionUpdateInput = {
    optionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type OptionUncheckedUpdateInput = {
    optionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateManyInput = {
    optionId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    limit?: number
  }

  export type OptionUpdateManyMutationInput = {
    optionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type OptionUncheckedUpdateManyInput = {
    optionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type Size_shirtCreateInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantCreateNestedManyWithoutSize_shInput
    Items_vip?: Items_vipCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtUncheckedCreateInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantUncheckedCreateNestedManyWithoutSize_shInput
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtUpdateInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateManyWithoutSize_shNestedInput
    Items_vip?: Items_vipUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type Size_shirtUncheckedUpdateInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUncheckedUpdateManyWithoutSize_shNestedInput
    Items_vip?: Items_vipUncheckedUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type Size_shirtCreateManyInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
  }

  export type Size_shirtUpdateManyMutationInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Size_shirtUncheckedUpdateManyInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bib_sequenceCreateInput = {
    id?: string
    prefix: string
    current_value?: number
    max_value?: number
  }

  export type bib_sequenceUncheckedCreateInput = {
    id?: string
    prefix: string
    current_value?: number
    max_value?: number
  }

  export type bib_sequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    current_value?: IntFieldUpdateOperationsInput | number
    max_value?: IntFieldUpdateOperationsInput | number
  }

  export type bib_sequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    current_value?: IntFieldUpdateOperationsInput | number
    max_value?: IntFieldUpdateOperationsInput | number
  }

  export type bib_sequenceCreateManyInput = {
    id?: string
    prefix: string
    current_value?: number
    max_value?: number
  }

  export type bib_sequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    current_value?: IntFieldUpdateOperationsInput | number
    max_value?: IntFieldUpdateOperationsInput | number
  }

  export type bib_sequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    current_value?: IntFieldUpdateOperationsInput | number
    max_value?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCreateInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalCreateNestedManyWithoutParticipantInput
    size_sh: Size_shirtCreateNestedOneWithoutParticipantInput
    Items_vip?: Items_vipCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    sizeId: string
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalUncheckedCreateNestedManyWithoutParticipantInput
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUpdateManyWithoutParticipantNestedInput
    size_sh?: Size_shirtUpdateOneRequiredWithoutParticipantNestedInput
    Items_vip?: Items_vipUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sizeId?: StringFieldUpdateOperationsInput | string
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUncheckedUpdateManyWithoutParticipantNestedInput
    Items_vip?: Items_vipUncheckedUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    sizeId: string
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
  }

  export type ParticipantUpdateManyMutationInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantUncheckedUpdateManyInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sizeId?: StringFieldUpdateOperationsInput | string
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimalCreateInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    fancys?: boolean
    breed: string
    participant: ParticipantCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participantId: string
    fancys?: boolean
    breed: string
  }

  export type AnimalUpdateInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
    participant?: ParticipantUpdateOneRequiredWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participantId?: StringFieldUpdateOperationsInput | string
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateManyInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participantId: string
    fancys?: boolean
    breed: string
  }

  export type AnimalUpdateManyMutationInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participantId?: StringFieldUpdateOperationsInput | string
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorCreateInput = {
    sponsorId?: string
    name: string
    image?: string | null
    link?: string | null
    price?: string | null
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SponsorUncheckedCreateInput = {
    sponsorId?: string
    name: string
    image?: string | null
    link?: string | null
    price?: string | null
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SponsorUpdateInput = {
    sponsorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SponsorUncheckedUpdateInput = {
    sponsorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SponsorCreateManyInput = {
    sponsorId?: string
    name: string
    image?: string | null
    link?: string | null
    price?: string | null
    type?: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SponsorUpdateManyMutationInput = {
    sponsorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SponsorUncheckedUpdateManyInput = {
    sponsorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Items_vipCreateInput = {
    itemId?: string
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participant: ParticipantCreateNestedOneWithoutItems_vipInput
    size_sh?: Size_shirtCreateNestedOneWithoutItems_vipInput
  }

  export type Items_vipUncheckedCreateInput = {
    itemId?: string
    participantId: string
    sizeId?: string | null
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type Items_vipUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateOneRequiredWithoutItems_vipNestedInput
    size_sh?: Size_shirtUpdateOneWithoutItems_vipNestedInput
  }

  export type Items_vipUncheckedUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    sizeId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Items_vipCreateManyInput = {
    itemId?: string
    participantId: string
    sizeId?: string | null
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type Items_vipUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Items_vipUncheckedUpdateManyInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    sizeId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShirtModelCreateInput = {
    shirtmodelId?: string
    name: string
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    OrderItem?: OrderItemCreateNestedManyWithoutShirtmodelInput
  }

  export type ShirtModelUncheckedCreateInput = {
    shirtmodelId?: string
    name: string
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutShirtmodelInput
  }

  export type ShirtModelUpdateInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUpdateManyWithoutShirtmodelNestedInput
  }

  export type ShirtModelUncheckedUpdateInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutShirtmodelNestedInput
  }

  export type ShirtModelCreateManyInput = {
    shirtmodelId?: string
    name: string
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ShirtModelUpdateManyMutationInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShirtModelUncheckedUpdateManyInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSaleShirtCreateInput = {
    userId?: string
    fullname: string
    phone: string
    email: string
    sh_collection_method?: string
    delivery_address?: string | null
    total_amount: number
    payment?: boolean
    transferFile: string
    ems_tracking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    OrderItem?: OrderItemCreateNestedManyWithoutUserSaleshirtInput
  }

  export type UserSaleShirtUncheckedCreateInput = {
    userId?: string
    fullname: string
    phone: string
    email: string
    sh_collection_method?: string
    delivery_address?: string | null
    total_amount: number
    payment?: boolean
    transferFile: string
    ems_tracking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutUserSaleshirtInput
  }

  export type UserSaleShirtUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUpdateManyWithoutUserSaleshirtNestedInput
  }

  export type UserSaleShirtUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OrderItem?: OrderItemUncheckedUpdateManyWithoutUserSaleshirtNestedInput
  }

  export type UserSaleShirtCreateManyInput = {
    userId?: string
    fullname: string
    phone: string
    email: string
    sh_collection_method?: string
    delivery_address?: string | null
    total_amount: number
    payment?: boolean
    transferFile: string
    ems_tracking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserSaleShirtUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSaleShirtUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateInput = {
    orderId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userSaleshirt: UserSaleShirtCreateNestedOneWithoutOrderItemInput
    shirtmodel: ShirtModelCreateNestedOneWithoutOrderItemInput
    size: Size_shirtCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    orderId?: string
    userSaleshirtId: string
    shirtmodelId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSaleshirt?: UserSaleShirtUpdateOneRequiredWithoutOrderItemNestedInput
    shirtmodel?: ShirtModelUpdateOneRequiredWithoutOrderItemNestedInput
    size?: Size_shirtUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyInput = {
    orderId?: string
    userSaleshirtId: string
    shirtmodelId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckPointCreateInput = {
    checkPointId?: string
    checkPoint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participant: ParticipantCreateNestedOneWithoutCheckPointInput
  }

  export type CheckPointUncheckedCreateInput = {
    checkPointId?: string
    checkPoint?: boolean
    participantId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CheckPointUpdateInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateOneRequiredWithoutCheckPointNestedInput
  }

  export type CheckPointUncheckedUpdateInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    participantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckPointCreateManyInput = {
    checkPointId?: string
    checkPoint?: boolean
    participantId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CheckPointUpdateManyMutationInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckPointUncheckedUpdateManyInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    participantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OptionCountOrderByAggregateInput = {
    optionId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    limit?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    limit?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    optionId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    limit?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    optionId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    limit?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    limit?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type Items_vipListRelationFilter = {
    every?: Items_vipWhereInput
    some?: Items_vipWhereInput
    none?: Items_vipWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Items_vipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Size_shirtCountOrderByAggregateInput = {
    shirtId?: SortOrder
    size?: SortOrder
    s_width?: SortOrder
    s_high?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    updatedAt?: SortOrder
  }

  export type Size_shirtAvgOrderByAggregateInput = {
    s_width?: SortOrder
    s_high?: SortOrder
    point?: SortOrder
  }

  export type Size_shirtMaxOrderByAggregateInput = {
    shirtId?: SortOrder
    size?: SortOrder
    s_width?: SortOrder
    s_high?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    updatedAt?: SortOrder
  }

  export type Size_shirtMinOrderByAggregateInput = {
    shirtId?: SortOrder
    size?: SortOrder
    s_width?: SortOrder
    s_high?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    updatedAt?: SortOrder
  }

  export type Size_shirtSumOrderByAggregateInput = {
    s_width?: SortOrder
    s_high?: SortOrder
    point?: SortOrder
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

  export type bib_sequenceCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    current_value?: SortOrder
    max_value?: SortOrder
  }

  export type bib_sequenceAvgOrderByAggregateInput = {
    current_value?: SortOrder
    max_value?: SortOrder
  }

  export type bib_sequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    current_value?: SortOrder
    max_value?: SortOrder
  }

  export type bib_sequenceMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    current_value?: SortOrder
    max_value?: SortOrder
  }

  export type bib_sequenceSumOrderByAggregateInput = {
    current_value?: SortOrder
    max_value?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type Size_shirtScalarRelationFilter = {
    is?: Size_shirtWhereInput
    isNot?: Size_shirtWhereInput
  }

  export type CheckPointNullableScalarRelationFilter = {
    is?: CheckPointWhereInput | null
    isNot?: CheckPointWhereInput | null
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantFirstNameLastNameCompoundUniqueInput = {
    firstName: string
    lastName: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    participantId?: SortOrder
    nameBib?: SortOrder
    numberBib?: SortOrder
    payment?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    sizeId?: SortOrder
    transferFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    address?: SortOrder
    typeBib?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    participantId?: SortOrder
    nameBib?: SortOrder
    numberBib?: SortOrder
    payment?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    sizeId?: SortOrder
    transferFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    address?: SortOrder
    typeBib?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    participantId?: SortOrder
    nameBib?: SortOrder
    numberBib?: SortOrder
    payment?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    sizeId?: SortOrder
    transferFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    year?: SortOrder
    address?: SortOrder
    typeBib?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type AnimalCountOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participantId?: SortOrder
    fancys?: SortOrder
    breed?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participantId?: SortOrder
    fancys?: SortOrder
    breed?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    animalId?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participantId?: SortOrder
    fancys?: SortOrder
    breed?: SortOrder
  }

  export type EnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
  }

  export type SponsorCountOrderByAggregateInput = {
    sponsorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    link?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorMaxOrderByAggregateInput = {
    sponsorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    link?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorMinOrderByAggregateInput = {
    sponsorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    link?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Size_shirtNullableScalarRelationFilter = {
    is?: Size_shirtWhereInput | null
    isNot?: Size_shirtWhereInput | null
  }

  export type Items_vipCountOrderByAggregateInput = {
    itemId?: SortOrder
    participantId?: SortOrder
    sizeId?: SortOrder
    items?: SortOrder
    model_shirt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Items_vipMaxOrderByAggregateInput = {
    itemId?: SortOrder
    participantId?: SortOrder
    sizeId?: SortOrder
    items?: SortOrder
    model_shirt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Items_vipMinOrderByAggregateInput = {
    itemId?: SortOrder
    participantId?: SortOrder
    sizeId?: SortOrder
    items?: SortOrder
    model_shirt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ShirtModelCountOrderByAggregateInput = {
    shirtmodelId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShirtModelAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ShirtModelMaxOrderByAggregateInput = {
    shirtmodelId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShirtModelMinOrderByAggregateInput = {
    shirtmodelId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShirtModelSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserSaleShirtCountOrderByAggregateInput = {
    userId?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    sh_collection_method?: SortOrder
    delivery_address?: SortOrder
    total_amount?: SortOrder
    payment?: SortOrder
    transferFile?: SortOrder
    ems_tracking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSaleShirtAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type UserSaleShirtMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    sh_collection_method?: SortOrder
    delivery_address?: SortOrder
    total_amount?: SortOrder
    payment?: SortOrder
    transferFile?: SortOrder
    ems_tracking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSaleShirtMinOrderByAggregateInput = {
    userId?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    sh_collection_method?: SortOrder
    delivery_address?: SortOrder
    total_amount?: SortOrder
    payment?: SortOrder
    transferFile?: SortOrder
    ems_tracking?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSaleShirtSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserSaleShirtScalarRelationFilter = {
    is?: UserSaleShirtWhereInput
    isNot?: UserSaleShirtWhereInput
  }

  export type ShirtModelScalarRelationFilter = {
    is?: ShirtModelWhereInput
    isNot?: ShirtModelWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    orderId?: SortOrder
    userSaleshirtId?: SortOrder
    shirtmodelId?: SortOrder
    sizeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userSaleshirtId?: SortOrder
    shirtmodelId?: SortOrder
    sizeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    orderId?: SortOrder
    userSaleshirtId?: SortOrder
    shirtmodelId?: SortOrder
    sizeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckPointCountOrderByAggregateInput = {
    checkPointId?: SortOrder
    checkPoint?: SortOrder
    participantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckPointMaxOrderByAggregateInput = {
    checkPointId?: SortOrder
    checkPoint?: SortOrder
    participantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckPointMinOrderByAggregateInput = {
    checkPointId?: SortOrder
    checkPoint?: SortOrder
    participantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantCreateNestedManyWithoutSize_shInput = {
    create?: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput> | ParticipantCreateWithoutSize_shInput[] | ParticipantUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutSize_shInput | ParticipantCreateOrConnectWithoutSize_shInput[]
    createMany?: ParticipantCreateManySize_shInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type Items_vipCreateNestedManyWithoutSize_shInput = {
    create?: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput> | Items_vipCreateWithoutSize_shInput[] | Items_vipUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutSize_shInput | Items_vipCreateOrConnectWithoutSize_shInput[]
    createMany?: Items_vipCreateManySize_shInputEnvelope
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutSizeInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutSize_shInput = {
    create?: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput> | ParticipantCreateWithoutSize_shInput[] | ParticipantUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutSize_shInput | ParticipantCreateOrConnectWithoutSize_shInput[]
    createMany?: ParticipantCreateManySize_shInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type Items_vipUncheckedCreateNestedManyWithoutSize_shInput = {
    create?: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput> | Items_vipCreateWithoutSize_shInput[] | Items_vipUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutSize_shInput | Items_vipCreateOrConnectWithoutSize_shInput[]
    createMany?: Items_vipCreateManySize_shInputEnvelope
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantUpdateManyWithoutSize_shNestedInput = {
    create?: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput> | ParticipantCreateWithoutSize_shInput[] | ParticipantUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutSize_shInput | ParticipantCreateOrConnectWithoutSize_shInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutSize_shInput | ParticipantUpsertWithWhereUniqueWithoutSize_shInput[]
    createMany?: ParticipantCreateManySize_shInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutSize_shInput | ParticipantUpdateWithWhereUniqueWithoutSize_shInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutSize_shInput | ParticipantUpdateManyWithWhereWithoutSize_shInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type Items_vipUpdateManyWithoutSize_shNestedInput = {
    create?: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput> | Items_vipCreateWithoutSize_shInput[] | Items_vipUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutSize_shInput | Items_vipCreateOrConnectWithoutSize_shInput[]
    upsert?: Items_vipUpsertWithWhereUniqueWithoutSize_shInput | Items_vipUpsertWithWhereUniqueWithoutSize_shInput[]
    createMany?: Items_vipCreateManySize_shInputEnvelope
    set?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    disconnect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    delete?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    update?: Items_vipUpdateWithWhereUniqueWithoutSize_shInput | Items_vipUpdateWithWhereUniqueWithoutSize_shInput[]
    updateMany?: Items_vipUpdateManyWithWhereWithoutSize_shInput | Items_vipUpdateManyWithWhereWithoutSize_shInput[]
    deleteMany?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutSizeInput | OrderItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutSizeInput | OrderItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutSizeInput | OrderItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutSize_shNestedInput = {
    create?: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput> | ParticipantCreateWithoutSize_shInput[] | ParticipantUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutSize_shInput | ParticipantCreateOrConnectWithoutSize_shInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutSize_shInput | ParticipantUpsertWithWhereUniqueWithoutSize_shInput[]
    createMany?: ParticipantCreateManySize_shInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutSize_shInput | ParticipantUpdateWithWhereUniqueWithoutSize_shInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutSize_shInput | ParticipantUpdateManyWithWhereWithoutSize_shInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type Items_vipUncheckedUpdateManyWithoutSize_shNestedInput = {
    create?: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput> | Items_vipCreateWithoutSize_shInput[] | Items_vipUncheckedCreateWithoutSize_shInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutSize_shInput | Items_vipCreateOrConnectWithoutSize_shInput[]
    upsert?: Items_vipUpsertWithWhereUniqueWithoutSize_shInput | Items_vipUpsertWithWhereUniqueWithoutSize_shInput[]
    createMany?: Items_vipCreateManySize_shInputEnvelope
    set?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    disconnect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    delete?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    update?: Items_vipUpdateWithWhereUniqueWithoutSize_shInput | Items_vipUpdateWithWhereUniqueWithoutSize_shInput[]
    updateMany?: Items_vipUpdateManyWithWhereWithoutSize_shInput | Items_vipUpdateManyWithWhereWithoutSize_shInput[]
    deleteMany?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput> | OrderItemCreateWithoutSizeInput[] | OrderItemUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutSizeInput | OrderItemCreateOrConnectWithoutSizeInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutSizeInput | OrderItemUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: OrderItemCreateManySizeInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutSizeInput | OrderItemUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutSizeInput | OrderItemUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AnimalCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput> | AnimalCreateWithoutParticipantInput[] | AnimalUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutParticipantInput | AnimalCreateOrConnectWithoutParticipantInput[]
    createMany?: AnimalCreateManyParticipantInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type Size_shirtCreateNestedOneWithoutParticipantInput = {
    create?: XOR<Size_shirtCreateWithoutParticipantInput, Size_shirtUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutParticipantInput
    connect?: Size_shirtWhereUniqueInput
  }

  export type Items_vipCreateNestedManyWithoutParticipantInput = {
    create?: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput> | Items_vipCreateWithoutParticipantInput[] | Items_vipUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutParticipantInput | Items_vipCreateOrConnectWithoutParticipantInput[]
    createMany?: Items_vipCreateManyParticipantInputEnvelope
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
  }

  export type CheckPointCreateNestedOneWithoutParticipantInput = {
    create?: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: CheckPointCreateOrConnectWithoutParticipantInput
    connect?: CheckPointWhereUniqueInput
  }

  export type AnimalUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput> | AnimalCreateWithoutParticipantInput[] | AnimalUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutParticipantInput | AnimalCreateOrConnectWithoutParticipantInput[]
    createMany?: AnimalCreateManyParticipantInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type Items_vipUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput> | Items_vipCreateWithoutParticipantInput[] | Items_vipUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutParticipantInput | Items_vipCreateOrConnectWithoutParticipantInput[]
    createMany?: Items_vipCreateManyParticipantInputEnvelope
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
  }

  export type CheckPointUncheckedCreateNestedOneWithoutParticipantInput = {
    create?: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: CheckPointCreateOrConnectWithoutParticipantInput
    connect?: CheckPointWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnimalUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput> | AnimalCreateWithoutParticipantInput[] | AnimalUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutParticipantInput | AnimalCreateOrConnectWithoutParticipantInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutParticipantInput | AnimalUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AnimalCreateManyParticipantInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutParticipantInput | AnimalUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutParticipantInput | AnimalUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type Size_shirtUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<Size_shirtCreateWithoutParticipantInput, Size_shirtUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutParticipantInput
    upsert?: Size_shirtUpsertWithoutParticipantInput
    connect?: Size_shirtWhereUniqueInput
    update?: XOR<XOR<Size_shirtUpdateToOneWithWhereWithoutParticipantInput, Size_shirtUpdateWithoutParticipantInput>, Size_shirtUncheckedUpdateWithoutParticipantInput>
  }

  export type Items_vipUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput> | Items_vipCreateWithoutParticipantInput[] | Items_vipUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutParticipantInput | Items_vipCreateOrConnectWithoutParticipantInput[]
    upsert?: Items_vipUpsertWithWhereUniqueWithoutParticipantInput | Items_vipUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: Items_vipCreateManyParticipantInputEnvelope
    set?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    disconnect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    delete?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    update?: Items_vipUpdateWithWhereUniqueWithoutParticipantInput | Items_vipUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: Items_vipUpdateManyWithWhereWithoutParticipantInput | Items_vipUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
  }

  export type CheckPointUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: CheckPointCreateOrConnectWithoutParticipantInput
    upsert?: CheckPointUpsertWithoutParticipantInput
    disconnect?: CheckPointWhereInput | boolean
    delete?: CheckPointWhereInput | boolean
    connect?: CheckPointWhereUniqueInput
    update?: XOR<XOR<CheckPointUpdateToOneWithWhereWithoutParticipantInput, CheckPointUpdateWithoutParticipantInput>, CheckPointUncheckedUpdateWithoutParticipantInput>
  }

  export type AnimalUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput> | AnimalCreateWithoutParticipantInput[] | AnimalUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutParticipantInput | AnimalCreateOrConnectWithoutParticipantInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutParticipantInput | AnimalUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AnimalCreateManyParticipantInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutParticipantInput | AnimalUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutParticipantInput | AnimalUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type Items_vipUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput> | Items_vipCreateWithoutParticipantInput[] | Items_vipUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: Items_vipCreateOrConnectWithoutParticipantInput | Items_vipCreateOrConnectWithoutParticipantInput[]
    upsert?: Items_vipUpsertWithWhereUniqueWithoutParticipantInput | Items_vipUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: Items_vipCreateManyParticipantInputEnvelope
    set?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    disconnect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    delete?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    connect?: Items_vipWhereUniqueInput | Items_vipWhereUniqueInput[]
    update?: Items_vipUpdateWithWhereUniqueWithoutParticipantInput | Items_vipUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: Items_vipUpdateManyWithWhereWithoutParticipantInput | Items_vipUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
  }

  export type CheckPointUncheckedUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: CheckPointCreateOrConnectWithoutParticipantInput
    upsert?: CheckPointUpsertWithoutParticipantInput
    disconnect?: CheckPointWhereInput | boolean
    delete?: CheckPointWhereInput | boolean
    connect?: CheckPointWhereUniqueInput
    update?: XOR<XOR<CheckPointUpdateToOneWithWhereWithoutParticipantInput, CheckPointUpdateWithoutParticipantInput>, CheckPointUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantCreateNestedOneWithoutAnimalInput = {
    create?: XOR<ParticipantCreateWithoutAnimalInput, ParticipantUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAnimalInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutAnimalNestedInput = {
    create?: XOR<ParticipantCreateWithoutAnimalInput, ParticipantUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAnimalInput
    upsert?: ParticipantUpsertWithoutAnimalInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutAnimalInput, ParticipantUpdateWithoutAnimalInput>, ParticipantUncheckedUpdateWithoutAnimalInput>
  }

  export type EnumTypesFieldUpdateOperationsInput = {
    set?: $Enums.Types
  }

  export type ParticipantCreateNestedOneWithoutItems_vipInput = {
    create?: XOR<ParticipantCreateWithoutItems_vipInput, ParticipantUncheckedCreateWithoutItems_vipInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutItems_vipInput
    connect?: ParticipantWhereUniqueInput
  }

  export type Size_shirtCreateNestedOneWithoutItems_vipInput = {
    create?: XOR<Size_shirtCreateWithoutItems_vipInput, Size_shirtUncheckedCreateWithoutItems_vipInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutItems_vipInput
    connect?: Size_shirtWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutItems_vipNestedInput = {
    create?: XOR<ParticipantCreateWithoutItems_vipInput, ParticipantUncheckedCreateWithoutItems_vipInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutItems_vipInput
    upsert?: ParticipantUpsertWithoutItems_vipInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutItems_vipInput, ParticipantUpdateWithoutItems_vipInput>, ParticipantUncheckedUpdateWithoutItems_vipInput>
  }

  export type Size_shirtUpdateOneWithoutItems_vipNestedInput = {
    create?: XOR<Size_shirtCreateWithoutItems_vipInput, Size_shirtUncheckedCreateWithoutItems_vipInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutItems_vipInput
    upsert?: Size_shirtUpsertWithoutItems_vipInput
    disconnect?: Size_shirtWhereInput | boolean
    delete?: Size_shirtWhereInput | boolean
    connect?: Size_shirtWhereUniqueInput
    update?: XOR<XOR<Size_shirtUpdateToOneWithWhereWithoutItems_vipInput, Size_shirtUpdateWithoutItems_vipInput>, Size_shirtUncheckedUpdateWithoutItems_vipInput>
  }

  export type OrderItemCreateNestedManyWithoutShirtmodelInput = {
    create?: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput> | OrderItemCreateWithoutShirtmodelInput[] | OrderItemUncheckedCreateWithoutShirtmodelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutShirtmodelInput | OrderItemCreateOrConnectWithoutShirtmodelInput[]
    createMany?: OrderItemCreateManyShirtmodelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutShirtmodelInput = {
    create?: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput> | OrderItemCreateWithoutShirtmodelInput[] | OrderItemUncheckedCreateWithoutShirtmodelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutShirtmodelInput | OrderItemCreateOrConnectWithoutShirtmodelInput[]
    createMany?: OrderItemCreateManyShirtmodelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemUpdateManyWithoutShirtmodelNestedInput = {
    create?: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput> | OrderItemCreateWithoutShirtmodelInput[] | OrderItemUncheckedCreateWithoutShirtmodelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutShirtmodelInput | OrderItemCreateOrConnectWithoutShirtmodelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutShirtmodelInput | OrderItemUpsertWithWhereUniqueWithoutShirtmodelInput[]
    createMany?: OrderItemCreateManyShirtmodelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutShirtmodelInput | OrderItemUpdateWithWhereUniqueWithoutShirtmodelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutShirtmodelInput | OrderItemUpdateManyWithWhereWithoutShirtmodelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutShirtmodelNestedInput = {
    create?: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput> | OrderItemCreateWithoutShirtmodelInput[] | OrderItemUncheckedCreateWithoutShirtmodelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutShirtmodelInput | OrderItemCreateOrConnectWithoutShirtmodelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutShirtmodelInput | OrderItemUpsertWithWhereUniqueWithoutShirtmodelInput[]
    createMany?: OrderItemCreateManyShirtmodelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutShirtmodelInput | OrderItemUpdateWithWhereUniqueWithoutShirtmodelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutShirtmodelInput | OrderItemUpdateManyWithWhereWithoutShirtmodelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemCreateNestedManyWithoutUserSaleshirtInput = {
    create?: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput> | OrderItemCreateWithoutUserSaleshirtInput[] | OrderItemUncheckedCreateWithoutUserSaleshirtInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutUserSaleshirtInput | OrderItemCreateOrConnectWithoutUserSaleshirtInput[]
    createMany?: OrderItemCreateManyUserSaleshirtInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutUserSaleshirtInput = {
    create?: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput> | OrderItemCreateWithoutUserSaleshirtInput[] | OrderItemUncheckedCreateWithoutUserSaleshirtInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutUserSaleshirtInput | OrderItemCreateOrConnectWithoutUserSaleshirtInput[]
    createMany?: OrderItemCreateManyUserSaleshirtInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemUpdateManyWithoutUserSaleshirtNestedInput = {
    create?: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput> | OrderItemCreateWithoutUserSaleshirtInput[] | OrderItemUncheckedCreateWithoutUserSaleshirtInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutUserSaleshirtInput | OrderItemCreateOrConnectWithoutUserSaleshirtInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutUserSaleshirtInput | OrderItemUpsertWithWhereUniqueWithoutUserSaleshirtInput[]
    createMany?: OrderItemCreateManyUserSaleshirtInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutUserSaleshirtInput | OrderItemUpdateWithWhereUniqueWithoutUserSaleshirtInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutUserSaleshirtInput | OrderItemUpdateManyWithWhereWithoutUserSaleshirtInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutUserSaleshirtNestedInput = {
    create?: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput> | OrderItemCreateWithoutUserSaleshirtInput[] | OrderItemUncheckedCreateWithoutUserSaleshirtInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutUserSaleshirtInput | OrderItemCreateOrConnectWithoutUserSaleshirtInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutUserSaleshirtInput | OrderItemUpsertWithWhereUniqueWithoutUserSaleshirtInput[]
    createMany?: OrderItemCreateManyUserSaleshirtInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutUserSaleshirtInput | OrderItemUpdateWithWhereUniqueWithoutUserSaleshirtInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutUserSaleshirtInput | OrderItemUpdateManyWithWhereWithoutUserSaleshirtInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserSaleShirtCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<UserSaleShirtCreateWithoutOrderItemInput, UserSaleShirtUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: UserSaleShirtCreateOrConnectWithoutOrderItemInput
    connect?: UserSaleShirtWhereUniqueInput
  }

  export type ShirtModelCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ShirtModelCreateWithoutOrderItemInput, ShirtModelUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ShirtModelCreateOrConnectWithoutOrderItemInput
    connect?: ShirtModelWhereUniqueInput
  }

  export type Size_shirtCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<Size_shirtCreateWithoutOrderItemInput, Size_shirtUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutOrderItemInput
    connect?: Size_shirtWhereUniqueInput
  }

  export type UserSaleShirtUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<UserSaleShirtCreateWithoutOrderItemInput, UserSaleShirtUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: UserSaleShirtCreateOrConnectWithoutOrderItemInput
    upsert?: UserSaleShirtUpsertWithoutOrderItemInput
    connect?: UserSaleShirtWhereUniqueInput
    update?: XOR<XOR<UserSaleShirtUpdateToOneWithWhereWithoutOrderItemInput, UserSaleShirtUpdateWithoutOrderItemInput>, UserSaleShirtUncheckedUpdateWithoutOrderItemInput>
  }

  export type ShirtModelUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ShirtModelCreateWithoutOrderItemInput, ShirtModelUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ShirtModelCreateOrConnectWithoutOrderItemInput
    upsert?: ShirtModelUpsertWithoutOrderItemInput
    connect?: ShirtModelWhereUniqueInput
    update?: XOR<XOR<ShirtModelUpdateToOneWithWhereWithoutOrderItemInput, ShirtModelUpdateWithoutOrderItemInput>, ShirtModelUncheckedUpdateWithoutOrderItemInput>
  }

  export type Size_shirtUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<Size_shirtCreateWithoutOrderItemInput, Size_shirtUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: Size_shirtCreateOrConnectWithoutOrderItemInput
    upsert?: Size_shirtUpsertWithoutOrderItemInput
    connect?: Size_shirtWhereUniqueInput
    update?: XOR<XOR<Size_shirtUpdateToOneWithWhereWithoutOrderItemInput, Size_shirtUpdateWithoutOrderItemInput>, Size_shirtUncheckedUpdateWithoutOrderItemInput>
  }

  export type ParticipantCreateNestedOneWithoutCheckPointInput = {
    create?: XOR<ParticipantCreateWithoutCheckPointInput, ParticipantUncheckedCreateWithoutCheckPointInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutCheckPointInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutCheckPointNestedInput = {
    create?: XOR<ParticipantCreateWithoutCheckPointInput, ParticipantUncheckedCreateWithoutCheckPointInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutCheckPointInput
    upsert?: ParticipantUpsertWithoutCheckPointInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutCheckPointInput, ParticipantUpdateWithoutCheckPointInput>, ParticipantUncheckedUpdateWithoutCheckPointInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
  }

  export type NestedEnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParticipantCreateWithoutSize_shInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalCreateNestedManyWithoutParticipantInput
    Items_vip?: Items_vipCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutSize_shInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalUncheckedCreateNestedManyWithoutParticipantInput
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutSize_shInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput>
  }

  export type ParticipantCreateManySize_shInputEnvelope = {
    data: ParticipantCreateManySize_shInput | ParticipantCreateManySize_shInput[]
    skipDuplicates?: boolean
  }

  export type Items_vipCreateWithoutSize_shInput = {
    itemId?: string
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participant: ParticipantCreateNestedOneWithoutItems_vipInput
  }

  export type Items_vipUncheckedCreateWithoutSize_shInput = {
    itemId?: string
    participantId: string
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type Items_vipCreateOrConnectWithoutSize_shInput = {
    where: Items_vipWhereUniqueInput
    create: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput>
  }

  export type Items_vipCreateManySize_shInputEnvelope = {
    data: Items_vipCreateManySize_shInput | Items_vipCreateManySize_shInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutSizeInput = {
    orderId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userSaleshirt: UserSaleShirtCreateNestedOneWithoutOrderItemInput
    shirtmodel: ShirtModelCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutSizeInput = {
    orderId?: string
    userSaleshirtId: string
    shirtmodelId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemCreateOrConnectWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput>
  }

  export type OrderItemCreateManySizeInputEnvelope = {
    data: OrderItemCreateManySizeInput | OrderItemCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantUpsertWithWhereUniqueWithoutSize_shInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutSize_shInput, ParticipantUncheckedUpdateWithoutSize_shInput>
    create: XOR<ParticipantCreateWithoutSize_shInput, ParticipantUncheckedCreateWithoutSize_shInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutSize_shInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutSize_shInput, ParticipantUncheckedUpdateWithoutSize_shInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutSize_shInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutSize_shInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    participantId?: UuidFilter<"Participant"> | string
    nameBib?: StringNullableFilter<"Participant"> | string | null
    numberBib?: StringNullableFilter<"Participant"> | string | null
    payment?: BoolFilter<"Participant"> | boolean
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    phone?: StringFilter<"Participant"> | string
    sex?: StringFilter<"Participant"> | string
    age?: StringNullableFilter<"Participant"> | string | null
    sizeId?: UuidFilter<"Participant"> | string
    transferFile?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Participant"> | Date | string | null
    year?: StringNullableFilter<"Participant"> | string | null
    address?: StringNullableFilter<"Participant"> | string | null
    typeBib?: StringNullableFilter<"Participant"> | string | null
  }

  export type Items_vipUpsertWithWhereUniqueWithoutSize_shInput = {
    where: Items_vipWhereUniqueInput
    update: XOR<Items_vipUpdateWithoutSize_shInput, Items_vipUncheckedUpdateWithoutSize_shInput>
    create: XOR<Items_vipCreateWithoutSize_shInput, Items_vipUncheckedCreateWithoutSize_shInput>
  }

  export type Items_vipUpdateWithWhereUniqueWithoutSize_shInput = {
    where: Items_vipWhereUniqueInput
    data: XOR<Items_vipUpdateWithoutSize_shInput, Items_vipUncheckedUpdateWithoutSize_shInput>
  }

  export type Items_vipUpdateManyWithWhereWithoutSize_shInput = {
    where: Items_vipScalarWhereInput
    data: XOR<Items_vipUpdateManyMutationInput, Items_vipUncheckedUpdateManyWithoutSize_shInput>
  }

  export type Items_vipScalarWhereInput = {
    AND?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
    OR?: Items_vipScalarWhereInput[]
    NOT?: Items_vipScalarWhereInput | Items_vipScalarWhereInput[]
    itemId?: UuidFilter<"Items_vip"> | string
    participantId?: UuidFilter<"Items_vip"> | string
    sizeId?: UuidNullableFilter<"Items_vip"> | string | null
    items?: StringFilter<"Items_vip"> | string
    model_shirt?: StringNullableFilter<"Items_vip"> | string | null
    createdAt?: DateTimeFilter<"Items_vip"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Items_vip"> | Date | string | null
  }

  export type OrderItemUpsertWithWhereUniqueWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutSizeInput, OrderItemUncheckedUpdateWithoutSizeInput>
    create: XOR<OrderItemCreateWithoutSizeInput, OrderItemUncheckedCreateWithoutSizeInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutSizeInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutSizeInput, OrderItemUncheckedUpdateWithoutSizeInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutSizeInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutSizeInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    orderId?: UuidFilter<"OrderItem"> | string
    userSaleshirtId?: UuidFilter<"OrderItem"> | string
    shirtmodelId?: UuidFilter<"OrderItem"> | string
    sizeId?: UuidFilter<"OrderItem"> | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeNullableFilter<"OrderItem"> | Date | string | null
  }

  export type AnimalCreateWithoutParticipantInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    fancys?: boolean
    breed: string
  }

  export type AnimalUncheckedCreateWithoutParticipantInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    fancys?: boolean
    breed: string
  }

  export type AnimalCreateOrConnectWithoutParticipantInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput>
  }

  export type AnimalCreateManyParticipantInputEnvelope = {
    data: AnimalCreateManyParticipantInput | AnimalCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type Size_shirtCreateWithoutParticipantInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    Items_vip?: Items_vipCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtUncheckedCreateWithoutParticipantInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtCreateOrConnectWithoutParticipantInput = {
    where: Size_shirtWhereUniqueInput
    create: XOR<Size_shirtCreateWithoutParticipantInput, Size_shirtUncheckedCreateWithoutParticipantInput>
  }

  export type Items_vipCreateWithoutParticipantInput = {
    itemId?: string
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    size_sh?: Size_shirtCreateNestedOneWithoutItems_vipInput
  }

  export type Items_vipUncheckedCreateWithoutParticipantInput = {
    itemId?: string
    sizeId?: string | null
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type Items_vipCreateOrConnectWithoutParticipantInput = {
    where: Items_vipWhereUniqueInput
    create: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput>
  }

  export type Items_vipCreateManyParticipantInputEnvelope = {
    data: Items_vipCreateManyParticipantInput | Items_vipCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type CheckPointCreateWithoutParticipantInput = {
    checkPointId?: string
    checkPoint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CheckPointUncheckedCreateWithoutParticipantInput = {
    checkPointId?: string
    checkPoint?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CheckPointCreateOrConnectWithoutParticipantInput = {
    where: CheckPointWhereUniqueInput
    create: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
  }

  export type AnimalUpsertWithWhereUniqueWithoutParticipantInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutParticipantInput, AnimalUncheckedUpdateWithoutParticipantInput>
    create: XOR<AnimalCreateWithoutParticipantInput, AnimalUncheckedCreateWithoutParticipantInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutParticipantInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutParticipantInput, AnimalUncheckedUpdateWithoutParticipantInput>
  }

  export type AnimalUpdateManyWithWhereWithoutParticipantInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutParticipantInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    animalId?: UuidFilter<"Animal"> | string
    name?: StringFilter<"Animal"> | string
    weight?: StringFilter<"Animal"> | string
    sex?: StringFilter<"Animal"> | string
    createdAt?: DateTimeFilter<"Animal"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Animal"> | Date | string | null
    participantId?: UuidFilter<"Animal"> | string
    fancys?: BoolFilter<"Animal"> | boolean
    breed?: StringFilter<"Animal"> | string
  }

  export type Size_shirtUpsertWithoutParticipantInput = {
    update: XOR<Size_shirtUpdateWithoutParticipantInput, Size_shirtUncheckedUpdateWithoutParticipantInput>
    create: XOR<Size_shirtCreateWithoutParticipantInput, Size_shirtUncheckedCreateWithoutParticipantInput>
    where?: Size_shirtWhereInput
  }

  export type Size_shirtUpdateToOneWithWhereWithoutParticipantInput = {
    where?: Size_shirtWhereInput
    data: XOR<Size_shirtUpdateWithoutParticipantInput, Size_shirtUncheckedUpdateWithoutParticipantInput>
  }

  export type Size_shirtUpdateWithoutParticipantInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Items_vip?: Items_vipUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type Size_shirtUncheckedUpdateWithoutParticipantInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Items_vip?: Items_vipUncheckedUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type Items_vipUpsertWithWhereUniqueWithoutParticipantInput = {
    where: Items_vipWhereUniqueInput
    update: XOR<Items_vipUpdateWithoutParticipantInput, Items_vipUncheckedUpdateWithoutParticipantInput>
    create: XOR<Items_vipCreateWithoutParticipantInput, Items_vipUncheckedCreateWithoutParticipantInput>
  }

  export type Items_vipUpdateWithWhereUniqueWithoutParticipantInput = {
    where: Items_vipWhereUniqueInput
    data: XOR<Items_vipUpdateWithoutParticipantInput, Items_vipUncheckedUpdateWithoutParticipantInput>
  }

  export type Items_vipUpdateManyWithWhereWithoutParticipantInput = {
    where: Items_vipScalarWhereInput
    data: XOR<Items_vipUpdateManyMutationInput, Items_vipUncheckedUpdateManyWithoutParticipantInput>
  }

  export type CheckPointUpsertWithoutParticipantInput = {
    update: XOR<CheckPointUpdateWithoutParticipantInput, CheckPointUncheckedUpdateWithoutParticipantInput>
    create: XOR<CheckPointCreateWithoutParticipantInput, CheckPointUncheckedCreateWithoutParticipantInput>
    where?: CheckPointWhereInput
  }

  export type CheckPointUpdateToOneWithWhereWithoutParticipantInput = {
    where?: CheckPointWhereInput
    data: XOR<CheckPointUpdateWithoutParticipantInput, CheckPointUncheckedUpdateWithoutParticipantInput>
  }

  export type CheckPointUpdateWithoutParticipantInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckPointUncheckedUpdateWithoutParticipantInput = {
    checkPointId?: StringFieldUpdateOperationsInput | string
    checkPoint?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParticipantCreateWithoutAnimalInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    size_sh: Size_shirtCreateNestedOneWithoutParticipantInput
    Items_vip?: Items_vipCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutAnimalInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    sizeId: string
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutAnimalInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutAnimalInput, ParticipantUncheckedCreateWithoutAnimalInput>
  }

  export type ParticipantUpsertWithoutAnimalInput = {
    update: XOR<ParticipantUpdateWithoutAnimalInput, ParticipantUncheckedUpdateWithoutAnimalInput>
    create: XOR<ParticipantCreateWithoutAnimalInput, ParticipantUncheckedCreateWithoutAnimalInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutAnimalInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutAnimalInput, ParticipantUncheckedUpdateWithoutAnimalInput>
  }

  export type ParticipantUpdateWithoutAnimalInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    size_sh?: Size_shirtUpdateOneRequiredWithoutParticipantNestedInput
    Items_vip?: Items_vipUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutAnimalInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sizeId?: StringFieldUpdateOperationsInput | string
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Items_vip?: Items_vipUncheckedUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantCreateWithoutItems_vipInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalCreateNestedManyWithoutParticipantInput
    size_sh: Size_shirtCreateNestedOneWithoutParticipantInput
    CheckPoint?: CheckPointCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutItems_vipInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    sizeId: string
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalUncheckedCreateNestedManyWithoutParticipantInput
    CheckPoint?: CheckPointUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutItems_vipInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutItems_vipInput, ParticipantUncheckedCreateWithoutItems_vipInput>
  }

  export type Size_shirtCreateWithoutItems_vipInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtUncheckedCreateWithoutItems_vipInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantUncheckedCreateNestedManyWithoutSize_shInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutSizeInput
  }

  export type Size_shirtCreateOrConnectWithoutItems_vipInput = {
    where: Size_shirtWhereUniqueInput
    create: XOR<Size_shirtCreateWithoutItems_vipInput, Size_shirtUncheckedCreateWithoutItems_vipInput>
  }

  export type ParticipantUpsertWithoutItems_vipInput = {
    update: XOR<ParticipantUpdateWithoutItems_vipInput, ParticipantUncheckedUpdateWithoutItems_vipInput>
    create: XOR<ParticipantCreateWithoutItems_vipInput, ParticipantUncheckedCreateWithoutItems_vipInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutItems_vipInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutItems_vipInput, ParticipantUncheckedUpdateWithoutItems_vipInput>
  }

  export type ParticipantUpdateWithoutItems_vipInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUpdateManyWithoutParticipantNestedInput
    size_sh?: Size_shirtUpdateOneRequiredWithoutParticipantNestedInput
    CheckPoint?: CheckPointUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutItems_vipInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sizeId?: StringFieldUpdateOperationsInput | string
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUncheckedUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type Size_shirtUpsertWithoutItems_vipInput = {
    update: XOR<Size_shirtUpdateWithoutItems_vipInput, Size_shirtUncheckedUpdateWithoutItems_vipInput>
    create: XOR<Size_shirtCreateWithoutItems_vipInput, Size_shirtUncheckedCreateWithoutItems_vipInput>
    where?: Size_shirtWhereInput
  }

  export type Size_shirtUpdateToOneWithWhereWithoutItems_vipInput = {
    where?: Size_shirtWhereInput
    data: XOR<Size_shirtUpdateWithoutItems_vipInput, Size_shirtUncheckedUpdateWithoutItems_vipInput>
  }

  export type Size_shirtUpdateWithoutItems_vipInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUpdateManyWithoutSizeNestedInput
  }

  export type Size_shirtUncheckedUpdateWithoutItems_vipInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUncheckedUpdateManyWithoutSize_shNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type OrderItemCreateWithoutShirtmodelInput = {
    orderId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userSaleshirt: UserSaleShirtCreateNestedOneWithoutOrderItemInput
    size: Size_shirtCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutShirtmodelInput = {
    orderId?: string
    userSaleshirtId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemCreateOrConnectWithoutShirtmodelInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput>
  }

  export type OrderItemCreateManyShirtmodelInputEnvelope = {
    data: OrderItemCreateManyShirtmodelInput | OrderItemCreateManyShirtmodelInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutShirtmodelInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutShirtmodelInput, OrderItemUncheckedUpdateWithoutShirtmodelInput>
    create: XOR<OrderItemCreateWithoutShirtmodelInput, OrderItemUncheckedCreateWithoutShirtmodelInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutShirtmodelInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutShirtmodelInput, OrderItemUncheckedUpdateWithoutShirtmodelInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutShirtmodelInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutShirtmodelInput>
  }

  export type OrderItemCreateWithoutUserSaleshirtInput = {
    orderId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    shirtmodel: ShirtModelCreateNestedOneWithoutOrderItemInput
    size: Size_shirtCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutUserSaleshirtInput = {
    orderId?: string
    shirtmodelId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemCreateOrConnectWithoutUserSaleshirtInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput>
  }

  export type OrderItemCreateManyUserSaleshirtInputEnvelope = {
    data: OrderItemCreateManyUserSaleshirtInput | OrderItemCreateManyUserSaleshirtInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutUserSaleshirtInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutUserSaleshirtInput, OrderItemUncheckedUpdateWithoutUserSaleshirtInput>
    create: XOR<OrderItemCreateWithoutUserSaleshirtInput, OrderItemUncheckedCreateWithoutUserSaleshirtInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutUserSaleshirtInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutUserSaleshirtInput, OrderItemUncheckedUpdateWithoutUserSaleshirtInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutUserSaleshirtInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutUserSaleshirtInput>
  }

  export type UserSaleShirtCreateWithoutOrderItemInput = {
    userId?: string
    fullname: string
    phone: string
    email: string
    sh_collection_method?: string
    delivery_address?: string | null
    total_amount: number
    payment?: boolean
    transferFile: string
    ems_tracking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserSaleShirtUncheckedCreateWithoutOrderItemInput = {
    userId?: string
    fullname: string
    phone: string
    email: string
    sh_collection_method?: string
    delivery_address?: string | null
    total_amount: number
    payment?: boolean
    transferFile: string
    ems_tracking?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserSaleShirtCreateOrConnectWithoutOrderItemInput = {
    where: UserSaleShirtWhereUniqueInput
    create: XOR<UserSaleShirtCreateWithoutOrderItemInput, UserSaleShirtUncheckedCreateWithoutOrderItemInput>
  }

  export type ShirtModelCreateWithoutOrderItemInput = {
    shirtmodelId?: string
    name: string
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ShirtModelUncheckedCreateWithoutOrderItemInput = {
    shirtmodelId?: string
    name: string
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ShirtModelCreateOrConnectWithoutOrderItemInput = {
    where: ShirtModelWhereUniqueInput
    create: XOR<ShirtModelCreateWithoutOrderItemInput, ShirtModelUncheckedCreateWithoutOrderItemInput>
  }

  export type Size_shirtCreateWithoutOrderItemInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantCreateNestedManyWithoutSize_shInput
    Items_vip?: Items_vipCreateNestedManyWithoutSize_shInput
  }

  export type Size_shirtUncheckedCreateWithoutOrderItemInput = {
    shirtId?: string
    size: string
    s_width: number
    s_high: number
    createdAt?: Date | string
    point?: number | null
    updatedAt?: Date | string | null
    participant?: ParticipantUncheckedCreateNestedManyWithoutSize_shInput
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutSize_shInput
  }

  export type Size_shirtCreateOrConnectWithoutOrderItemInput = {
    where: Size_shirtWhereUniqueInput
    create: XOR<Size_shirtCreateWithoutOrderItemInput, Size_shirtUncheckedCreateWithoutOrderItemInput>
  }

  export type UserSaleShirtUpsertWithoutOrderItemInput = {
    update: XOR<UserSaleShirtUpdateWithoutOrderItemInput, UserSaleShirtUncheckedUpdateWithoutOrderItemInput>
    create: XOR<UserSaleShirtCreateWithoutOrderItemInput, UserSaleShirtUncheckedCreateWithoutOrderItemInput>
    where?: UserSaleShirtWhereInput
  }

  export type UserSaleShirtUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: UserSaleShirtWhereInput
    data: XOR<UserSaleShirtUpdateWithoutOrderItemInput, UserSaleShirtUncheckedUpdateWithoutOrderItemInput>
  }

  export type UserSaleShirtUpdateWithoutOrderItemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSaleShirtUncheckedUpdateWithoutOrderItemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sh_collection_method?: StringFieldUpdateOperationsInput | string
    delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    payment?: BoolFieldUpdateOperationsInput | boolean
    transferFile?: StringFieldUpdateOperationsInput | string
    ems_tracking?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShirtModelUpsertWithoutOrderItemInput = {
    update: XOR<ShirtModelUpdateWithoutOrderItemInput, ShirtModelUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ShirtModelCreateWithoutOrderItemInput, ShirtModelUncheckedCreateWithoutOrderItemInput>
    where?: ShirtModelWhereInput
  }

  export type ShirtModelUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ShirtModelWhereInput
    data: XOR<ShirtModelUpdateWithoutOrderItemInput, ShirtModelUncheckedUpdateWithoutOrderItemInput>
  }

  export type ShirtModelUpdateWithoutOrderItemInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShirtModelUncheckedUpdateWithoutOrderItemInput = {
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Size_shirtUpsertWithoutOrderItemInput = {
    update: XOR<Size_shirtUpdateWithoutOrderItemInput, Size_shirtUncheckedUpdateWithoutOrderItemInput>
    create: XOR<Size_shirtCreateWithoutOrderItemInput, Size_shirtUncheckedCreateWithoutOrderItemInput>
    where?: Size_shirtWhereInput
  }

  export type Size_shirtUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: Size_shirtWhereInput
    data: XOR<Size_shirtUpdateWithoutOrderItemInput, Size_shirtUncheckedUpdateWithoutOrderItemInput>
  }

  export type Size_shirtUpdateWithoutOrderItemInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateManyWithoutSize_shNestedInput
    Items_vip?: Items_vipUpdateManyWithoutSize_shNestedInput
  }

  export type Size_shirtUncheckedUpdateWithoutOrderItemInput = {
    shirtId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    s_width?: IntFieldUpdateOperationsInput | number
    s_high?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUncheckedUpdateManyWithoutSize_shNestedInput
    Items_vip?: Items_vipUncheckedUpdateManyWithoutSize_shNestedInput
  }

  export type ParticipantCreateWithoutCheckPointInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalCreateNestedManyWithoutParticipantInput
    size_sh: Size_shirtCreateNestedOneWithoutParticipantInput
    Items_vip?: Items_vipCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutCheckPointInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    sizeId: string
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
    Animal?: AnimalUncheckedCreateNestedManyWithoutParticipantInput
    Items_vip?: Items_vipUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutCheckPointInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutCheckPointInput, ParticipantUncheckedCreateWithoutCheckPointInput>
  }

  export type ParticipantUpsertWithoutCheckPointInput = {
    update: XOR<ParticipantUpdateWithoutCheckPointInput, ParticipantUncheckedUpdateWithoutCheckPointInput>
    create: XOR<ParticipantCreateWithoutCheckPointInput, ParticipantUncheckedCreateWithoutCheckPointInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutCheckPointInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutCheckPointInput, ParticipantUncheckedUpdateWithoutCheckPointInput>
  }

  export type ParticipantUpdateWithoutCheckPointInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUpdateManyWithoutParticipantNestedInput
    size_sh?: Size_shirtUpdateOneRequiredWithoutParticipantNestedInput
    Items_vip?: Items_vipUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutCheckPointInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    sizeId?: StringFieldUpdateOperationsInput | string
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUncheckedUpdateManyWithoutParticipantNestedInput
    Items_vip?: Items_vipUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManySize_shInput = {
    participantId?: string
    nameBib?: string | null
    numberBib?: string | null
    payment?: boolean
    firstName: string
    lastName: string
    email: string
    phone: string
    sex: string
    age?: string | null
    transferFile: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    year?: string | null
    address?: string | null
    typeBib?: string | null
  }

  export type Items_vipCreateManySize_shInput = {
    itemId?: string
    participantId: string
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemCreateManySizeInput = {
    orderId?: string
    userSaleshirtId: string
    shirtmodelId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ParticipantUpdateWithoutSize_shInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUpdateManyWithoutParticipantNestedInput
    Items_vip?: Items_vipUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutSize_shInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
    Animal?: AnimalUncheckedUpdateManyWithoutParticipantNestedInput
    Items_vip?: Items_vipUncheckedUpdateManyWithoutParticipantNestedInput
    CheckPoint?: CheckPointUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutSize_shInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    nameBib?: NullableStringFieldUpdateOperationsInput | string | null
    numberBib?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    age?: NullableStringFieldUpdateOperationsInput | string | null
    transferFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    typeBib?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Items_vipUpdateWithoutSize_shInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participant?: ParticipantUpdateOneRequiredWithoutItems_vipNestedInput
  }

  export type Items_vipUncheckedUpdateWithoutSize_shInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Items_vipUncheckedUpdateManyWithoutSize_shInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUpdateWithoutSizeInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSaleshirt?: UserSaleShirtUpdateOneRequiredWithoutOrderItemNestedInput
    shirtmodel?: ShirtModelUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutSizeInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyWithoutSizeInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnimalCreateManyParticipantInput = {
    animalId?: string
    name: string
    weight: string
    sex: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    fancys?: boolean
    breed: string
  }

  export type Items_vipCreateManyParticipantInput = {
    itemId?: string
    sizeId?: string | null
    items: string
    model_shirt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AnimalUpdateWithoutParticipantInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUncheckedUpdateWithoutParticipantInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUncheckedUpdateManyWithoutParticipantInput = {
    animalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fancys?: BoolFieldUpdateOperationsInput | boolean
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type Items_vipUpdateWithoutParticipantInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size_sh?: Size_shirtUpdateOneWithoutItems_vipNestedInput
  }

  export type Items_vipUncheckedUpdateWithoutParticipantInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    sizeId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Items_vipUncheckedUpdateManyWithoutParticipantInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    sizeId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: StringFieldUpdateOperationsInput | string
    model_shirt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyShirtmodelInput = {
    orderId?: string
    userSaleshirtId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemUpdateWithoutShirtmodelInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSaleshirt?: UserSaleShirtUpdateOneRequiredWithoutOrderItemNestedInput
    size?: Size_shirtUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutShirtmodelInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyWithoutShirtmodelInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userSaleshirtId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateManyUserSaleshirtInput = {
    orderId?: string
    shirtmodelId: string
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type OrderItemUpdateWithoutUserSaleshirtInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shirtmodel?: ShirtModelUpdateOneRequiredWithoutOrderItemNestedInput
    size?: Size_shirtUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutUserSaleshirtInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemUncheckedUpdateManyWithoutUserSaleshirtInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    shirtmodelId?: StringFieldUpdateOperationsInput | string
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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