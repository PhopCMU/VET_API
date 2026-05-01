
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
 * *
 *  * โมเดลสำหรับผู้ใช้ (User)
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JobPosition
 * 
 */
export type JobPosition = $Result.DefaultSelection<Prisma.$JobPositionPayload>
/**
 * Model MainDepartment
 * *
 *  * Department: หน่วยงาน
 */
export type MainDepartment = $Result.DefaultSelection<Prisma.$MainDepartmentPayload>
/**
 * Model SubDepartment
 * 
 */
export type SubDepartment = $Result.DefaultSelection<Prisma.$SubDepartmentPayload>
/**
 * Model DepartmentMembership
 * *
 *  * ความสัมพันธ์: ผู้ใช้เป็นสมาชิกของแผนก
 */
export type DepartmentMembership = $Result.DefaultSelection<Prisma.$DepartmentMembershipPayload>
/**
 * Model Project
 * *
 *  * โมเดลสำหรับโปรเจกต์ (Project)
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Menu
 * *
 *  * โมเดลสำหรับเมนูหลัก (Menu)
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model SubMenu
 * *
 *  * โมเดลสำหรับเมนูย่อย (SubMenu)
 */
export type SubMenu = $Result.DefaultSelection<Prisma.$SubMenuPayload>
/**
 * Model UserPermission
 * *
 *  * โมเดลหลัก: สิทธิ์ของผู้ใช้ต่อ Submenu
 */
export type UserPermission = $Result.DefaultSelection<Prisma.$UserPermissionPayload>
/**
 * Model UserSuperAdmin
 * 
 */
export type UserSuperAdmin = $Result.DefaultSelection<Prisma.$UserSuperAdminPayload>
/**
 * Model PermissionDepartment
 * *
 *  * สำหรับระบุว่าสิทธิ์นี้ใช้กับแผนกใดบ้าง (ถ้า accessScope = BY_DEPARTMENT)
 */
export type PermissionDepartment = $Result.DefaultSelection<Prisma.$PermissionDepartmentPayload>
/**
 * Model ScbPayments
 * 
 */
export type ScbPayments = $Result.DefaultSelection<Prisma.$ScbPaymentsPayload>
/**
 * Model ScbSlipVerification
 * 
 */
export type ScbSlipVerification = $Result.DefaultSelection<Prisma.$ScbSlipVerificationPayload>
/**
 * Model ScbVoid
 * 
 */
export type ScbVoid = $Result.DefaultSelection<Prisma.$ScbVoidPayload>
/**
 * Model VisitorBlock
 * 
 */
export type VisitorBlock = $Result.DefaultSelection<Prisma.$VisitorBlockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccessScope: {
  ALL: 'ALL',
  BY_DEPARTMENT: 'BY_DEPARTMENT',
  BY_RESPONSIBILITY: 'BY_RESPONSIBILITY',
  RESTRICTED: 'RESTRICTED'
};

export type AccessScope = (typeof AccessScope)[keyof typeof AccessScope]

}

export type AccessScope = $Enums.AccessScope

export const AccessScope: typeof $Enums.AccessScope

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
   * `prisma.jobPosition`: Exposes CRUD operations for the **JobPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPositions
    * const jobPositions = await prisma.jobPosition.findMany()
    * ```
    */
  get jobPosition(): Prisma.JobPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mainDepartment`: Exposes CRUD operations for the **MainDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainDepartments
    * const mainDepartments = await prisma.mainDepartment.findMany()
    * ```
    */
  get mainDepartment(): Prisma.MainDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subDepartment`: Exposes CRUD operations for the **SubDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubDepartments
    * const subDepartments = await prisma.subDepartment.findMany()
    * ```
    */
  get subDepartment(): Prisma.SubDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departmentMembership`: Exposes CRUD operations for the **DepartmentMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartmentMemberships
    * const departmentMemberships = await prisma.departmentMembership.findMany()
    * ```
    */
  get departmentMembership(): Prisma.DepartmentMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subMenu`: Exposes CRUD operations for the **SubMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubMenus
    * const subMenus = await prisma.subMenu.findMany()
    * ```
    */
  get subMenu(): Prisma.SubMenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPermission`: Exposes CRUD operations for the **UserPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPermissions
    * const userPermissions = await prisma.userPermission.findMany()
    * ```
    */
  get userPermission(): Prisma.UserPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSuperAdmin`: Exposes CRUD operations for the **UserSuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSuperAdmins
    * const userSuperAdmins = await prisma.userSuperAdmin.findMany()
    * ```
    */
  get userSuperAdmin(): Prisma.UserSuperAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionDepartment`: Exposes CRUD operations for the **PermissionDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionDepartments
    * const permissionDepartments = await prisma.permissionDepartment.findMany()
    * ```
    */
  get permissionDepartment(): Prisma.PermissionDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scbPayments`: Exposes CRUD operations for the **ScbPayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScbPayments
    * const scbPayments = await prisma.scbPayments.findMany()
    * ```
    */
  get scbPayments(): Prisma.ScbPaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scbSlipVerification`: Exposes CRUD operations for the **ScbSlipVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScbSlipVerifications
    * const scbSlipVerifications = await prisma.scbSlipVerification.findMany()
    * ```
    */
  get scbSlipVerification(): Prisma.ScbSlipVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scbVoid`: Exposes CRUD operations for the **ScbVoid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScbVoids
    * const scbVoids = await prisma.scbVoid.findMany()
    * ```
    */
  get scbVoid(): Prisma.ScbVoidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorBlock`: Exposes CRUD operations for the **VisitorBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorBlocks
    * const visitorBlocks = await prisma.visitorBlock.findMany()
    * ```
    */
  get visitorBlock(): Prisma.VisitorBlockDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    JobPosition: 'JobPosition',
    MainDepartment: 'MainDepartment',
    SubDepartment: 'SubDepartment',
    DepartmentMembership: 'DepartmentMembership',
    Project: 'Project',
    Menu: 'Menu',
    SubMenu: 'SubMenu',
    UserPermission: 'UserPermission',
    UserSuperAdmin: 'UserSuperAdmin',
    PermissionDepartment: 'PermissionDepartment',
    ScbPayments: 'ScbPayments',
    ScbSlipVerification: 'ScbSlipVerification',
    ScbVoid: 'ScbVoid',
    VisitorBlock: 'VisitorBlock'
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
      modelProps: "user" | "jobPosition" | "mainDepartment" | "subDepartment" | "departmentMembership" | "project" | "menu" | "subMenu" | "userPermission" | "userSuperAdmin" | "permissionDepartment" | "scbPayments" | "scbSlipVerification" | "scbVoid" | "visitorBlock"
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
      JobPosition: {
        payload: Prisma.$JobPositionPayload<ExtArgs>
        fields: Prisma.JobPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          findFirst: {
            args: Prisma.JobPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          findMany: {
            args: Prisma.JobPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>[]
          }
          create: {
            args: Prisma.JobPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          createMany: {
            args: Prisma.JobPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>[]
          }
          delete: {
            args: Prisma.JobPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          update: {
            args: Prisma.JobPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          deleteMany: {
            args: Prisma.JobPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>[]
          }
          upsert: {
            args: Prisma.JobPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPositionPayload>
          }
          aggregate: {
            args: Prisma.JobPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPosition>
          }
          groupBy: {
            args: Prisma.JobPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPositionCountArgs<ExtArgs>
            result: $Utils.Optional<JobPositionCountAggregateOutputType> | number
          }
        }
      }
      MainDepartment: {
        payload: Prisma.$MainDepartmentPayload<ExtArgs>
        fields: Prisma.MainDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          findFirst: {
            args: Prisma.MainDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          findMany: {
            args: Prisma.MainDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>[]
          }
          create: {
            args: Prisma.MainDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          createMany: {
            args: Prisma.MainDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>[]
          }
          delete: {
            args: Prisma.MainDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          update: {
            args: Prisma.MainDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.MainDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MainDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.MainDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainDepartmentPayload>
          }
          aggregate: {
            args: Prisma.MainDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainDepartment>
          }
          groupBy: {
            args: Prisma.MainDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<MainDepartmentCountAggregateOutputType> | number
          }
        }
      }
      SubDepartment: {
        payload: Prisma.$SubDepartmentPayload<ExtArgs>
        fields: Prisma.SubDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          findFirst: {
            args: Prisma.SubDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          findMany: {
            args: Prisma.SubDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>[]
          }
          create: {
            args: Prisma.SubDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          createMany: {
            args: Prisma.SubDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>[]
          }
          delete: {
            args: Prisma.SubDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          update: {
            args: Prisma.SubDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.SubDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.SubDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubDepartmentPayload>
          }
          aggregate: {
            args: Prisma.SubDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubDepartment>
          }
          groupBy: {
            args: Prisma.SubDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<SubDepartmentCountAggregateOutputType> | number
          }
        }
      }
      DepartmentMembership: {
        payload: Prisma.$DepartmentMembershipPayload<ExtArgs>
        fields: Prisma.DepartmentMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          findFirst: {
            args: Prisma.DepartmentMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          findMany: {
            args: Prisma.DepartmentMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>[]
          }
          create: {
            args: Prisma.DepartmentMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          createMany: {
            args: Prisma.DepartmentMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>[]
          }
          delete: {
            args: Prisma.DepartmentMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          update: {
            args: Prisma.DepartmentMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentMembershipPayload>
          }
          aggregate: {
            args: Prisma.DepartmentMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartmentMembership>
          }
          groupBy: {
            args: Prisma.DepartmentMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentMembershipCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      SubMenu: {
        payload: Prisma.$SubMenuPayload<ExtArgs>
        fields: Prisma.SubMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findFirst: {
            args: Prisma.SubMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findMany: {
            args: Prisma.SubMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>[]
          }
          create: {
            args: Prisma.SubMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          createMany: {
            args: Prisma.SubMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubMenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>[]
          }
          delete: {
            args: Prisma.SubMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          update: {
            args: Prisma.SubMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          deleteMany: {
            args: Prisma.SubMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubMenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>[]
          }
          upsert: {
            args: Prisma.SubMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          aggregate: {
            args: Prisma.SubMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubMenu>
          }
          groupBy: {
            args: Prisma.SubMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubMenuCountArgs<ExtArgs>
            result: $Utils.Optional<SubMenuCountAggregateOutputType> | number
          }
        }
      }
      UserPermission: {
        payload: Prisma.$UserPermissionPayload<ExtArgs>
        fields: Prisma.UserPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findFirst: {
            args: Prisma.UserPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findMany: {
            args: Prisma.UserPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          create: {
            args: Prisma.UserPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          createMany: {
            args: Prisma.UserPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          delete: {
            args: Prisma.UserPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          update: {
            args: Prisma.UserPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          upsert: {
            args: Prisma.UserPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          aggregate: {
            args: Prisma.UserPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPermission>
          }
          groupBy: {
            args: Prisma.UserPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionCountAggregateOutputType> | number
          }
        }
      }
      UserSuperAdmin: {
        payload: Prisma.$UserSuperAdminPayload<ExtArgs>
        fields: Prisma.UserSuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          findFirst: {
            args: Prisma.UserSuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          findMany: {
            args: Prisma.UserSuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>[]
          }
          create: {
            args: Prisma.UserSuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          createMany: {
            args: Prisma.UserSuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSuperAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>[]
          }
          delete: {
            args: Prisma.UserSuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          update: {
            args: Prisma.UserSuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.UserSuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSuperAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>[]
          }
          upsert: {
            args: Prisma.UserSuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSuperAdminPayload>
          }
          aggregate: {
            args: Prisma.UserSuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSuperAdmin>
          }
          groupBy: {
            args: Prisma.UserSuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<UserSuperAdminCountAggregateOutputType> | number
          }
        }
      }
      PermissionDepartment: {
        payload: Prisma.$PermissionDepartmentPayload<ExtArgs>
        fields: Prisma.PermissionDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          findFirst: {
            args: Prisma.PermissionDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          findMany: {
            args: Prisma.PermissionDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>[]
          }
          create: {
            args: Prisma.PermissionDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          createMany: {
            args: Prisma.PermissionDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>[]
          }
          delete: {
            args: Prisma.PermissionDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          update: {
            args: Prisma.PermissionDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.PermissionDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionDepartmentPayload>
          }
          aggregate: {
            args: Prisma.PermissionDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionDepartment>
          }
          groupBy: {
            args: Prisma.PermissionDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionDepartmentCountAggregateOutputType> | number
          }
        }
      }
      ScbPayments: {
        payload: Prisma.$ScbPaymentsPayload<ExtArgs>
        fields: Prisma.ScbPaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScbPaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScbPaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          findFirst: {
            args: Prisma.ScbPaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScbPaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          findMany: {
            args: Prisma.ScbPaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>[]
          }
          create: {
            args: Prisma.ScbPaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          createMany: {
            args: Prisma.ScbPaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScbPaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>[]
          }
          delete: {
            args: Prisma.ScbPaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          update: {
            args: Prisma.ScbPaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          deleteMany: {
            args: Prisma.ScbPaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScbPaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScbPaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>[]
          }
          upsert: {
            args: Prisma.ScbPaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbPaymentsPayload>
          }
          aggregate: {
            args: Prisma.ScbPaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScbPayments>
          }
          groupBy: {
            args: Prisma.ScbPaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScbPaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScbPaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<ScbPaymentsCountAggregateOutputType> | number
          }
        }
      }
      ScbSlipVerification: {
        payload: Prisma.$ScbSlipVerificationPayload<ExtArgs>
        fields: Prisma.ScbSlipVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScbSlipVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScbSlipVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          findFirst: {
            args: Prisma.ScbSlipVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScbSlipVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          findMany: {
            args: Prisma.ScbSlipVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>[]
          }
          create: {
            args: Prisma.ScbSlipVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          createMany: {
            args: Prisma.ScbSlipVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScbSlipVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>[]
          }
          delete: {
            args: Prisma.ScbSlipVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          update: {
            args: Prisma.ScbSlipVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          deleteMany: {
            args: Prisma.ScbSlipVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScbSlipVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScbSlipVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>[]
          }
          upsert: {
            args: Prisma.ScbSlipVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbSlipVerificationPayload>
          }
          aggregate: {
            args: Prisma.ScbSlipVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScbSlipVerification>
          }
          groupBy: {
            args: Prisma.ScbSlipVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScbSlipVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScbSlipVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<ScbSlipVerificationCountAggregateOutputType> | number
          }
        }
      }
      ScbVoid: {
        payload: Prisma.$ScbVoidPayload<ExtArgs>
        fields: Prisma.ScbVoidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScbVoidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScbVoidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          findFirst: {
            args: Prisma.ScbVoidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScbVoidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          findMany: {
            args: Prisma.ScbVoidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>[]
          }
          create: {
            args: Prisma.ScbVoidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          createMany: {
            args: Prisma.ScbVoidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScbVoidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>[]
          }
          delete: {
            args: Prisma.ScbVoidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          update: {
            args: Prisma.ScbVoidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          deleteMany: {
            args: Prisma.ScbVoidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScbVoidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScbVoidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>[]
          }
          upsert: {
            args: Prisma.ScbVoidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScbVoidPayload>
          }
          aggregate: {
            args: Prisma.ScbVoidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScbVoid>
          }
          groupBy: {
            args: Prisma.ScbVoidGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScbVoidGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScbVoidCountArgs<ExtArgs>
            result: $Utils.Optional<ScbVoidCountAggregateOutputType> | number
          }
        }
      }
      VisitorBlock: {
        payload: Prisma.$VisitorBlockPayload<ExtArgs>
        fields: Prisma.VisitorBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          findFirst: {
            args: Prisma.VisitorBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          findMany: {
            args: Prisma.VisitorBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>[]
          }
          create: {
            args: Prisma.VisitorBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          createMany: {
            args: Prisma.VisitorBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>[]
          }
          delete: {
            args: Prisma.VisitorBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          update: {
            args: Prisma.VisitorBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          deleteMany: {
            args: Prisma.VisitorBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>[]
          }
          upsert: {
            args: Prisma.VisitorBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorBlockPayload>
          }
          aggregate: {
            args: Prisma.VisitorBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorBlock>
          }
          groupBy: {
            args: Prisma.VisitorBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorBlockCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorBlockCountAggregateOutputType> | number
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
    user?: UserOmit
    jobPosition?: JobPositionOmit
    mainDepartment?: MainDepartmentOmit
    subDepartment?: SubDepartmentOmit
    departmentMembership?: DepartmentMembershipOmit
    project?: ProjectOmit
    menu?: MenuOmit
    subMenu?: SubMenuOmit
    userPermission?: UserPermissionOmit
    userSuperAdmin?: UserSuperAdminOmit
    permissionDepartment?: PermissionDepartmentOmit
    scbPayments?: ScbPaymentsOmit
    scbSlipVerification?: ScbSlipVerificationOmit
    scbVoid?: ScbVoidOmit
    visitorBlock?: VisitorBlockOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    DepartmentMembership: number
    UserPermission: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DepartmentMembership?: boolean | UserCountOutputTypeCountDepartmentMembershipArgs
    UserPermission?: boolean | UserCountOutputTypeCountUserPermissionArgs
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
  export type UserCountOutputTypeCountDepartmentMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }


  /**
   * Count Type JobPositionCountOutputType
   */

  export type JobPositionCountOutputType = {
    User: number
  }

  export type JobPositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | JobPositionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * JobPositionCountOutputType without action
   */
  export type JobPositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPositionCountOutputType
     */
    select?: JobPositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPositionCountOutputType without action
   */
  export type JobPositionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type MainDepartmentCountOutputType
   */

  export type MainDepartmentCountOutputType = {
    subDepartments: number
  }

  export type MainDepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subDepartments?: boolean | MainDepartmentCountOutputTypeCountSubDepartmentsArgs
  }

  // Custom InputTypes
  /**
   * MainDepartmentCountOutputType without action
   */
  export type MainDepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartmentCountOutputType
     */
    select?: MainDepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainDepartmentCountOutputType without action
   */
  export type MainDepartmentCountOutputTypeCountSubDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubDepartmentWhereInput
  }


  /**
   * Count Type SubDepartmentCountOutputType
   */

  export type SubDepartmentCountOutputType = {
    members: number
    PermissionDepartment: number
  }

  export type SubDepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | SubDepartmentCountOutputTypeCountMembersArgs
    PermissionDepartment?: boolean | SubDepartmentCountOutputTypeCountPermissionDepartmentArgs
  }

  // Custom InputTypes
  /**
   * SubDepartmentCountOutputType without action
   */
  export type SubDepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartmentCountOutputType
     */
    select?: SubDepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubDepartmentCountOutputType without action
   */
  export type SubDepartmentCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentMembershipWhereInput
  }

  /**
   * SubDepartmentCountOutputType without action
   */
  export type SubDepartmentCountOutputTypeCountPermissionDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionDepartmentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    UserPermission: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPermission?: boolean | ProjectCountOutputTypeCountUserPermissionArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    subMenus: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subMenus?: boolean | MenuCountOutputTypeCountSubMenusArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }


  /**
   * Count Type SubMenuCountOutputType
   */

  export type SubMenuCountOutputType = {
    permissions: number
  }

  export type SubMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | SubMenuCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * SubMenuCountOutputType without action
   */
  export type SubMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenuCountOutputType
     */
    select?: SubMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubMenuCountOutputType without action
   */
  export type SubMenuCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }


  /**
   * Count Type UserPermissionCountOutputType
   */

  export type UserPermissionCountOutputType = {
    departments: number
  }

  export type UserPermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | UserPermissionCountOutputTypeCountDepartmentsArgs
  }

  // Custom InputTypes
  /**
   * UserPermissionCountOutputType without action
   */
  export type UserPermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermissionCountOutputType
     */
    select?: UserPermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPermissionCountOutputType without action
   */
  export type UserPermissionCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionDepartmentWhereInput
  }


  /**
   * Count Type ScbPaymentsCountOutputType
   */

  export type ScbPaymentsCountOutputType = {
    ScbSlipVerification: number
    ScbVoid: number
  }

  export type ScbPaymentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScbSlipVerification?: boolean | ScbPaymentsCountOutputTypeCountScbSlipVerificationArgs
    ScbVoid?: boolean | ScbPaymentsCountOutputTypeCountScbVoidArgs
  }

  // Custom InputTypes
  /**
   * ScbPaymentsCountOutputType without action
   */
  export type ScbPaymentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPaymentsCountOutputType
     */
    select?: ScbPaymentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScbPaymentsCountOutputType without action
   */
  export type ScbPaymentsCountOutputTypeCountScbSlipVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScbSlipVerificationWhereInput
  }

  /**
   * ScbPaymentsCountOutputType without action
   */
  export type ScbPaymentsCountOutputTypeCountScbVoidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScbVoidWhereInput
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
    userId: string | null
    cmuitaccount: string | null
    cmuitaccount_name: string | null
    firstname_EN: string | null
    firstname_TH: string | null
    itaccounttype_EN: string | null
    itaccounttype_TH: string | null
    itaccounttype_id: string | null
    lastname_EN: string | null
    lastname_TH: string | null
    organization_code: string | null
    organization_name_EN: string | null
    organization_name_TH: string | null
    organization_vet: string | null
    organization_vet_id: string | null
    prename_EN: string | null
    prename_TH: string | null
    prename_id: string | null
    student_id: string | null
    status_user: string | null
    image: string | null
    jobpositionId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    cmuitaccount: string | null
    cmuitaccount_name: string | null
    firstname_EN: string | null
    firstname_TH: string | null
    itaccounttype_EN: string | null
    itaccounttype_TH: string | null
    itaccounttype_id: string | null
    lastname_EN: string | null
    lastname_TH: string | null
    organization_code: string | null
    organization_name_EN: string | null
    organization_name_TH: string | null
    organization_vet: string | null
    organization_vet_id: string | null
    prename_EN: string | null
    prename_TH: string | null
    prename_id: string | null
    student_id: string | null
    status_user: string | null
    image: string | null
    jobpositionId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    cmuitaccount: number
    cmuitaccount_name: number
    firstname_EN: number
    firstname_TH: number
    itaccounttype_EN: number
    itaccounttype_TH: number
    itaccounttype_id: number
    lastname_EN: number
    lastname_TH: number
    organization_code: number
    organization_name_EN: number
    organization_name_TH: number
    organization_vet: number
    organization_vet_id: number
    prename_EN: number
    prename_TH: number
    prename_id: number
    student_id: number
    status_user: number
    image: number
    jobpositionId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    cmuitaccount?: true
    cmuitaccount_name?: true
    firstname_EN?: true
    firstname_TH?: true
    itaccounttype_EN?: true
    itaccounttype_TH?: true
    itaccounttype_id?: true
    lastname_EN?: true
    lastname_TH?: true
    organization_code?: true
    organization_name_EN?: true
    organization_name_TH?: true
    organization_vet?: true
    organization_vet_id?: true
    prename_EN?: true
    prename_TH?: true
    prename_id?: true
    student_id?: true
    status_user?: true
    image?: true
    jobpositionId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    cmuitaccount?: true
    cmuitaccount_name?: true
    firstname_EN?: true
    firstname_TH?: true
    itaccounttype_EN?: true
    itaccounttype_TH?: true
    itaccounttype_id?: true
    lastname_EN?: true
    lastname_TH?: true
    organization_code?: true
    organization_name_EN?: true
    organization_name_TH?: true
    organization_vet?: true
    organization_vet_id?: true
    prename_EN?: true
    prename_TH?: true
    prename_id?: true
    student_id?: true
    status_user?: true
    image?: true
    jobpositionId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    cmuitaccount?: true
    cmuitaccount_name?: true
    firstname_EN?: true
    firstname_TH?: true
    itaccounttype_EN?: true
    itaccounttype_TH?: true
    itaccounttype_id?: true
    lastname_EN?: true
    lastname_TH?: true
    organization_code?: true
    organization_name_EN?: true
    organization_name_TH?: true
    organization_vet?: true
    organization_vet_id?: true
    prename_EN?: true
    prename_TH?: true
    prename_id?: true
    student_id?: true
    status_user?: true
    image?: true
    jobpositionId?: true
    createAt?: true
    updateAt?: true
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
    userId: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet: string | null
    organization_vet_id: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id: string | null
    status_user: string
    image: string | null
    jobpositionId: string | null
    createAt: Date
    updateAt: Date
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
    userId?: boolean
    cmuitaccount?: boolean
    cmuitaccount_name?: boolean
    firstname_EN?: boolean
    firstname_TH?: boolean
    itaccounttype_EN?: boolean
    itaccounttype_TH?: boolean
    itaccounttype_id?: boolean
    lastname_EN?: boolean
    lastname_TH?: boolean
    organization_code?: boolean
    organization_name_EN?: boolean
    organization_name_TH?: boolean
    organization_vet?: boolean
    organization_vet_id?: boolean
    prename_EN?: boolean
    prename_TH?: boolean
    prename_id?: boolean
    student_id?: boolean
    status_user?: boolean
    image?: boolean
    jobpositionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
    DepartmentMembership?: boolean | User$DepartmentMembershipArgs<ExtArgs>
    UserPermission?: boolean | User$UserPermissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cmuitaccount?: boolean
    cmuitaccount_name?: boolean
    firstname_EN?: boolean
    firstname_TH?: boolean
    itaccounttype_EN?: boolean
    itaccounttype_TH?: boolean
    itaccounttype_id?: boolean
    lastname_EN?: boolean
    lastname_TH?: boolean
    organization_code?: boolean
    organization_name_EN?: boolean
    organization_name_TH?: boolean
    organization_vet?: boolean
    organization_vet_id?: boolean
    prename_EN?: boolean
    prename_TH?: boolean
    prename_id?: boolean
    student_id?: boolean
    status_user?: boolean
    image?: boolean
    jobpositionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cmuitaccount?: boolean
    cmuitaccount_name?: boolean
    firstname_EN?: boolean
    firstname_TH?: boolean
    itaccounttype_EN?: boolean
    itaccounttype_TH?: boolean
    itaccounttype_id?: boolean
    lastname_EN?: boolean
    lastname_TH?: boolean
    organization_code?: boolean
    organization_name_EN?: boolean
    organization_name_TH?: boolean
    organization_vet?: boolean
    organization_vet_id?: boolean
    prename_EN?: boolean
    prename_TH?: boolean
    prename_id?: boolean
    student_id?: boolean
    status_user?: boolean
    image?: boolean
    jobpositionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    cmuitaccount?: boolean
    cmuitaccount_name?: boolean
    firstname_EN?: boolean
    firstname_TH?: boolean
    itaccounttype_EN?: boolean
    itaccounttype_TH?: boolean
    itaccounttype_id?: boolean
    lastname_EN?: boolean
    lastname_TH?: boolean
    organization_code?: boolean
    organization_name_EN?: boolean
    organization_name_TH?: boolean
    organization_vet?: boolean
    organization_vet_id?: boolean
    prename_EN?: boolean
    prename_TH?: boolean
    prename_id?: boolean
    student_id?: boolean
    status_user?: boolean
    image?: boolean
    jobpositionId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "cmuitaccount" | "cmuitaccount_name" | "firstname_EN" | "firstname_TH" | "itaccounttype_EN" | "itaccounttype_TH" | "itaccounttype_id" | "lastname_EN" | "lastname_TH" | "organization_code" | "organization_name_EN" | "organization_name_TH" | "organization_vet" | "organization_vet_id" | "prename_EN" | "prename_TH" | "prename_id" | "student_id" | "status_user" | "image" | "jobpositionId" | "createAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
    DepartmentMembership?: boolean | User$DepartmentMembershipArgs<ExtArgs>
    UserPermission?: boolean | User$UserPermissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobposition?: boolean | User$jobpositionArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobposition: Prisma.$JobPositionPayload<ExtArgs> | null
      DepartmentMembership: Prisma.$DepartmentMembershipPayload<ExtArgs>[]
      UserPermission: Prisma.$UserPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      cmuitaccount: string
      cmuitaccount_name: string
      firstname_EN: string
      firstname_TH: string
      itaccounttype_EN: string
      itaccounttype_TH: string
      itaccounttype_id: string
      lastname_EN: string
      lastname_TH: string
      organization_code: string
      organization_name_EN: string
      organization_name_TH: string
      organization_vet: string | null
      organization_vet_id: string | null
      prename_EN: string
      prename_TH: string
      prename_id: string
      student_id: string | null
      status_user: string
      image: string | null
      jobpositionId: string | null
      createAt: Date
      updateAt: Date
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
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
    jobposition<T extends User$jobpositionArgs<ExtArgs> = {}>(args?: Subset<T, User$jobpositionArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DepartmentMembership<T extends User$DepartmentMembershipArgs<ExtArgs> = {}>(args?: Subset<T, User$DepartmentMembershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserPermission<T extends User$UserPermissionArgs<ExtArgs> = {}>(args?: Subset<T, User$UserPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly cmuitaccount: FieldRef<"User", 'String'>
    readonly cmuitaccount_name: FieldRef<"User", 'String'>
    readonly firstname_EN: FieldRef<"User", 'String'>
    readonly firstname_TH: FieldRef<"User", 'String'>
    readonly itaccounttype_EN: FieldRef<"User", 'String'>
    readonly itaccounttype_TH: FieldRef<"User", 'String'>
    readonly itaccounttype_id: FieldRef<"User", 'String'>
    readonly lastname_EN: FieldRef<"User", 'String'>
    readonly lastname_TH: FieldRef<"User", 'String'>
    readonly organization_code: FieldRef<"User", 'String'>
    readonly organization_name_EN: FieldRef<"User", 'String'>
    readonly organization_name_TH: FieldRef<"User", 'String'>
    readonly organization_vet: FieldRef<"User", 'String'>
    readonly organization_vet_id: FieldRef<"User", 'String'>
    readonly prename_EN: FieldRef<"User", 'String'>
    readonly prename_TH: FieldRef<"User", 'String'>
    readonly prename_id: FieldRef<"User", 'String'>
    readonly student_id: FieldRef<"User", 'String'>
    readonly status_user: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly jobpositionId: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.jobposition
   */
  export type User$jobpositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    where?: JobPositionWhereInput
  }

  /**
   * User.DepartmentMembership
   */
  export type User$DepartmentMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    where?: DepartmentMembershipWhereInput
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    cursor?: DepartmentMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentMembershipScalarFieldEnum | DepartmentMembershipScalarFieldEnum[]
  }

  /**
   * User.UserPermission
   */
  export type User$UserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
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
   * Model JobPosition
   */

  export type AggregateJobPosition = {
    _count: JobPositionCountAggregateOutputType | null
    _min: JobPositionMinAggregateOutputType | null
    _max: JobPositionMaxAggregateOutputType | null
  }

  export type JobPositionMinAggregateOutputType = {
    jobpositionId: string | null
    name: string | null
    passposition: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type JobPositionMaxAggregateOutputType = {
    jobpositionId: string | null
    name: string | null
    passposition: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type JobPositionCountAggregateOutputType = {
    jobpositionId: number
    name: number
    passposition: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type JobPositionMinAggregateInputType = {
    jobpositionId?: true
    name?: true
    passposition?: true
    createAt?: true
    updateAt?: true
  }

  export type JobPositionMaxAggregateInputType = {
    jobpositionId?: true
    name?: true
    passposition?: true
    createAt?: true
    updateAt?: true
  }

  export type JobPositionCountAggregateInputType = {
    jobpositionId?: true
    name?: true
    passposition?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type JobPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosition to aggregate.
     */
    where?: JobPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPositions to fetch.
     */
    orderBy?: JobPositionOrderByWithRelationInput | JobPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPositions
    **/
    _count?: true | JobPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPositionMaxAggregateInputType
  }

  export type GetJobPositionAggregateType<T extends JobPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosition[P]>
      : GetScalarType<T[P], AggregateJobPosition[P]>
  }




  export type JobPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPositionWhereInput
    orderBy?: JobPositionOrderByWithAggregationInput | JobPositionOrderByWithAggregationInput[]
    by: JobPositionScalarFieldEnum[] | JobPositionScalarFieldEnum
    having?: JobPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPositionCountAggregateInputType | true
    _min?: JobPositionMinAggregateInputType
    _max?: JobPositionMaxAggregateInputType
  }

  export type JobPositionGroupByOutputType = {
    jobpositionId: string
    name: string
    passposition: string
    createAt: Date
    updateAt: Date
    _count: JobPositionCountAggregateOutputType | null
    _min: JobPositionMinAggregateOutputType | null
    _max: JobPositionMaxAggregateOutputType | null
  }

  type GetJobPositionGroupByPayload<T extends JobPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPositionGroupByOutputType[P]>
            : GetScalarType<T[P], JobPositionGroupByOutputType[P]>
        }
      >
    >


  export type JobPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobpositionId?: boolean
    name?: boolean
    passposition?: boolean
    createAt?: boolean
    updateAt?: boolean
    User?: boolean | JobPosition$UserArgs<ExtArgs>
    _count?: boolean | JobPositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosition"]>

  export type JobPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobpositionId?: boolean
    name?: boolean
    passposition?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["jobPosition"]>

  export type JobPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobpositionId?: boolean
    name?: boolean
    passposition?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["jobPosition"]>

  export type JobPositionSelectScalar = {
    jobpositionId?: boolean
    name?: boolean
    passposition?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type JobPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jobpositionId" | "name" | "passposition" | "createAt" | "updateAt", ExtArgs["result"]["jobPosition"]>
  export type JobPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | JobPosition$UserArgs<ExtArgs>
    _count?: boolean | JobPositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosition"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      jobpositionId: string
      name: string
      passposition: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["jobPosition"]>
    composites: {}
  }

  type JobPositionGetPayload<S extends boolean | null | undefined | JobPositionDefaultArgs> = $Result.GetResult<Prisma.$JobPositionPayload, S>

  type JobPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPositionCountAggregateInputType | true
    }

  export interface JobPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosition'], meta: { name: 'JobPosition' } }
    /**
     * Find zero or one JobPosition that matches the filter.
     * @param {JobPositionFindUniqueArgs} args - Arguments to find a JobPosition
     * @example
     * // Get one JobPosition
     * const jobPosition = await prisma.jobPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPositionFindUniqueArgs>(args: SelectSubset<T, JobPositionFindUniqueArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPositionFindUniqueOrThrowArgs} args - Arguments to find a JobPosition
     * @example
     * // Get one JobPosition
     * const jobPosition = await prisma.jobPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionFindFirstArgs} args - Arguments to find a JobPosition
     * @example
     * // Get one JobPosition
     * const jobPosition = await prisma.jobPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPositionFindFirstArgs>(args?: SelectSubset<T, JobPositionFindFirstArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionFindFirstOrThrowArgs} args - Arguments to find a JobPosition
     * @example
     * // Get one JobPosition
     * const jobPosition = await prisma.jobPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPositions
     * const jobPositions = await prisma.jobPosition.findMany()
     * 
     * // Get first 10 JobPositions
     * const jobPositions = await prisma.jobPosition.findMany({ take: 10 })
     * 
     * // Only select the `jobpositionId`
     * const jobPositionWithJobpositionIdOnly = await prisma.jobPosition.findMany({ select: { jobpositionId: true } })
     * 
     */
    findMany<T extends JobPositionFindManyArgs>(args?: SelectSubset<T, JobPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPosition.
     * @param {JobPositionCreateArgs} args - Arguments to create a JobPosition.
     * @example
     * // Create one JobPosition
     * const JobPosition = await prisma.jobPosition.create({
     *   data: {
     *     // ... data to create a JobPosition
     *   }
     * })
     * 
     */
    create<T extends JobPositionCreateArgs>(args: SelectSubset<T, JobPositionCreateArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPositions.
     * @param {JobPositionCreateManyArgs} args - Arguments to create many JobPositions.
     * @example
     * // Create many JobPositions
     * const jobPosition = await prisma.jobPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPositionCreateManyArgs>(args?: SelectSubset<T, JobPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPositions and returns the data saved in the database.
     * @param {JobPositionCreateManyAndReturnArgs} args - Arguments to create many JobPositions.
     * @example
     * // Create many JobPositions
     * const jobPosition = await prisma.jobPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPositions and only return the `jobpositionId`
     * const jobPositionWithJobpositionIdOnly = await prisma.jobPosition.createManyAndReturn({
     *   select: { jobpositionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPosition.
     * @param {JobPositionDeleteArgs} args - Arguments to delete one JobPosition.
     * @example
     * // Delete one JobPosition
     * const JobPosition = await prisma.jobPosition.delete({
     *   where: {
     *     // ... filter to delete one JobPosition
     *   }
     * })
     * 
     */
    delete<T extends JobPositionDeleteArgs>(args: SelectSubset<T, JobPositionDeleteArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPosition.
     * @param {JobPositionUpdateArgs} args - Arguments to update one JobPosition.
     * @example
     * // Update one JobPosition
     * const jobPosition = await prisma.jobPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPositionUpdateArgs>(args: SelectSubset<T, JobPositionUpdateArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPositions.
     * @param {JobPositionDeleteManyArgs} args - Arguments to filter JobPositions to delete.
     * @example
     * // Delete a few JobPositions
     * const { count } = await prisma.jobPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPositionDeleteManyArgs>(args?: SelectSubset<T, JobPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPositions
     * const jobPosition = await prisma.jobPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPositionUpdateManyArgs>(args: SelectSubset<T, JobPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPositions and returns the data updated in the database.
     * @param {JobPositionUpdateManyAndReturnArgs} args - Arguments to update many JobPositions.
     * @example
     * // Update many JobPositions
     * const jobPosition = await prisma.jobPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPositions and only return the `jobpositionId`
     * const jobPositionWithJobpositionIdOnly = await prisma.jobPosition.updateManyAndReturn({
     *   select: { jobpositionId: true },
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
    updateManyAndReturn<T extends JobPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPosition.
     * @param {JobPositionUpsertArgs} args - Arguments to update or create a JobPosition.
     * @example
     * // Update or create a JobPosition
     * const jobPosition = await prisma.jobPosition.upsert({
     *   create: {
     *     // ... data to create a JobPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosition we want to update
     *   }
     * })
     */
    upsert<T extends JobPositionUpsertArgs>(args: SelectSubset<T, JobPositionUpsertArgs<ExtArgs>>): Prisma__JobPositionClient<$Result.GetResult<Prisma.$JobPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionCountArgs} args - Arguments to filter JobPositions to count.
     * @example
     * // Count the number of JobPositions
     * const count = await prisma.jobPosition.count({
     *   where: {
     *     // ... the filter for the JobPositions we want to count
     *   }
     * })
    **/
    count<T extends JobPositionCountArgs>(
      args?: Subset<T, JobPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPositionAggregateArgs>(args: Subset<T, JobPositionAggregateArgs>): Prisma.PrismaPromise<GetJobPositionAggregateType<T>>

    /**
     * Group by JobPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPositionGroupByArgs} args - Group by arguments.
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
      T extends JobPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPositionGroupByArgs['orderBy'] }
        : { orderBy?: JobPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosition model
   */
  readonly fields: JobPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends JobPosition$UserArgs<ExtArgs> = {}>(args?: Subset<T, JobPosition$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobPosition model
   */
  interface JobPositionFieldRefs {
    readonly jobpositionId: FieldRef<"JobPosition", 'String'>
    readonly name: FieldRef<"JobPosition", 'String'>
    readonly passposition: FieldRef<"JobPosition", 'String'>
    readonly createAt: FieldRef<"JobPosition", 'DateTime'>
    readonly updateAt: FieldRef<"JobPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPosition findUnique
   */
  export type JobPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter, which JobPosition to fetch.
     */
    where: JobPositionWhereUniqueInput
  }

  /**
   * JobPosition findUniqueOrThrow
   */
  export type JobPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter, which JobPosition to fetch.
     */
    where: JobPositionWhereUniqueInput
  }

  /**
   * JobPosition findFirst
   */
  export type JobPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter, which JobPosition to fetch.
     */
    where?: JobPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPositions to fetch.
     */
    orderBy?: JobPositionOrderByWithRelationInput | JobPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPositions.
     */
    cursor?: JobPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPositions.
     */
    distinct?: JobPositionScalarFieldEnum | JobPositionScalarFieldEnum[]
  }

  /**
   * JobPosition findFirstOrThrow
   */
  export type JobPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter, which JobPosition to fetch.
     */
    where?: JobPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPositions to fetch.
     */
    orderBy?: JobPositionOrderByWithRelationInput | JobPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPositions.
     */
    cursor?: JobPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPositions.
     */
    distinct?: JobPositionScalarFieldEnum | JobPositionScalarFieldEnum[]
  }

  /**
   * JobPosition findMany
   */
  export type JobPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter, which JobPositions to fetch.
     */
    where?: JobPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPositions to fetch.
     */
    orderBy?: JobPositionOrderByWithRelationInput | JobPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPositions.
     */
    cursor?: JobPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPositions.
     */
    skip?: number
    distinct?: JobPositionScalarFieldEnum | JobPositionScalarFieldEnum[]
  }

  /**
   * JobPosition create
   */
  export type JobPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosition.
     */
    data: XOR<JobPositionCreateInput, JobPositionUncheckedCreateInput>
  }

  /**
   * JobPosition createMany
   */
  export type JobPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPositions.
     */
    data: JobPositionCreateManyInput | JobPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosition createManyAndReturn
   */
  export type JobPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * The data used to create many JobPositions.
     */
    data: JobPositionCreateManyInput | JobPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosition update
   */
  export type JobPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosition.
     */
    data: XOR<JobPositionUpdateInput, JobPositionUncheckedUpdateInput>
    /**
     * Choose, which JobPosition to update.
     */
    where: JobPositionWhereUniqueInput
  }

  /**
   * JobPosition updateMany
   */
  export type JobPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPositions.
     */
    data: XOR<JobPositionUpdateManyMutationInput, JobPositionUncheckedUpdateManyInput>
    /**
     * Filter which JobPositions to update
     */
    where?: JobPositionWhereInput
    /**
     * Limit how many JobPositions to update.
     */
    limit?: number
  }

  /**
   * JobPosition updateManyAndReturn
   */
  export type JobPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * The data used to update JobPositions.
     */
    data: XOR<JobPositionUpdateManyMutationInput, JobPositionUncheckedUpdateManyInput>
    /**
     * Filter which JobPositions to update
     */
    where?: JobPositionWhereInput
    /**
     * Limit how many JobPositions to update.
     */
    limit?: number
  }

  /**
   * JobPosition upsert
   */
  export type JobPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosition to update in case it exists.
     */
    where: JobPositionWhereUniqueInput
    /**
     * In case the JobPosition found by the `where` argument doesn't exist, create a new JobPosition with this data.
     */
    create: XOR<JobPositionCreateInput, JobPositionUncheckedCreateInput>
    /**
     * In case the JobPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPositionUpdateInput, JobPositionUncheckedUpdateInput>
  }

  /**
   * JobPosition delete
   */
  export type JobPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
    /**
     * Filter which JobPosition to delete.
     */
    where: JobPositionWhereUniqueInput
  }

  /**
   * JobPosition deleteMany
   */
  export type JobPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPositions to delete
     */
    where?: JobPositionWhereInput
    /**
     * Limit how many JobPositions to delete.
     */
    limit?: number
  }

  /**
   * JobPosition.User
   */
  export type JobPosition$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * JobPosition without action
   */
  export type JobPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosition
     */
    select?: JobPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosition
     */
    omit?: JobPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPositionInclude<ExtArgs> | null
  }


  /**
   * Model MainDepartment
   */

  export type AggregateMainDepartment = {
    _count: MainDepartmentCountAggregateOutputType | null
    _min: MainDepartmentMinAggregateOutputType | null
    _max: MainDepartmentMaxAggregateOutputType | null
  }

  export type MainDepartmentMinAggregateOutputType = {
    mainDepartmentId: string | null
    name_EN: string | null
    name_TH: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MainDepartmentMaxAggregateOutputType = {
    mainDepartmentId: string | null
    name_EN: string | null
    name_TH: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MainDepartmentCountAggregateOutputType = {
    mainDepartmentId: number
    name_EN: number
    name_TH: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MainDepartmentMinAggregateInputType = {
    mainDepartmentId?: true
    name_EN?: true
    name_TH?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MainDepartmentMaxAggregateInputType = {
    mainDepartmentId?: true
    name_EN?: true
    name_TH?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MainDepartmentCountAggregateInputType = {
    mainDepartmentId?: true
    name_EN?: true
    name_TH?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MainDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainDepartment to aggregate.
     */
    where?: MainDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainDepartments to fetch.
     */
    orderBy?: MainDepartmentOrderByWithRelationInput | MainDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainDepartments
    **/
    _count?: true | MainDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainDepartmentMaxAggregateInputType
  }

  export type GetMainDepartmentAggregateType<T extends MainDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMainDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainDepartment[P]>
      : GetScalarType<T[P], AggregateMainDepartment[P]>
  }




  export type MainDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainDepartmentWhereInput
    orderBy?: MainDepartmentOrderByWithAggregationInput | MainDepartmentOrderByWithAggregationInput[]
    by: MainDepartmentScalarFieldEnum[] | MainDepartmentScalarFieldEnum
    having?: MainDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainDepartmentCountAggregateInputType | true
    _min?: MainDepartmentMinAggregateInputType
    _max?: MainDepartmentMaxAggregateInputType
  }

  export type MainDepartmentGroupByOutputType = {
    mainDepartmentId: string
    name_EN: string | null
    name_TH: string
    createdAt: Date
    updatedAt: Date
    _count: MainDepartmentCountAggregateOutputType | null
    _min: MainDepartmentMinAggregateOutputType | null
    _max: MainDepartmentMaxAggregateOutputType | null
  }

  type GetMainDepartmentGroupByPayload<T extends MainDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], MainDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type MainDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mainDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subDepartments?: boolean | MainDepartment$subDepartmentsArgs<ExtArgs>
    _count?: boolean | MainDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainDepartment"]>

  export type MainDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mainDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mainDepartment"]>

  export type MainDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mainDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mainDepartment"]>

  export type MainDepartmentSelectScalar = {
    mainDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MainDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mainDepartmentId" | "name_EN" | "name_TH" | "createdAt" | "updatedAt", ExtArgs["result"]["mainDepartment"]>
  export type MainDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subDepartments?: boolean | MainDepartment$subDepartmentsArgs<ExtArgs>
    _count?: boolean | MainDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MainDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MainDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MainDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainDepartment"
    objects: {
      subDepartments: Prisma.$SubDepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mainDepartmentId: string
      name_EN: string | null
      name_TH: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mainDepartment"]>
    composites: {}
  }

  type MainDepartmentGetPayload<S extends boolean | null | undefined | MainDepartmentDefaultArgs> = $Result.GetResult<Prisma.$MainDepartmentPayload, S>

  type MainDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainDepartmentCountAggregateInputType | true
    }

  export interface MainDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainDepartment'], meta: { name: 'MainDepartment' } }
    /**
     * Find zero or one MainDepartment that matches the filter.
     * @param {MainDepartmentFindUniqueArgs} args - Arguments to find a MainDepartment
     * @example
     * // Get one MainDepartment
     * const mainDepartment = await prisma.mainDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainDepartmentFindUniqueArgs>(args: SelectSubset<T, MainDepartmentFindUniqueArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainDepartmentFindUniqueOrThrowArgs} args - Arguments to find a MainDepartment
     * @example
     * // Get one MainDepartment
     * const mainDepartment = await prisma.mainDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MainDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentFindFirstArgs} args - Arguments to find a MainDepartment
     * @example
     * // Get one MainDepartment
     * const mainDepartment = await prisma.mainDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainDepartmentFindFirstArgs>(args?: SelectSubset<T, MainDepartmentFindFirstArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentFindFirstOrThrowArgs} args - Arguments to find a MainDepartment
     * @example
     * // Get one MainDepartment
     * const mainDepartment = await prisma.mainDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MainDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainDepartments
     * const mainDepartments = await prisma.mainDepartment.findMany()
     * 
     * // Get first 10 MainDepartments
     * const mainDepartments = await prisma.mainDepartment.findMany({ take: 10 })
     * 
     * // Only select the `mainDepartmentId`
     * const mainDepartmentWithMainDepartmentIdOnly = await prisma.mainDepartment.findMany({ select: { mainDepartmentId: true } })
     * 
     */
    findMany<T extends MainDepartmentFindManyArgs>(args?: SelectSubset<T, MainDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainDepartment.
     * @param {MainDepartmentCreateArgs} args - Arguments to create a MainDepartment.
     * @example
     * // Create one MainDepartment
     * const MainDepartment = await prisma.mainDepartment.create({
     *   data: {
     *     // ... data to create a MainDepartment
     *   }
     * })
     * 
     */
    create<T extends MainDepartmentCreateArgs>(args: SelectSubset<T, MainDepartmentCreateArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainDepartments.
     * @param {MainDepartmentCreateManyArgs} args - Arguments to create many MainDepartments.
     * @example
     * // Create many MainDepartments
     * const mainDepartment = await prisma.mainDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainDepartmentCreateManyArgs>(args?: SelectSubset<T, MainDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainDepartments and returns the data saved in the database.
     * @param {MainDepartmentCreateManyAndReturnArgs} args - Arguments to create many MainDepartments.
     * @example
     * // Create many MainDepartments
     * const mainDepartment = await prisma.mainDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainDepartments and only return the `mainDepartmentId`
     * const mainDepartmentWithMainDepartmentIdOnly = await prisma.mainDepartment.createManyAndReturn({
     *   select: { mainDepartmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MainDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MainDepartment.
     * @param {MainDepartmentDeleteArgs} args - Arguments to delete one MainDepartment.
     * @example
     * // Delete one MainDepartment
     * const MainDepartment = await prisma.mainDepartment.delete({
     *   where: {
     *     // ... filter to delete one MainDepartment
     *   }
     * })
     * 
     */
    delete<T extends MainDepartmentDeleteArgs>(args: SelectSubset<T, MainDepartmentDeleteArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainDepartment.
     * @param {MainDepartmentUpdateArgs} args - Arguments to update one MainDepartment.
     * @example
     * // Update one MainDepartment
     * const mainDepartment = await prisma.mainDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainDepartmentUpdateArgs>(args: SelectSubset<T, MainDepartmentUpdateArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainDepartments.
     * @param {MainDepartmentDeleteManyArgs} args - Arguments to filter MainDepartments to delete.
     * @example
     * // Delete a few MainDepartments
     * const { count } = await prisma.mainDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainDepartmentDeleteManyArgs>(args?: SelectSubset<T, MainDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainDepartments
     * const mainDepartment = await prisma.mainDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainDepartmentUpdateManyArgs>(args: SelectSubset<T, MainDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainDepartments and returns the data updated in the database.
     * @param {MainDepartmentUpdateManyAndReturnArgs} args - Arguments to update many MainDepartments.
     * @example
     * // Update many MainDepartments
     * const mainDepartment = await prisma.mainDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MainDepartments and only return the `mainDepartmentId`
     * const mainDepartmentWithMainDepartmentIdOnly = await prisma.mainDepartment.updateManyAndReturn({
     *   select: { mainDepartmentId: true },
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
    updateManyAndReturn<T extends MainDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MainDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MainDepartment.
     * @param {MainDepartmentUpsertArgs} args - Arguments to update or create a MainDepartment.
     * @example
     * // Update or create a MainDepartment
     * const mainDepartment = await prisma.mainDepartment.upsert({
     *   create: {
     *     // ... data to create a MainDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainDepartment we want to update
     *   }
     * })
     */
    upsert<T extends MainDepartmentUpsertArgs>(args: SelectSubset<T, MainDepartmentUpsertArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentCountArgs} args - Arguments to filter MainDepartments to count.
     * @example
     * // Count the number of MainDepartments
     * const count = await prisma.mainDepartment.count({
     *   where: {
     *     // ... the filter for the MainDepartments we want to count
     *   }
     * })
    **/
    count<T extends MainDepartmentCountArgs>(
      args?: Subset<T, MainDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainDepartmentAggregateArgs>(args: Subset<T, MainDepartmentAggregateArgs>): Prisma.PrismaPromise<GetMainDepartmentAggregateType<T>>

    /**
     * Group by MainDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainDepartmentGroupByArgs} args - Group by arguments.
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
      T extends MainDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: MainDepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MainDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainDepartment model
   */
  readonly fields: MainDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subDepartments<T extends MainDepartment$subDepartmentsArgs<ExtArgs> = {}>(args?: Subset<T, MainDepartment$subDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MainDepartment model
   */
  interface MainDepartmentFieldRefs {
    readonly mainDepartmentId: FieldRef<"MainDepartment", 'String'>
    readonly name_EN: FieldRef<"MainDepartment", 'String'>
    readonly name_TH: FieldRef<"MainDepartment", 'String'>
    readonly createdAt: FieldRef<"MainDepartment", 'DateTime'>
    readonly updatedAt: FieldRef<"MainDepartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MainDepartment findUnique
   */
  export type MainDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which MainDepartment to fetch.
     */
    where: MainDepartmentWhereUniqueInput
  }

  /**
   * MainDepartment findUniqueOrThrow
   */
  export type MainDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which MainDepartment to fetch.
     */
    where: MainDepartmentWhereUniqueInput
  }

  /**
   * MainDepartment findFirst
   */
  export type MainDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which MainDepartment to fetch.
     */
    where?: MainDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainDepartments to fetch.
     */
    orderBy?: MainDepartmentOrderByWithRelationInput | MainDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainDepartments.
     */
    cursor?: MainDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainDepartments.
     */
    distinct?: MainDepartmentScalarFieldEnum | MainDepartmentScalarFieldEnum[]
  }

  /**
   * MainDepartment findFirstOrThrow
   */
  export type MainDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which MainDepartment to fetch.
     */
    where?: MainDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainDepartments to fetch.
     */
    orderBy?: MainDepartmentOrderByWithRelationInput | MainDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainDepartments.
     */
    cursor?: MainDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainDepartments.
     */
    distinct?: MainDepartmentScalarFieldEnum | MainDepartmentScalarFieldEnum[]
  }

  /**
   * MainDepartment findMany
   */
  export type MainDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which MainDepartments to fetch.
     */
    where?: MainDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainDepartments to fetch.
     */
    orderBy?: MainDepartmentOrderByWithRelationInput | MainDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainDepartments.
     */
    cursor?: MainDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainDepartments.
     */
    skip?: number
    distinct?: MainDepartmentScalarFieldEnum | MainDepartmentScalarFieldEnum[]
  }

  /**
   * MainDepartment create
   */
  export type MainDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MainDepartment.
     */
    data: XOR<MainDepartmentCreateInput, MainDepartmentUncheckedCreateInput>
  }

  /**
   * MainDepartment createMany
   */
  export type MainDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainDepartments.
     */
    data: MainDepartmentCreateManyInput | MainDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainDepartment createManyAndReturn
   */
  export type MainDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many MainDepartments.
     */
    data: MainDepartmentCreateManyInput | MainDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainDepartment update
   */
  export type MainDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MainDepartment.
     */
    data: XOR<MainDepartmentUpdateInput, MainDepartmentUncheckedUpdateInput>
    /**
     * Choose, which MainDepartment to update.
     */
    where: MainDepartmentWhereUniqueInput
  }

  /**
   * MainDepartment updateMany
   */
  export type MainDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainDepartments.
     */
    data: XOR<MainDepartmentUpdateManyMutationInput, MainDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which MainDepartments to update
     */
    where?: MainDepartmentWhereInput
    /**
     * Limit how many MainDepartments to update.
     */
    limit?: number
  }

  /**
   * MainDepartment updateManyAndReturn
   */
  export type MainDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update MainDepartments.
     */
    data: XOR<MainDepartmentUpdateManyMutationInput, MainDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which MainDepartments to update
     */
    where?: MainDepartmentWhereInput
    /**
     * Limit how many MainDepartments to update.
     */
    limit?: number
  }

  /**
   * MainDepartment upsert
   */
  export type MainDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MainDepartment to update in case it exists.
     */
    where: MainDepartmentWhereUniqueInput
    /**
     * In case the MainDepartment found by the `where` argument doesn't exist, create a new MainDepartment with this data.
     */
    create: XOR<MainDepartmentCreateInput, MainDepartmentUncheckedCreateInput>
    /**
     * In case the MainDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainDepartmentUpdateInput, MainDepartmentUncheckedUpdateInput>
  }

  /**
   * MainDepartment delete
   */
  export type MainDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
    /**
     * Filter which MainDepartment to delete.
     */
    where: MainDepartmentWhereUniqueInput
  }

  /**
   * MainDepartment deleteMany
   */
  export type MainDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainDepartments to delete
     */
    where?: MainDepartmentWhereInput
    /**
     * Limit how many MainDepartments to delete.
     */
    limit?: number
  }

  /**
   * MainDepartment.subDepartments
   */
  export type MainDepartment$subDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    where?: SubDepartmentWhereInput
    orderBy?: SubDepartmentOrderByWithRelationInput | SubDepartmentOrderByWithRelationInput[]
    cursor?: SubDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubDepartmentScalarFieldEnum | SubDepartmentScalarFieldEnum[]
  }

  /**
   * MainDepartment without action
   */
  export type MainDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainDepartment
     */
    select?: MainDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainDepartment
     */
    omit?: MainDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model SubDepartment
   */

  export type AggregateSubDepartment = {
    _count: SubDepartmentCountAggregateOutputType | null
    _min: SubDepartmentMinAggregateOutputType | null
    _max: SubDepartmentMaxAggregateOutputType | null
  }

  export type SubDepartmentMinAggregateOutputType = {
    subDepartmentId: string | null
    name_EN: string | null
    name_TH: string | null
    mainDepartmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubDepartmentMaxAggregateOutputType = {
    subDepartmentId: string | null
    name_EN: string | null
    name_TH: string | null
    mainDepartmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubDepartmentCountAggregateOutputType = {
    subDepartmentId: number
    name_EN: number
    name_TH: number
    mainDepartmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubDepartmentMinAggregateInputType = {
    subDepartmentId?: true
    name_EN?: true
    name_TH?: true
    mainDepartmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubDepartmentMaxAggregateInputType = {
    subDepartmentId?: true
    name_EN?: true
    name_TH?: true
    mainDepartmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubDepartmentCountAggregateInputType = {
    subDepartmentId?: true
    name_EN?: true
    name_TH?: true
    mainDepartmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubDepartment to aggregate.
     */
    where?: SubDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDepartments to fetch.
     */
    orderBy?: SubDepartmentOrderByWithRelationInput | SubDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubDepartments
    **/
    _count?: true | SubDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubDepartmentMaxAggregateInputType
  }

  export type GetSubDepartmentAggregateType<T extends SubDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSubDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubDepartment[P]>
      : GetScalarType<T[P], AggregateSubDepartment[P]>
  }




  export type SubDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubDepartmentWhereInput
    orderBy?: SubDepartmentOrderByWithAggregationInput | SubDepartmentOrderByWithAggregationInput[]
    by: SubDepartmentScalarFieldEnum[] | SubDepartmentScalarFieldEnum
    having?: SubDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubDepartmentCountAggregateInputType | true
    _min?: SubDepartmentMinAggregateInputType
    _max?: SubDepartmentMaxAggregateInputType
  }

  export type SubDepartmentGroupByOutputType = {
    subDepartmentId: string
    name_EN: string | null
    name_TH: string
    mainDepartmentId: string
    createdAt: Date
    updatedAt: Date
    _count: SubDepartmentCountAggregateOutputType | null
    _min: SubDepartmentMinAggregateOutputType | null
    _max: SubDepartmentMaxAggregateOutputType | null
  }

  type GetSubDepartmentGroupByPayload<T extends SubDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], SubDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type SubDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    mainDepartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
    members?: boolean | SubDepartment$membersArgs<ExtArgs>
    PermissionDepartment?: boolean | SubDepartment$PermissionDepartmentArgs<ExtArgs>
    _count?: boolean | SubDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subDepartment"]>

  export type SubDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    mainDepartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subDepartment"]>

  export type SubDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    mainDepartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subDepartment"]>

  export type SubDepartmentSelectScalar = {
    subDepartmentId?: boolean
    name_EN?: boolean
    name_TH?: boolean
    mainDepartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subDepartmentId" | "name_EN" | "name_TH" | "mainDepartmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["subDepartment"]>
  export type SubDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
    members?: boolean | SubDepartment$membersArgs<ExtArgs>
    PermissionDepartment?: boolean | SubDepartment$PermissionDepartmentArgs<ExtArgs>
    _count?: boolean | SubDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
  }
  export type SubDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainDepartment?: boolean | MainDepartmentDefaultArgs<ExtArgs>
  }

  export type $SubDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubDepartment"
    objects: {
      mainDepartment: Prisma.$MainDepartmentPayload<ExtArgs>
      members: Prisma.$DepartmentMembershipPayload<ExtArgs>[]
      PermissionDepartment: Prisma.$PermissionDepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      subDepartmentId: string
      name_EN: string | null
      name_TH: string
      mainDepartmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subDepartment"]>
    composites: {}
  }

  type SubDepartmentGetPayload<S extends boolean | null | undefined | SubDepartmentDefaultArgs> = $Result.GetResult<Prisma.$SubDepartmentPayload, S>

  type SubDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubDepartmentCountAggregateInputType | true
    }

  export interface SubDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubDepartment'], meta: { name: 'SubDepartment' } }
    /**
     * Find zero or one SubDepartment that matches the filter.
     * @param {SubDepartmentFindUniqueArgs} args - Arguments to find a SubDepartment
     * @example
     * // Get one SubDepartment
     * const subDepartment = await prisma.subDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubDepartmentFindUniqueArgs>(args: SelectSubset<T, SubDepartmentFindUniqueArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubDepartmentFindUniqueOrThrowArgs} args - Arguments to find a SubDepartment
     * @example
     * // Get one SubDepartment
     * const subDepartment = await prisma.subDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SubDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentFindFirstArgs} args - Arguments to find a SubDepartment
     * @example
     * // Get one SubDepartment
     * const subDepartment = await prisma.subDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubDepartmentFindFirstArgs>(args?: SelectSubset<T, SubDepartmentFindFirstArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentFindFirstOrThrowArgs} args - Arguments to find a SubDepartment
     * @example
     * // Get one SubDepartment
     * const subDepartment = await prisma.subDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SubDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubDepartments
     * const subDepartments = await prisma.subDepartment.findMany()
     * 
     * // Get first 10 SubDepartments
     * const subDepartments = await prisma.subDepartment.findMany({ take: 10 })
     * 
     * // Only select the `subDepartmentId`
     * const subDepartmentWithSubDepartmentIdOnly = await prisma.subDepartment.findMany({ select: { subDepartmentId: true } })
     * 
     */
    findMany<T extends SubDepartmentFindManyArgs>(args?: SelectSubset<T, SubDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubDepartment.
     * @param {SubDepartmentCreateArgs} args - Arguments to create a SubDepartment.
     * @example
     * // Create one SubDepartment
     * const SubDepartment = await prisma.subDepartment.create({
     *   data: {
     *     // ... data to create a SubDepartment
     *   }
     * })
     * 
     */
    create<T extends SubDepartmentCreateArgs>(args: SelectSubset<T, SubDepartmentCreateArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubDepartments.
     * @param {SubDepartmentCreateManyArgs} args - Arguments to create many SubDepartments.
     * @example
     * // Create many SubDepartments
     * const subDepartment = await prisma.subDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubDepartmentCreateManyArgs>(args?: SelectSubset<T, SubDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubDepartments and returns the data saved in the database.
     * @param {SubDepartmentCreateManyAndReturnArgs} args - Arguments to create many SubDepartments.
     * @example
     * // Create many SubDepartments
     * const subDepartment = await prisma.subDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubDepartments and only return the `subDepartmentId`
     * const subDepartmentWithSubDepartmentIdOnly = await prisma.subDepartment.createManyAndReturn({
     *   select: { subDepartmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SubDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubDepartment.
     * @param {SubDepartmentDeleteArgs} args - Arguments to delete one SubDepartment.
     * @example
     * // Delete one SubDepartment
     * const SubDepartment = await prisma.subDepartment.delete({
     *   where: {
     *     // ... filter to delete one SubDepartment
     *   }
     * })
     * 
     */
    delete<T extends SubDepartmentDeleteArgs>(args: SelectSubset<T, SubDepartmentDeleteArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubDepartment.
     * @param {SubDepartmentUpdateArgs} args - Arguments to update one SubDepartment.
     * @example
     * // Update one SubDepartment
     * const subDepartment = await prisma.subDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubDepartmentUpdateArgs>(args: SelectSubset<T, SubDepartmentUpdateArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubDepartments.
     * @param {SubDepartmentDeleteManyArgs} args - Arguments to filter SubDepartments to delete.
     * @example
     * // Delete a few SubDepartments
     * const { count } = await prisma.subDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubDepartmentDeleteManyArgs>(args?: SelectSubset<T, SubDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubDepartments
     * const subDepartment = await prisma.subDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubDepartmentUpdateManyArgs>(args: SelectSubset<T, SubDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubDepartments and returns the data updated in the database.
     * @param {SubDepartmentUpdateManyAndReturnArgs} args - Arguments to update many SubDepartments.
     * @example
     * // Update many SubDepartments
     * const subDepartment = await prisma.subDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubDepartments and only return the `subDepartmentId`
     * const subDepartmentWithSubDepartmentIdOnly = await prisma.subDepartment.updateManyAndReturn({
     *   select: { subDepartmentId: true },
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
    updateManyAndReturn<T extends SubDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SubDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubDepartment.
     * @param {SubDepartmentUpsertArgs} args - Arguments to update or create a SubDepartment.
     * @example
     * // Update or create a SubDepartment
     * const subDepartment = await prisma.subDepartment.upsert({
     *   create: {
     *     // ... data to create a SubDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubDepartment we want to update
     *   }
     * })
     */
    upsert<T extends SubDepartmentUpsertArgs>(args: SelectSubset<T, SubDepartmentUpsertArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentCountArgs} args - Arguments to filter SubDepartments to count.
     * @example
     * // Count the number of SubDepartments
     * const count = await prisma.subDepartment.count({
     *   where: {
     *     // ... the filter for the SubDepartments we want to count
     *   }
     * })
    **/
    count<T extends SubDepartmentCountArgs>(
      args?: Subset<T, SubDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubDepartmentAggregateArgs>(args: Subset<T, SubDepartmentAggregateArgs>): Prisma.PrismaPromise<GetSubDepartmentAggregateType<T>>

    /**
     * Group by SubDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubDepartmentGroupByArgs} args - Group by arguments.
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
      T extends SubDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: SubDepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubDepartment model
   */
  readonly fields: SubDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainDepartment<T extends MainDepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainDepartmentDefaultArgs<ExtArgs>>): Prisma__MainDepartmentClient<$Result.GetResult<Prisma.$MainDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends SubDepartment$membersArgs<ExtArgs> = {}>(args?: Subset<T, SubDepartment$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PermissionDepartment<T extends SubDepartment$PermissionDepartmentArgs<ExtArgs> = {}>(args?: Subset<T, SubDepartment$PermissionDepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubDepartment model
   */
  interface SubDepartmentFieldRefs {
    readonly subDepartmentId: FieldRef<"SubDepartment", 'String'>
    readonly name_EN: FieldRef<"SubDepartment", 'String'>
    readonly name_TH: FieldRef<"SubDepartment", 'String'>
    readonly mainDepartmentId: FieldRef<"SubDepartment", 'String'>
    readonly createdAt: FieldRef<"SubDepartment", 'DateTime'>
    readonly updatedAt: FieldRef<"SubDepartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubDepartment findUnique
   */
  export type SubDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which SubDepartment to fetch.
     */
    where: SubDepartmentWhereUniqueInput
  }

  /**
   * SubDepartment findUniqueOrThrow
   */
  export type SubDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which SubDepartment to fetch.
     */
    where: SubDepartmentWhereUniqueInput
  }

  /**
   * SubDepartment findFirst
   */
  export type SubDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which SubDepartment to fetch.
     */
    where?: SubDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDepartments to fetch.
     */
    orderBy?: SubDepartmentOrderByWithRelationInput | SubDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubDepartments.
     */
    cursor?: SubDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubDepartments.
     */
    distinct?: SubDepartmentScalarFieldEnum | SubDepartmentScalarFieldEnum[]
  }

  /**
   * SubDepartment findFirstOrThrow
   */
  export type SubDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which SubDepartment to fetch.
     */
    where?: SubDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDepartments to fetch.
     */
    orderBy?: SubDepartmentOrderByWithRelationInput | SubDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubDepartments.
     */
    cursor?: SubDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubDepartments.
     */
    distinct?: SubDepartmentScalarFieldEnum | SubDepartmentScalarFieldEnum[]
  }

  /**
   * SubDepartment findMany
   */
  export type SubDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which SubDepartments to fetch.
     */
    where?: SubDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubDepartments to fetch.
     */
    orderBy?: SubDepartmentOrderByWithRelationInput | SubDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubDepartments.
     */
    cursor?: SubDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubDepartments.
     */
    skip?: number
    distinct?: SubDepartmentScalarFieldEnum | SubDepartmentScalarFieldEnum[]
  }

  /**
   * SubDepartment create
   */
  export type SubDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SubDepartment.
     */
    data: XOR<SubDepartmentCreateInput, SubDepartmentUncheckedCreateInput>
  }

  /**
   * SubDepartment createMany
   */
  export type SubDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubDepartments.
     */
    data: SubDepartmentCreateManyInput | SubDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubDepartment createManyAndReturn
   */
  export type SubDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many SubDepartments.
     */
    data: SubDepartmentCreateManyInput | SubDepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubDepartment update
   */
  export type SubDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SubDepartment.
     */
    data: XOR<SubDepartmentUpdateInput, SubDepartmentUncheckedUpdateInput>
    /**
     * Choose, which SubDepartment to update.
     */
    where: SubDepartmentWhereUniqueInput
  }

  /**
   * SubDepartment updateMany
   */
  export type SubDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubDepartments.
     */
    data: XOR<SubDepartmentUpdateManyMutationInput, SubDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which SubDepartments to update
     */
    where?: SubDepartmentWhereInput
    /**
     * Limit how many SubDepartments to update.
     */
    limit?: number
  }

  /**
   * SubDepartment updateManyAndReturn
   */
  export type SubDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update SubDepartments.
     */
    data: XOR<SubDepartmentUpdateManyMutationInput, SubDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which SubDepartments to update
     */
    where?: SubDepartmentWhereInput
    /**
     * Limit how many SubDepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubDepartment upsert
   */
  export type SubDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SubDepartment to update in case it exists.
     */
    where: SubDepartmentWhereUniqueInput
    /**
     * In case the SubDepartment found by the `where` argument doesn't exist, create a new SubDepartment with this data.
     */
    create: XOR<SubDepartmentCreateInput, SubDepartmentUncheckedCreateInput>
    /**
     * In case the SubDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubDepartmentUpdateInput, SubDepartmentUncheckedUpdateInput>
  }

  /**
   * SubDepartment delete
   */
  export type SubDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
    /**
     * Filter which SubDepartment to delete.
     */
    where: SubDepartmentWhereUniqueInput
  }

  /**
   * SubDepartment deleteMany
   */
  export type SubDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubDepartments to delete
     */
    where?: SubDepartmentWhereInput
    /**
     * Limit how many SubDepartments to delete.
     */
    limit?: number
  }

  /**
   * SubDepartment.members
   */
  export type SubDepartment$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    where?: DepartmentMembershipWhereInput
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    cursor?: DepartmentMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentMembershipScalarFieldEnum | DepartmentMembershipScalarFieldEnum[]
  }

  /**
   * SubDepartment.PermissionDepartment
   */
  export type SubDepartment$PermissionDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    where?: PermissionDepartmentWhereInput
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    cursor?: PermissionDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionDepartmentScalarFieldEnum | PermissionDepartmentScalarFieldEnum[]
  }

  /**
   * SubDepartment without action
   */
  export type SubDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubDepartment
     */
    select?: SubDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubDepartment
     */
    omit?: SubDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model DepartmentMembership
   */

  export type AggregateDepartmentMembership = {
    _count: DepartmentMembershipCountAggregateOutputType | null
    _min: DepartmentMembershipMinAggregateOutputType | null
    _max: DepartmentMembershipMaxAggregateOutputType | null
  }

  export type DepartmentMembershipMinAggregateOutputType = {
    departmentMembershipId: string | null
    userId: string | null
    subDepartmentId: string | null
    assignedAt: Date | null
  }

  export type DepartmentMembershipMaxAggregateOutputType = {
    departmentMembershipId: string | null
    userId: string | null
    subDepartmentId: string | null
    assignedAt: Date | null
  }

  export type DepartmentMembershipCountAggregateOutputType = {
    departmentMembershipId: number
    userId: number
    subDepartmentId: number
    assignedAt: number
    _all: number
  }


  export type DepartmentMembershipMinAggregateInputType = {
    departmentMembershipId?: true
    userId?: true
    subDepartmentId?: true
    assignedAt?: true
  }

  export type DepartmentMembershipMaxAggregateInputType = {
    departmentMembershipId?: true
    userId?: true
    subDepartmentId?: true
    assignedAt?: true
  }

  export type DepartmentMembershipCountAggregateInputType = {
    departmentMembershipId?: true
    userId?: true
    subDepartmentId?: true
    assignedAt?: true
    _all?: true
  }

  export type DepartmentMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentMembership to aggregate.
     */
    where?: DepartmentMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentMemberships to fetch.
     */
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartmentMemberships
    **/
    _count?: true | DepartmentMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMembershipMaxAggregateInputType
  }

  export type GetDepartmentMembershipAggregateType<T extends DepartmentMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartmentMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartmentMembership[P]>
      : GetScalarType<T[P], AggregateDepartmentMembership[P]>
  }




  export type DepartmentMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentMembershipWhereInput
    orderBy?: DepartmentMembershipOrderByWithAggregationInput | DepartmentMembershipOrderByWithAggregationInput[]
    by: DepartmentMembershipScalarFieldEnum[] | DepartmentMembershipScalarFieldEnum
    having?: DepartmentMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentMembershipCountAggregateInputType | true
    _min?: DepartmentMembershipMinAggregateInputType
    _max?: DepartmentMembershipMaxAggregateInputType
  }

  export type DepartmentMembershipGroupByOutputType = {
    departmentMembershipId: string
    userId: string
    subDepartmentId: string
    assignedAt: Date
    _count: DepartmentMembershipCountAggregateOutputType | null
    _min: DepartmentMembershipMinAggregateOutputType | null
    _max: DepartmentMembershipMaxAggregateOutputType | null
  }

  type GetDepartmentMembershipGroupByPayload<T extends DepartmentMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentMembershipGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentMembershipId?: boolean
    userId?: boolean
    subDepartmentId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentMembership"]>

  export type DepartmentMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentMembershipId?: boolean
    userId?: boolean
    subDepartmentId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentMembership"]>

  export type DepartmentMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentMembershipId?: boolean
    userId?: boolean
    subDepartmentId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentMembership"]>

  export type DepartmentMembershipSelectScalar = {
    departmentMembershipId?: boolean
    userId?: boolean
    subDepartmentId?: boolean
    assignedAt?: boolean
  }

  export type DepartmentMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentMembershipId" | "userId" | "subDepartmentId" | "assignedAt", ExtArgs["result"]["departmentMembership"]>
  export type DepartmentMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }
  export type DepartmentMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }
  export type DepartmentMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }

  export type $DepartmentMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartmentMembership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subDepartment: Prisma.$SubDepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentMembershipId: string
      userId: string
      subDepartmentId: string
      assignedAt: Date
    }, ExtArgs["result"]["departmentMembership"]>
    composites: {}
  }

  type DepartmentMembershipGetPayload<S extends boolean | null | undefined | DepartmentMembershipDefaultArgs> = $Result.GetResult<Prisma.$DepartmentMembershipPayload, S>

  type DepartmentMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentMembershipCountAggregateInputType | true
    }

  export interface DepartmentMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartmentMembership'], meta: { name: 'DepartmentMembership' } }
    /**
     * Find zero or one DepartmentMembership that matches the filter.
     * @param {DepartmentMembershipFindUniqueArgs} args - Arguments to find a DepartmentMembership
     * @example
     * // Get one DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentMembershipFindUniqueArgs>(args: SelectSubset<T, DepartmentMembershipFindUniqueArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepartmentMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentMembershipFindUniqueOrThrowArgs} args - Arguments to find a DepartmentMembership
     * @example
     * // Get one DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipFindFirstArgs} args - Arguments to find a DepartmentMembership
     * @example
     * // Get one DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentMembershipFindFirstArgs>(args?: SelectSubset<T, DepartmentMembershipFindFirstArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipFindFirstOrThrowArgs} args - Arguments to find a DepartmentMembership
     * @example
     * // Get one DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepartmentMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartmentMemberships
     * const departmentMemberships = await prisma.departmentMembership.findMany()
     * 
     * // Get first 10 DepartmentMemberships
     * const departmentMemberships = await prisma.departmentMembership.findMany({ take: 10 })
     * 
     * // Only select the `departmentMembershipId`
     * const departmentMembershipWithDepartmentMembershipIdOnly = await prisma.departmentMembership.findMany({ select: { departmentMembershipId: true } })
     * 
     */
    findMany<T extends DepartmentMembershipFindManyArgs>(args?: SelectSubset<T, DepartmentMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepartmentMembership.
     * @param {DepartmentMembershipCreateArgs} args - Arguments to create a DepartmentMembership.
     * @example
     * // Create one DepartmentMembership
     * const DepartmentMembership = await prisma.departmentMembership.create({
     *   data: {
     *     // ... data to create a DepartmentMembership
     *   }
     * })
     * 
     */
    create<T extends DepartmentMembershipCreateArgs>(args: SelectSubset<T, DepartmentMembershipCreateArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepartmentMemberships.
     * @param {DepartmentMembershipCreateManyArgs} args - Arguments to create many DepartmentMemberships.
     * @example
     * // Create many DepartmentMemberships
     * const departmentMembership = await prisma.departmentMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentMembershipCreateManyArgs>(args?: SelectSubset<T, DepartmentMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepartmentMemberships and returns the data saved in the database.
     * @param {DepartmentMembershipCreateManyAndReturnArgs} args - Arguments to create many DepartmentMemberships.
     * @example
     * // Create many DepartmentMemberships
     * const departmentMembership = await prisma.departmentMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepartmentMemberships and only return the `departmentMembershipId`
     * const departmentMembershipWithDepartmentMembershipIdOnly = await prisma.departmentMembership.createManyAndReturn({
     *   select: { departmentMembershipId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepartmentMembership.
     * @param {DepartmentMembershipDeleteArgs} args - Arguments to delete one DepartmentMembership.
     * @example
     * // Delete one DepartmentMembership
     * const DepartmentMembership = await prisma.departmentMembership.delete({
     *   where: {
     *     // ... filter to delete one DepartmentMembership
     *   }
     * })
     * 
     */
    delete<T extends DepartmentMembershipDeleteArgs>(args: SelectSubset<T, DepartmentMembershipDeleteArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepartmentMembership.
     * @param {DepartmentMembershipUpdateArgs} args - Arguments to update one DepartmentMembership.
     * @example
     * // Update one DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentMembershipUpdateArgs>(args: SelectSubset<T, DepartmentMembershipUpdateArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepartmentMemberships.
     * @param {DepartmentMembershipDeleteManyArgs} args - Arguments to filter DepartmentMemberships to delete.
     * @example
     * // Delete a few DepartmentMemberships
     * const { count } = await prisma.departmentMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentMembershipDeleteManyArgs>(args?: SelectSubset<T, DepartmentMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartmentMemberships
     * const departmentMembership = await prisma.departmentMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentMembershipUpdateManyArgs>(args: SelectSubset<T, DepartmentMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentMemberships and returns the data updated in the database.
     * @param {DepartmentMembershipUpdateManyAndReturnArgs} args - Arguments to update many DepartmentMemberships.
     * @example
     * // Update many DepartmentMemberships
     * const departmentMembership = await prisma.departmentMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepartmentMemberships and only return the `departmentMembershipId`
     * const departmentMembershipWithDepartmentMembershipIdOnly = await prisma.departmentMembership.updateManyAndReturn({
     *   select: { departmentMembershipId: true },
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
    updateManyAndReturn<T extends DepartmentMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepartmentMembership.
     * @param {DepartmentMembershipUpsertArgs} args - Arguments to update or create a DepartmentMembership.
     * @example
     * // Update or create a DepartmentMembership
     * const departmentMembership = await prisma.departmentMembership.upsert({
     *   create: {
     *     // ... data to create a DepartmentMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartmentMembership we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentMembershipUpsertArgs>(args: SelectSubset<T, DepartmentMembershipUpsertArgs<ExtArgs>>): Prisma__DepartmentMembershipClient<$Result.GetResult<Prisma.$DepartmentMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepartmentMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipCountArgs} args - Arguments to filter DepartmentMemberships to count.
     * @example
     * // Count the number of DepartmentMemberships
     * const count = await prisma.departmentMembership.count({
     *   where: {
     *     // ... the filter for the DepartmentMemberships we want to count
     *   }
     * })
    **/
    count<T extends DepartmentMembershipCountArgs>(
      args?: Subset<T, DepartmentMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartmentMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentMembershipAggregateArgs>(args: Subset<T, DepartmentMembershipAggregateArgs>): Prisma.PrismaPromise<GetDepartmentMembershipAggregateType<T>>

    /**
     * Group by DepartmentMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentMembershipGroupByArgs} args - Group by arguments.
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
      T extends DepartmentMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentMembershipGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentMembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartmentMembership model
   */
  readonly fields: DepartmentMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartmentMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subDepartment<T extends SubDepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubDepartmentDefaultArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DepartmentMembership model
   */
  interface DepartmentMembershipFieldRefs {
    readonly departmentMembershipId: FieldRef<"DepartmentMembership", 'String'>
    readonly userId: FieldRef<"DepartmentMembership", 'String'>
    readonly subDepartmentId: FieldRef<"DepartmentMembership", 'String'>
    readonly assignedAt: FieldRef<"DepartmentMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DepartmentMembership findUnique
   */
  export type DepartmentMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentMembership to fetch.
     */
    where: DepartmentMembershipWhereUniqueInput
  }

  /**
   * DepartmentMembership findUniqueOrThrow
   */
  export type DepartmentMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentMembership to fetch.
     */
    where: DepartmentMembershipWhereUniqueInput
  }

  /**
   * DepartmentMembership findFirst
   */
  export type DepartmentMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentMembership to fetch.
     */
    where?: DepartmentMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentMemberships to fetch.
     */
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentMemberships.
     */
    cursor?: DepartmentMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentMemberships.
     */
    distinct?: DepartmentMembershipScalarFieldEnum | DepartmentMembershipScalarFieldEnum[]
  }

  /**
   * DepartmentMembership findFirstOrThrow
   */
  export type DepartmentMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentMembership to fetch.
     */
    where?: DepartmentMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentMemberships to fetch.
     */
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentMemberships.
     */
    cursor?: DepartmentMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentMemberships.
     */
    distinct?: DepartmentMembershipScalarFieldEnum | DepartmentMembershipScalarFieldEnum[]
  }

  /**
   * DepartmentMembership findMany
   */
  export type DepartmentMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentMemberships to fetch.
     */
    where?: DepartmentMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentMemberships to fetch.
     */
    orderBy?: DepartmentMembershipOrderByWithRelationInput | DepartmentMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartmentMemberships.
     */
    cursor?: DepartmentMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentMemberships.
     */
    skip?: number
    distinct?: DepartmentMembershipScalarFieldEnum | DepartmentMembershipScalarFieldEnum[]
  }

  /**
   * DepartmentMembership create
   */
  export type DepartmentMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartmentMembership.
     */
    data: XOR<DepartmentMembershipCreateInput, DepartmentMembershipUncheckedCreateInput>
  }

  /**
   * DepartmentMembership createMany
   */
  export type DepartmentMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartmentMemberships.
     */
    data: DepartmentMembershipCreateManyInput | DepartmentMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepartmentMembership createManyAndReturn
   */
  export type DepartmentMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many DepartmentMemberships.
     */
    data: DepartmentMembershipCreateManyInput | DepartmentMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartmentMembership update
   */
  export type DepartmentMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartmentMembership.
     */
    data: XOR<DepartmentMembershipUpdateInput, DepartmentMembershipUncheckedUpdateInput>
    /**
     * Choose, which DepartmentMembership to update.
     */
    where: DepartmentMembershipWhereUniqueInput
  }

  /**
   * DepartmentMembership updateMany
   */
  export type DepartmentMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartmentMemberships.
     */
    data: XOR<DepartmentMembershipUpdateManyMutationInput, DepartmentMembershipUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentMemberships to update
     */
    where?: DepartmentMembershipWhereInput
    /**
     * Limit how many DepartmentMemberships to update.
     */
    limit?: number
  }

  /**
   * DepartmentMembership updateManyAndReturn
   */
  export type DepartmentMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * The data used to update DepartmentMemberships.
     */
    data: XOR<DepartmentMembershipUpdateManyMutationInput, DepartmentMembershipUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentMemberships to update
     */
    where?: DepartmentMembershipWhereInput
    /**
     * Limit how many DepartmentMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartmentMembership upsert
   */
  export type DepartmentMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartmentMembership to update in case it exists.
     */
    where: DepartmentMembershipWhereUniqueInput
    /**
     * In case the DepartmentMembership found by the `where` argument doesn't exist, create a new DepartmentMembership with this data.
     */
    create: XOR<DepartmentMembershipCreateInput, DepartmentMembershipUncheckedCreateInput>
    /**
     * In case the DepartmentMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentMembershipUpdateInput, DepartmentMembershipUncheckedUpdateInput>
  }

  /**
   * DepartmentMembership delete
   */
  export type DepartmentMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
    /**
     * Filter which DepartmentMembership to delete.
     */
    where: DepartmentMembershipWhereUniqueInput
  }

  /**
   * DepartmentMembership deleteMany
   */
  export type DepartmentMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentMemberships to delete
     */
    where?: DepartmentMembershipWhereInput
    /**
     * Limit how many DepartmentMemberships to delete.
     */
    limit?: number
  }

  /**
   * DepartmentMembership without action
   */
  export type DepartmentMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentMembership
     */
    select?: DepartmentMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentMembership
     */
    omit?: DepartmentMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentMembershipInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    position: number | null
  }

  export type ProjectSumAggregateOutputType = {
    position: number | null
  }

  export type ProjectMinAggregateOutputType = {
    projectId: string | null
    name: string | null
    description: string | null
    database: string | null
    part: string | null
    position: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    projectId: string | null
    name: string | null
    description: string | null
    database: string | null
    part: string | null
    position: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    projectId: number
    name: number
    description: number
    database: number
    part: number
    position: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    position?: true
  }

  export type ProjectSumAggregateInputType = {
    position?: true
  }

  export type ProjectMinAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    database?: true
    part?: true
    position?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    database?: true
    part?: true
    position?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    database?: true
    part?: true
    position?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    projectId: string
    name: string
    description: string | null
    database: string
    part: string | null
    position: number | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    database?: boolean
    part?: boolean
    position?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserPermission?: boolean | Project$UserPermissionArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    database?: boolean
    part?: boolean
    position?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    database?: boolean
    part?: boolean
    position?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    projectId?: boolean
    name?: boolean
    description?: boolean
    database?: boolean
    part?: boolean
    position?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "name" | "description" | "database" | "part" | "position" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPermission?: boolean | Project$UserPermissionArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      UserPermission: Prisma.$UserPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      name: string
      description: string | null
      database: string
      part: string | null
      position: number | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { projectId: true },
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPermission<T extends Project$UserPermissionArgs<ExtArgs> = {}>(args?: Subset<T, Project$UserPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly projectId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly database: FieldRef<"Project", 'String'>
    readonly part: FieldRef<"Project", 'String'>
    readonly position: FieldRef<"Project", 'Int'>
    readonly status: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.UserPermission
   */
  export type Project$UserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    position: number | null
  }

  export type MenuSumAggregateOutputType = {
    position: number | null
  }

  export type MenuMinAggregateOutputType = {
    menuId: string | null
    name: string | null
    icon: string | null
    part: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    menuId: string | null
    name: string | null
    icon: string | null
    part: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    menuId: number
    name: number
    icon: number
    part: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    position?: true
  }

  export type MenuSumAggregateInputType = {
    position?: true
  }

  export type MenuMinAggregateInputType = {
    menuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    menuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    menuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    menuId: string
    name: string
    icon: string
    part: string | null
    position: number | null
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subMenus?: boolean | Menu$subMenusArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    menuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menuId" | "name" | "icon" | "part" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subMenus?: boolean | Menu$subMenusArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      subMenus: Prisma.$SubMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      menuId: string
      name: string
      icon: string
      part: string | null
      position: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `menuId`
     * const menuWithMenuIdOnly = await prisma.menu.findMany({ select: { menuId: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `menuId`
     * const menuWithMenuIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { menuId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `menuId`
     * const menuWithMenuIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { menuId: true },
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
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subMenus<T extends Menu$subMenusArgs<ExtArgs> = {}>(args?: Subset<T, Menu$subMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly menuId: FieldRef<"Menu", 'String'>
    readonly name: FieldRef<"Menu", 'String'>
    readonly icon: FieldRef<"Menu", 'String'>
    readonly part: FieldRef<"Menu", 'String'>
    readonly position: FieldRef<"Menu", 'Int'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.subMenus
   */
  export type Menu$subMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model SubMenu
   */

  export type AggregateSubMenu = {
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  export type SubMenuAvgAggregateOutputType = {
    position: number | null
  }

  export type SubMenuSumAggregateOutputType = {
    position: number | null
  }

  export type SubMenuMinAggregateOutputType = {
    submenuId: string | null
    name: string | null
    icon: string | null
    part: string | null
    position: number | null
    menuId: string | null
    isProjectBased: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubMenuMaxAggregateOutputType = {
    submenuId: string | null
    name: string | null
    icon: string | null
    part: string | null
    position: number | null
    menuId: string | null
    isProjectBased: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubMenuCountAggregateOutputType = {
    submenuId: number
    name: number
    icon: number
    part: number
    position: number
    menuId: number
    isProjectBased: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubMenuAvgAggregateInputType = {
    position?: true
  }

  export type SubMenuSumAggregateInputType = {
    position?: true
  }

  export type SubMenuMinAggregateInputType = {
    submenuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    menuId?: true
    isProjectBased?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubMenuMaxAggregateInputType = {
    submenuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    menuId?: true
    isProjectBased?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubMenuCountAggregateInputType = {
    submenuId?: true
    name?: true
    icon?: true
    part?: true
    position?: true
    menuId?: true
    isProjectBased?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenu to aggregate.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubMenus
    **/
    _count?: true | SubMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubMenuMaxAggregateInputType
  }

  export type GetSubMenuAggregateType<T extends SubMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateSubMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubMenu[P]>
      : GetScalarType<T[P], AggregateSubMenu[P]>
  }




  export type SubMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithAggregationInput | SubMenuOrderByWithAggregationInput[]
    by: SubMenuScalarFieldEnum[] | SubMenuScalarFieldEnum
    having?: SubMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubMenuCountAggregateInputType | true
    _avg?: SubMenuAvgAggregateInputType
    _sum?: SubMenuSumAggregateInputType
    _min?: SubMenuMinAggregateInputType
    _max?: SubMenuMaxAggregateInputType
  }

  export type SubMenuGroupByOutputType = {
    submenuId: string
    name: string
    icon: string
    part: string | null
    position: number | null
    menuId: string
    isProjectBased: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  type GetSubMenuGroupByPayload<T extends SubMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
            : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
        }
      >
    >


  export type SubMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submenuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    menuId?: boolean
    isProjectBased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    permissions?: boolean | SubMenu$permissionsArgs<ExtArgs>
    _count?: boolean | SubMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subMenu"]>

  export type SubMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submenuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    menuId?: boolean
    isProjectBased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subMenu"]>

  export type SubMenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submenuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    menuId?: boolean
    isProjectBased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subMenu"]>

  export type SubMenuSelectScalar = {
    submenuId?: boolean
    name?: boolean
    icon?: boolean
    part?: boolean
    position?: boolean
    menuId?: boolean
    isProjectBased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"submenuId" | "name" | "icon" | "part" | "position" | "menuId" | "isProjectBased" | "createdAt" | "updatedAt", ExtArgs["result"]["subMenu"]>
  export type SubMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    permissions?: boolean | SubMenu$permissionsArgs<ExtArgs>
    _count?: boolean | SubMenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type SubMenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $SubMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubMenu"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
      permissions: Prisma.$UserPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      submenuId: string
      name: string
      icon: string
      part: string | null
      position: number | null
      menuId: string
      isProjectBased: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subMenu"]>
    composites: {}
  }

  type SubMenuGetPayload<S extends boolean | null | undefined | SubMenuDefaultArgs> = $Result.GetResult<Prisma.$SubMenuPayload, S>

  type SubMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubMenuCountAggregateInputType | true
    }

  export interface SubMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubMenu'], meta: { name: 'SubMenu' } }
    /**
     * Find zero or one SubMenu that matches the filter.
     * @param {SubMenuFindUniqueArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubMenuFindUniqueArgs>(args: SelectSubset<T, SubMenuFindUniqueArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubMenuFindUniqueOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, SubMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubMenuFindFirstArgs>(args?: SelectSubset<T, SubMenuFindFirstArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, SubMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubMenus
     * const subMenus = await prisma.subMenu.findMany()
     * 
     * // Get first 10 SubMenus
     * const subMenus = await prisma.subMenu.findMany({ take: 10 })
     * 
     * // Only select the `submenuId`
     * const subMenuWithSubmenuIdOnly = await prisma.subMenu.findMany({ select: { submenuId: true } })
     * 
     */
    findMany<T extends SubMenuFindManyArgs>(args?: SelectSubset<T, SubMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubMenu.
     * @param {SubMenuCreateArgs} args - Arguments to create a SubMenu.
     * @example
     * // Create one SubMenu
     * const SubMenu = await prisma.subMenu.create({
     *   data: {
     *     // ... data to create a SubMenu
     *   }
     * })
     * 
     */
    create<T extends SubMenuCreateArgs>(args: SelectSubset<T, SubMenuCreateArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubMenus.
     * @param {SubMenuCreateManyArgs} args - Arguments to create many SubMenus.
     * @example
     * // Create many SubMenus
     * const subMenu = await prisma.subMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubMenuCreateManyArgs>(args?: SelectSubset<T, SubMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubMenus and returns the data saved in the database.
     * @param {SubMenuCreateManyAndReturnArgs} args - Arguments to create many SubMenus.
     * @example
     * // Create many SubMenus
     * const subMenu = await prisma.subMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubMenus and only return the `submenuId`
     * const subMenuWithSubmenuIdOnly = await prisma.subMenu.createManyAndReturn({
     *   select: { submenuId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubMenuCreateManyAndReturnArgs>(args?: SelectSubset<T, SubMenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubMenu.
     * @param {SubMenuDeleteArgs} args - Arguments to delete one SubMenu.
     * @example
     * // Delete one SubMenu
     * const SubMenu = await prisma.subMenu.delete({
     *   where: {
     *     // ... filter to delete one SubMenu
     *   }
     * })
     * 
     */
    delete<T extends SubMenuDeleteArgs>(args: SelectSubset<T, SubMenuDeleteArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubMenu.
     * @param {SubMenuUpdateArgs} args - Arguments to update one SubMenu.
     * @example
     * // Update one SubMenu
     * const subMenu = await prisma.subMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubMenuUpdateArgs>(args: SelectSubset<T, SubMenuUpdateArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubMenus.
     * @param {SubMenuDeleteManyArgs} args - Arguments to filter SubMenus to delete.
     * @example
     * // Delete a few SubMenus
     * const { count } = await prisma.subMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubMenuDeleteManyArgs>(args?: SelectSubset<T, SubMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubMenus
     * const subMenu = await prisma.subMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubMenuUpdateManyArgs>(args: SelectSubset<T, SubMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubMenus and returns the data updated in the database.
     * @param {SubMenuUpdateManyAndReturnArgs} args - Arguments to update many SubMenus.
     * @example
     * // Update many SubMenus
     * const subMenu = await prisma.subMenu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubMenus and only return the `submenuId`
     * const subMenuWithSubmenuIdOnly = await prisma.subMenu.updateManyAndReturn({
     *   select: { submenuId: true },
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
    updateManyAndReturn<T extends SubMenuUpdateManyAndReturnArgs>(args: SelectSubset<T, SubMenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubMenu.
     * @param {SubMenuUpsertArgs} args - Arguments to update or create a SubMenu.
     * @example
     * // Update or create a SubMenu
     * const subMenu = await prisma.subMenu.upsert({
     *   create: {
     *     // ... data to create a SubMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubMenu we want to update
     *   }
     * })
     */
    upsert<T extends SubMenuUpsertArgs>(args: SelectSubset<T, SubMenuUpsertArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuCountArgs} args - Arguments to filter SubMenus to count.
     * @example
     * // Count the number of SubMenus
     * const count = await prisma.subMenu.count({
     *   where: {
     *     // ... the filter for the SubMenus we want to count
     *   }
     * })
    **/
    count<T extends SubMenuCountArgs>(
      args?: Subset<T, SubMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubMenuAggregateArgs>(args: Subset<T, SubMenuAggregateArgs>): Prisma.PrismaPromise<GetSubMenuAggregateType<T>>

    /**
     * Group by SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuGroupByArgs} args - Group by arguments.
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
      T extends SubMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubMenuGroupByArgs['orderBy'] }
        : { orderBy?: SubMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubMenu model
   */
  readonly fields: SubMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permissions<T extends SubMenu$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, SubMenu$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubMenu model
   */
  interface SubMenuFieldRefs {
    readonly submenuId: FieldRef<"SubMenu", 'String'>
    readonly name: FieldRef<"SubMenu", 'String'>
    readonly icon: FieldRef<"SubMenu", 'String'>
    readonly part: FieldRef<"SubMenu", 'String'>
    readonly position: FieldRef<"SubMenu", 'Int'>
    readonly menuId: FieldRef<"SubMenu", 'String'>
    readonly isProjectBased: FieldRef<"SubMenu", 'Boolean'>
    readonly createdAt: FieldRef<"SubMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"SubMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubMenu findUnique
   */
  export type SubMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findUniqueOrThrow
   */
  export type SubMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findFirst
   */
  export type SubMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findFirstOrThrow
   */
  export type SubMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findMany
   */
  export type SubMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenus to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu create
   */
  export type SubMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a SubMenu.
     */
    data: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
  }

  /**
   * SubMenu createMany
   */
  export type SubMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubMenus.
     */
    data: SubMenuCreateManyInput | SubMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubMenu createManyAndReturn
   */
  export type SubMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * The data used to create many SubMenus.
     */
    data: SubMenuCreateManyInput | SubMenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubMenu update
   */
  export type SubMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a SubMenu.
     */
    data: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
    /**
     * Choose, which SubMenu to update.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu updateMany
   */
  export type SubMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubMenus.
     */
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyInput>
    /**
     * Filter which SubMenus to update
     */
    where?: SubMenuWhereInput
    /**
     * Limit how many SubMenus to update.
     */
    limit?: number
  }

  /**
   * SubMenu updateManyAndReturn
   */
  export type SubMenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * The data used to update SubMenus.
     */
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyInput>
    /**
     * Filter which SubMenus to update
     */
    where?: SubMenuWhereInput
    /**
     * Limit how many SubMenus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubMenu upsert
   */
  export type SubMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the SubMenu to update in case it exists.
     */
    where: SubMenuWhereUniqueInput
    /**
     * In case the SubMenu found by the `where` argument doesn't exist, create a new SubMenu with this data.
     */
    create: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
    /**
     * In case the SubMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
  }

  /**
   * SubMenu delete
   */
  export type SubMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter which SubMenu to delete.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu deleteMany
   */
  export type SubMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenus to delete
     */
    where?: SubMenuWhereInput
    /**
     * Limit how many SubMenus to delete.
     */
    limit?: number
  }

  /**
   * SubMenu.permissions
   */
  export type SubMenu$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * SubMenu without action
   */
  export type SubMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
  }


  /**
   * Model UserPermission
   */

  export type AggregateUserPermission = {
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  export type UserPermissionMinAggregateOutputType = {
    userPermissionId: string | null
    userId: string | null
    submenuId: string | null
    projectId: string | null
    view: boolean | null
    create: boolean | null
    edit: boolean | null
    delete: boolean | null
    accessScope: $Enums.AccessScope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionMaxAggregateOutputType = {
    userPermissionId: string | null
    userId: string | null
    submenuId: string | null
    projectId: string | null
    view: boolean | null
    create: boolean | null
    edit: boolean | null
    delete: boolean | null
    accessScope: $Enums.AccessScope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionCountAggregateOutputType = {
    userPermissionId: number
    userId: number
    submenuId: number
    projectId: number
    view: number
    create: number
    edit: number
    delete: number
    accessScope: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPermissionMinAggregateInputType = {
    userPermissionId?: true
    userId?: true
    submenuId?: true
    projectId?: true
    view?: true
    create?: true
    edit?: true
    delete?: true
    accessScope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionMaxAggregateInputType = {
    userPermissionId?: true
    userId?: true
    submenuId?: true
    projectId?: true
    view?: true
    create?: true
    edit?: true
    delete?: true
    accessScope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionCountAggregateInputType = {
    userPermissionId?: true
    userId?: true
    submenuId?: true
    projectId?: true
    view?: true
    create?: true
    edit?: true
    delete?: true
    accessScope?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermission to aggregate.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPermissions
    **/
    _count?: true | UserPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPermissionMaxAggregateInputType
  }

  export type GetUserPermissionAggregateType<T extends UserPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPermission[P]>
      : GetScalarType<T[P], AggregateUserPermission[P]>
  }




  export type UserPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithAggregationInput | UserPermissionOrderByWithAggregationInput[]
    by: UserPermissionScalarFieldEnum[] | UserPermissionScalarFieldEnum
    having?: UserPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPermissionCountAggregateInputType | true
    _min?: UserPermissionMinAggregateInputType
    _max?: UserPermissionMaxAggregateInputType
  }

  export type UserPermissionGroupByOutputType = {
    userPermissionId: string
    userId: string
    submenuId: string
    projectId: string | null
    view: boolean
    create: boolean
    edit: boolean
    delete: boolean
    accessScope: $Enums.AccessScope
    createdAt: Date
    updatedAt: Date
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  type GetUserPermissionGroupByPayload<T extends UserPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userPermissionId?: boolean
    userId?: boolean
    submenuId?: boolean
    projectId?: boolean
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
    departments?: boolean | UserPermission$departmentsArgs<ExtArgs>
    _count?: boolean | UserPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userPermissionId?: boolean
    userId?: boolean
    submenuId?: boolean
    projectId?: boolean
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userPermissionId?: boolean
    userId?: boolean
    submenuId?: boolean
    projectId?: boolean
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectScalar = {
    userPermissionId?: boolean
    userId?: boolean
    submenuId?: boolean
    projectId?: boolean
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userPermissionId" | "userId" | "submenuId" | "projectId" | "view" | "create" | "edit" | "delete" | "accessScope" | "createdAt" | "updatedAt", ExtArgs["result"]["userPermission"]>
  export type UserPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
    departments?: boolean | UserPermission$departmentsArgs<ExtArgs>
    _count?: boolean | UserPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
  }
  export type UserPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    project?: boolean | UserPermission$projectArgs<ExtArgs>
  }

  export type $UserPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPermission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submenu: Prisma.$SubMenuPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs> | null
      departments: Prisma.$PermissionDepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userPermissionId: string
      userId: string
      submenuId: string
      projectId: string | null
      view: boolean
      create: boolean
      edit: boolean
      delete: boolean
      accessScope: $Enums.AccessScope
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPermission"]>
    composites: {}
  }

  type UserPermissionGetPayload<S extends boolean | null | undefined | UserPermissionDefaultArgs> = $Result.GetResult<Prisma.$UserPermissionPayload, S>

  type UserPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPermissionCountAggregateInputType | true
    }

  export interface UserPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPermission'], meta: { name: 'UserPermission' } }
    /**
     * Find zero or one UserPermission that matches the filter.
     * @param {UserPermissionFindUniqueArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPermissionFindUniqueArgs>(args: SelectSubset<T, UserPermissionFindUniqueArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPermissionFindFirstArgs>(args?: SelectSubset<T, UserPermissionFindFirstArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPermissions
     * const userPermissions = await prisma.userPermission.findMany()
     * 
     * // Get first 10 UserPermissions
     * const userPermissions = await prisma.userPermission.findMany({ take: 10 })
     * 
     * // Only select the `userPermissionId`
     * const userPermissionWithUserPermissionIdOnly = await prisma.userPermission.findMany({ select: { userPermissionId: true } })
     * 
     */
    findMany<T extends UserPermissionFindManyArgs>(args?: SelectSubset<T, UserPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPermission.
     * @param {UserPermissionCreateArgs} args - Arguments to create a UserPermission.
     * @example
     * // Create one UserPermission
     * const UserPermission = await prisma.userPermission.create({
     *   data: {
     *     // ... data to create a UserPermission
     *   }
     * })
     * 
     */
    create<T extends UserPermissionCreateArgs>(args: SelectSubset<T, UserPermissionCreateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPermissions.
     * @param {UserPermissionCreateManyArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPermissionCreateManyArgs>(args?: SelectSubset<T, UserPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPermissions and returns the data saved in the database.
     * @param {UserPermissionCreateManyAndReturnArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPermissions and only return the `userPermissionId`
     * const userPermissionWithUserPermissionIdOnly = await prisma.userPermission.createManyAndReturn({
     *   select: { userPermissionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPermission.
     * @param {UserPermissionDeleteArgs} args - Arguments to delete one UserPermission.
     * @example
     * // Delete one UserPermission
     * const UserPermission = await prisma.userPermission.delete({
     *   where: {
     *     // ... filter to delete one UserPermission
     *   }
     * })
     * 
     */
    delete<T extends UserPermissionDeleteArgs>(args: SelectSubset<T, UserPermissionDeleteArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPermission.
     * @param {UserPermissionUpdateArgs} args - Arguments to update one UserPermission.
     * @example
     * // Update one UserPermission
     * const userPermission = await prisma.userPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPermissionUpdateArgs>(args: SelectSubset<T, UserPermissionUpdateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPermissions.
     * @param {UserPermissionDeleteManyArgs} args - Arguments to filter UserPermissions to delete.
     * @example
     * // Delete a few UserPermissions
     * const { count } = await prisma.userPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPermissionDeleteManyArgs>(args?: SelectSubset<T, UserPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPermissionUpdateManyArgs>(args: SelectSubset<T, UserPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions and returns the data updated in the database.
     * @param {UserPermissionUpdateManyAndReturnArgs} args - Arguments to update many UserPermissions.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPermissions and only return the `userPermissionId`
     * const userPermissionWithUserPermissionIdOnly = await prisma.userPermission.updateManyAndReturn({
     *   select: { userPermissionId: true },
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
    updateManyAndReturn<T extends UserPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPermission.
     * @param {UserPermissionUpsertArgs} args - Arguments to update or create a UserPermission.
     * @example
     * // Update or create a UserPermission
     * const userPermission = await prisma.userPermission.upsert({
     *   create: {
     *     // ... data to create a UserPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPermission we want to update
     *   }
     * })
     */
    upsert<T extends UserPermissionUpsertArgs>(args: SelectSubset<T, UserPermissionUpsertArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionCountArgs} args - Arguments to filter UserPermissions to count.
     * @example
     * // Count the number of UserPermissions
     * const count = await prisma.userPermission.count({
     *   where: {
     *     // ... the filter for the UserPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserPermissionCountArgs>(
      args?: Subset<T, UserPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPermissionAggregateArgs>(args: Subset<T, UserPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserPermissionAggregateType<T>>

    /**
     * Group by UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionGroupByArgs} args - Group by arguments.
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
      T extends UserPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPermission model
   */
  readonly fields: UserPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submenu<T extends SubMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubMenuDefaultArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends UserPermission$projectArgs<ExtArgs> = {}>(args?: Subset<T, UserPermission$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departments<T extends UserPermission$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, UserPermission$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserPermission model
   */
  interface UserPermissionFieldRefs {
    readonly userPermissionId: FieldRef<"UserPermission", 'String'>
    readonly userId: FieldRef<"UserPermission", 'String'>
    readonly submenuId: FieldRef<"UserPermission", 'String'>
    readonly projectId: FieldRef<"UserPermission", 'String'>
    readonly view: FieldRef<"UserPermission", 'Boolean'>
    readonly create: FieldRef<"UserPermission", 'Boolean'>
    readonly edit: FieldRef<"UserPermission", 'Boolean'>
    readonly delete: FieldRef<"UserPermission", 'Boolean'>
    readonly accessScope: FieldRef<"UserPermission", 'AccessScope'>
    readonly createdAt: FieldRef<"UserPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPermission findUnique
   */
  export type UserPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findUniqueOrThrow
   */
  export type UserPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findFirst
   */
  export type UserPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findFirstOrThrow
   */
  export type UserPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findMany
   */
  export type UserPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermissions to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission create
   */
  export type UserPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPermission.
     */
    data: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
  }

  /**
   * UserPermission createMany
   */
  export type UserPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPermission createManyAndReturn
   */
  export type UserPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPermission update
   */
  export type UserPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPermission.
     */
    data: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserPermission to update.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission updateMany
   */
  export type UserPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to update.
     */
    limit?: number
  }

  /**
   * UserPermission updateManyAndReturn
   */
  export type UserPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPermission upsert
   */
  export type UserPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPermission to update in case it exists.
     */
    where: UserPermissionWhereUniqueInput
    /**
     * In case the UserPermission found by the `where` argument doesn't exist, create a new UserPermission with this data.
     */
    create: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
    /**
     * In case the UserPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
  }

  /**
   * UserPermission delete
   */
  export type UserPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter which UserPermission to delete.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission deleteMany
   */
  export type UserPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermissions to delete
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to delete.
     */
    limit?: number
  }

  /**
   * UserPermission.project
   */
  export type UserPermission$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * UserPermission.departments
   */
  export type UserPermission$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    where?: PermissionDepartmentWhereInput
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    cursor?: PermissionDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionDepartmentScalarFieldEnum | PermissionDepartmentScalarFieldEnum[]
  }

  /**
   * UserPermission without action
   */
  export type UserPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
  }


  /**
   * Model UserSuperAdmin
   */

  export type AggregateUserSuperAdmin = {
    _count: UserSuperAdminCountAggregateOutputType | null
    _min: UserSuperAdminMinAggregateOutputType | null
    _max: UserSuperAdminMaxAggregateOutputType | null
  }

  export type UserSuperAdminMinAggregateOutputType = {
    userSuperAdminId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSuperAdminMaxAggregateOutputType = {
    userSuperAdminId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSuperAdminCountAggregateOutputType = {
    userSuperAdminId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSuperAdminMinAggregateInputType = {
    userSuperAdminId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSuperAdminMaxAggregateInputType = {
    userSuperAdminId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSuperAdminCountAggregateInputType = {
    userSuperAdminId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSuperAdmin to aggregate.
     */
    where?: UserSuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSuperAdmins to fetch.
     */
    orderBy?: UserSuperAdminOrderByWithRelationInput | UserSuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSuperAdmins
    **/
    _count?: true | UserSuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSuperAdminMaxAggregateInputType
  }

  export type GetUserSuperAdminAggregateType<T extends UserSuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSuperAdmin[P]>
      : GetScalarType<T[P], AggregateUserSuperAdmin[P]>
  }




  export type UserSuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSuperAdminWhereInput
    orderBy?: UserSuperAdminOrderByWithAggregationInput | UserSuperAdminOrderByWithAggregationInput[]
    by: UserSuperAdminScalarFieldEnum[] | UserSuperAdminScalarFieldEnum
    having?: UserSuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSuperAdminCountAggregateInputType | true
    _min?: UserSuperAdminMinAggregateInputType
    _max?: UserSuperAdminMaxAggregateInputType
  }

  export type UserSuperAdminGroupByOutputType = {
    userSuperAdminId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserSuperAdminCountAggregateOutputType | null
    _min: UserSuperAdminMinAggregateOutputType | null
    _max: UserSuperAdminMaxAggregateOutputType | null
  }

  type GetUserSuperAdminGroupByPayload<T extends UserSuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], UserSuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type UserSuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSuperAdminId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSuperAdmin"]>

  export type UserSuperAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSuperAdminId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSuperAdmin"]>

  export type UserSuperAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSuperAdminId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSuperAdmin"]>

  export type UserSuperAdminSelectScalar = {
    userSuperAdminId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSuperAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userSuperAdminId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["userSuperAdmin"]>

  export type $UserSuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userSuperAdminId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSuperAdmin"]>
    composites: {}
  }

  type UserSuperAdminGetPayload<S extends boolean | null | undefined | UserSuperAdminDefaultArgs> = $Result.GetResult<Prisma.$UserSuperAdminPayload, S>

  type UserSuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSuperAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSuperAdminCountAggregateInputType | true
    }

  export interface UserSuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSuperAdmin'], meta: { name: 'UserSuperAdmin' } }
    /**
     * Find zero or one UserSuperAdmin that matches the filter.
     * @param {UserSuperAdminFindUniqueArgs} args - Arguments to find a UserSuperAdmin
     * @example
     * // Get one UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSuperAdminFindUniqueArgs>(args: SelectSubset<T, UserSuperAdminFindUniqueArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSuperAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSuperAdminFindUniqueOrThrowArgs} args - Arguments to find a UserSuperAdmin
     * @example
     * // Get one UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminFindFirstArgs} args - Arguments to find a UserSuperAdmin
     * @example
     * // Get one UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSuperAdminFindFirstArgs>(args?: SelectSubset<T, UserSuperAdminFindFirstArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminFindFirstOrThrowArgs} args - Arguments to find a UserSuperAdmin
     * @example
     * // Get one UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSuperAdmins
     * const userSuperAdmins = await prisma.userSuperAdmin.findMany()
     * 
     * // Get first 10 UserSuperAdmins
     * const userSuperAdmins = await prisma.userSuperAdmin.findMany({ take: 10 })
     * 
     * // Only select the `userSuperAdminId`
     * const userSuperAdminWithUserSuperAdminIdOnly = await prisma.userSuperAdmin.findMany({ select: { userSuperAdminId: true } })
     * 
     */
    findMany<T extends UserSuperAdminFindManyArgs>(args?: SelectSubset<T, UserSuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSuperAdmin.
     * @param {UserSuperAdminCreateArgs} args - Arguments to create a UserSuperAdmin.
     * @example
     * // Create one UserSuperAdmin
     * const UserSuperAdmin = await prisma.userSuperAdmin.create({
     *   data: {
     *     // ... data to create a UserSuperAdmin
     *   }
     * })
     * 
     */
    create<T extends UserSuperAdminCreateArgs>(args: SelectSubset<T, UserSuperAdminCreateArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSuperAdmins.
     * @param {UserSuperAdminCreateManyArgs} args - Arguments to create many UserSuperAdmins.
     * @example
     * // Create many UserSuperAdmins
     * const userSuperAdmin = await prisma.userSuperAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSuperAdminCreateManyArgs>(args?: SelectSubset<T, UserSuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSuperAdmins and returns the data saved in the database.
     * @param {UserSuperAdminCreateManyAndReturnArgs} args - Arguments to create many UserSuperAdmins.
     * @example
     * // Create many UserSuperAdmins
     * const userSuperAdmin = await prisma.userSuperAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSuperAdmins and only return the `userSuperAdminId`
     * const userSuperAdminWithUserSuperAdminIdOnly = await prisma.userSuperAdmin.createManyAndReturn({
     *   select: { userSuperAdminId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSuperAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSuperAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSuperAdmin.
     * @param {UserSuperAdminDeleteArgs} args - Arguments to delete one UserSuperAdmin.
     * @example
     * // Delete one UserSuperAdmin
     * const UserSuperAdmin = await prisma.userSuperAdmin.delete({
     *   where: {
     *     // ... filter to delete one UserSuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends UserSuperAdminDeleteArgs>(args: SelectSubset<T, UserSuperAdminDeleteArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSuperAdmin.
     * @param {UserSuperAdminUpdateArgs} args - Arguments to update one UserSuperAdmin.
     * @example
     * // Update one UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSuperAdminUpdateArgs>(args: SelectSubset<T, UserSuperAdminUpdateArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSuperAdmins.
     * @param {UserSuperAdminDeleteManyArgs} args - Arguments to filter UserSuperAdmins to delete.
     * @example
     * // Delete a few UserSuperAdmins
     * const { count } = await prisma.userSuperAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSuperAdminDeleteManyArgs>(args?: SelectSubset<T, UserSuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSuperAdmins
     * const userSuperAdmin = await prisma.userSuperAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSuperAdminUpdateManyArgs>(args: SelectSubset<T, UserSuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSuperAdmins and returns the data updated in the database.
     * @param {UserSuperAdminUpdateManyAndReturnArgs} args - Arguments to update many UserSuperAdmins.
     * @example
     * // Update many UserSuperAdmins
     * const userSuperAdmin = await prisma.userSuperAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSuperAdmins and only return the `userSuperAdminId`
     * const userSuperAdminWithUserSuperAdminIdOnly = await prisma.userSuperAdmin.updateManyAndReturn({
     *   select: { userSuperAdminId: true },
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
    updateManyAndReturn<T extends UserSuperAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSuperAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSuperAdmin.
     * @param {UserSuperAdminUpsertArgs} args - Arguments to update or create a UserSuperAdmin.
     * @example
     * // Update or create a UserSuperAdmin
     * const userSuperAdmin = await prisma.userSuperAdmin.upsert({
     *   create: {
     *     // ... data to create a UserSuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends UserSuperAdminUpsertArgs>(args: SelectSubset<T, UserSuperAdminUpsertArgs<ExtArgs>>): Prisma__UserSuperAdminClient<$Result.GetResult<Prisma.$UserSuperAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminCountArgs} args - Arguments to filter UserSuperAdmins to count.
     * @example
     * // Count the number of UserSuperAdmins
     * const count = await prisma.userSuperAdmin.count({
     *   where: {
     *     // ... the filter for the UserSuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends UserSuperAdminCountArgs>(
      args?: Subset<T, UserSuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSuperAdminAggregateArgs>(args: Subset<T, UserSuperAdminAggregateArgs>): Prisma.PrismaPromise<GetUserSuperAdminAggregateType<T>>

    /**
     * Group by UserSuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSuperAdminGroupByArgs} args - Group by arguments.
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
      T extends UserSuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: UserSuperAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSuperAdmin model
   */
  readonly fields: UserSuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserSuperAdmin model
   */
  interface UserSuperAdminFieldRefs {
    readonly userSuperAdminId: FieldRef<"UserSuperAdmin", 'String'>
    readonly userId: FieldRef<"UserSuperAdmin", 'String'>
    readonly createdAt: FieldRef<"UserSuperAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSuperAdmin findUnique
   */
  export type UserSuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserSuperAdmin to fetch.
     */
    where: UserSuperAdminWhereUniqueInput
  }

  /**
   * UserSuperAdmin findUniqueOrThrow
   */
  export type UserSuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserSuperAdmin to fetch.
     */
    where: UserSuperAdminWhereUniqueInput
  }

  /**
   * UserSuperAdmin findFirst
   */
  export type UserSuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserSuperAdmin to fetch.
     */
    where?: UserSuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSuperAdmins to fetch.
     */
    orderBy?: UserSuperAdminOrderByWithRelationInput | UserSuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSuperAdmins.
     */
    cursor?: UserSuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSuperAdmins.
     */
    distinct?: UserSuperAdminScalarFieldEnum | UserSuperAdminScalarFieldEnum[]
  }

  /**
   * UserSuperAdmin findFirstOrThrow
   */
  export type UserSuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserSuperAdmin to fetch.
     */
    where?: UserSuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSuperAdmins to fetch.
     */
    orderBy?: UserSuperAdminOrderByWithRelationInput | UserSuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSuperAdmins.
     */
    cursor?: UserSuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSuperAdmins.
     */
    distinct?: UserSuperAdminScalarFieldEnum | UserSuperAdminScalarFieldEnum[]
  }

  /**
   * UserSuperAdmin findMany
   */
  export type UserSuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which UserSuperAdmins to fetch.
     */
    where?: UserSuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSuperAdmins to fetch.
     */
    orderBy?: UserSuperAdminOrderByWithRelationInput | UserSuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSuperAdmins.
     */
    cursor?: UserSuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSuperAdmins.
     */
    skip?: number
    distinct?: UserSuperAdminScalarFieldEnum | UserSuperAdminScalarFieldEnum[]
  }

  /**
   * UserSuperAdmin create
   */
  export type UserSuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSuperAdmin.
     */
    data: XOR<UserSuperAdminCreateInput, UserSuperAdminUncheckedCreateInput>
  }

  /**
   * UserSuperAdmin createMany
   */
  export type UserSuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSuperAdmins.
     */
    data: UserSuperAdminCreateManyInput | UserSuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSuperAdmin createManyAndReturn
   */
  export type UserSuperAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * The data used to create many UserSuperAdmins.
     */
    data: UserSuperAdminCreateManyInput | UserSuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSuperAdmin update
   */
  export type UserSuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSuperAdmin.
     */
    data: XOR<UserSuperAdminUpdateInput, UserSuperAdminUncheckedUpdateInput>
    /**
     * Choose, which UserSuperAdmin to update.
     */
    where: UserSuperAdminWhereUniqueInput
  }

  /**
   * UserSuperAdmin updateMany
   */
  export type UserSuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSuperAdmins.
     */
    data: XOR<UserSuperAdminUpdateManyMutationInput, UserSuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which UserSuperAdmins to update
     */
    where?: UserSuperAdminWhereInput
    /**
     * Limit how many UserSuperAdmins to update.
     */
    limit?: number
  }

  /**
   * UserSuperAdmin updateManyAndReturn
   */
  export type UserSuperAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * The data used to update UserSuperAdmins.
     */
    data: XOR<UserSuperAdminUpdateManyMutationInput, UserSuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which UserSuperAdmins to update
     */
    where?: UserSuperAdminWhereInput
    /**
     * Limit how many UserSuperAdmins to update.
     */
    limit?: number
  }

  /**
   * UserSuperAdmin upsert
   */
  export type UserSuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSuperAdmin to update in case it exists.
     */
    where: UserSuperAdminWhereUniqueInput
    /**
     * In case the UserSuperAdmin found by the `where` argument doesn't exist, create a new UserSuperAdmin with this data.
     */
    create: XOR<UserSuperAdminCreateInput, UserSuperAdminUncheckedCreateInput>
    /**
     * In case the UserSuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSuperAdminUpdateInput, UserSuperAdminUncheckedUpdateInput>
  }

  /**
   * UserSuperAdmin delete
   */
  export type UserSuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
    /**
     * Filter which UserSuperAdmin to delete.
     */
    where: UserSuperAdminWhereUniqueInput
  }

  /**
   * UserSuperAdmin deleteMany
   */
  export type UserSuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSuperAdmins to delete
     */
    where?: UserSuperAdminWhereInput
    /**
     * Limit how many UserSuperAdmins to delete.
     */
    limit?: number
  }

  /**
   * UserSuperAdmin without action
   */
  export type UserSuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSuperAdmin
     */
    select?: UserSuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSuperAdmin
     */
    omit?: UserSuperAdminOmit<ExtArgs> | null
  }


  /**
   * Model PermissionDepartment
   */

  export type AggregatePermissionDepartment = {
    _count: PermissionDepartmentCountAggregateOutputType | null
    _min: PermissionDepartmentMinAggregateOutputType | null
    _max: PermissionDepartmentMaxAggregateOutputType | null
  }

  export type PermissionDepartmentMinAggregateOutputType = {
    permissionDepartmentId: string | null
    userPermissionId: string | null
    subDepartmentId: string | null
  }

  export type PermissionDepartmentMaxAggregateOutputType = {
    permissionDepartmentId: string | null
    userPermissionId: string | null
    subDepartmentId: string | null
  }

  export type PermissionDepartmentCountAggregateOutputType = {
    permissionDepartmentId: number
    userPermissionId: number
    subDepartmentId: number
    _all: number
  }


  export type PermissionDepartmentMinAggregateInputType = {
    permissionDepartmentId?: true
    userPermissionId?: true
    subDepartmentId?: true
  }

  export type PermissionDepartmentMaxAggregateInputType = {
    permissionDepartmentId?: true
    userPermissionId?: true
    subDepartmentId?: true
  }

  export type PermissionDepartmentCountAggregateInputType = {
    permissionDepartmentId?: true
    userPermissionId?: true
    subDepartmentId?: true
    _all?: true
  }

  export type PermissionDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionDepartment to aggregate.
     */
    where?: PermissionDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionDepartments to fetch.
     */
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionDepartments
    **/
    _count?: true | PermissionDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionDepartmentMaxAggregateInputType
  }

  export type GetPermissionDepartmentAggregateType<T extends PermissionDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionDepartment[P]>
      : GetScalarType<T[P], AggregatePermissionDepartment[P]>
  }




  export type PermissionDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionDepartmentWhereInput
    orderBy?: PermissionDepartmentOrderByWithAggregationInput | PermissionDepartmentOrderByWithAggregationInput[]
    by: PermissionDepartmentScalarFieldEnum[] | PermissionDepartmentScalarFieldEnum
    having?: PermissionDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionDepartmentCountAggregateInputType | true
    _min?: PermissionDepartmentMinAggregateInputType
    _max?: PermissionDepartmentMaxAggregateInputType
  }

  export type PermissionDepartmentGroupByOutputType = {
    permissionDepartmentId: string
    userPermissionId: string
    subDepartmentId: string
    _count: PermissionDepartmentCountAggregateOutputType | null
    _min: PermissionDepartmentMinAggregateOutputType | null
    _max: PermissionDepartmentMaxAggregateOutputType | null
  }

  type GetPermissionDepartmentGroupByPayload<T extends PermissionDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type PermissionDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionDepartmentId?: boolean
    userPermissionId?: boolean
    subDepartmentId?: boolean
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionDepartment"]>

  export type PermissionDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionDepartmentId?: boolean
    userPermissionId?: boolean
    subDepartmentId?: boolean
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionDepartment"]>

  export type PermissionDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionDepartmentId?: boolean
    userPermissionId?: boolean
    subDepartmentId?: boolean
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionDepartment"]>

  export type PermissionDepartmentSelectScalar = {
    permissionDepartmentId?: boolean
    userPermissionId?: boolean
    subDepartmentId?: boolean
  }

  export type PermissionDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permissionDepartmentId" | "userPermissionId" | "subDepartmentId", ExtArgs["result"]["permissionDepartment"]>
  export type PermissionDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }
  export type PermissionDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }
  export type PermissionDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPermission?: boolean | UserPermissionDefaultArgs<ExtArgs>
    subDepartment?: boolean | SubDepartmentDefaultArgs<ExtArgs>
  }

  export type $PermissionDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionDepartment"
    objects: {
      userPermission: Prisma.$UserPermissionPayload<ExtArgs>
      subDepartment: Prisma.$SubDepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      permissionDepartmentId: string
      userPermissionId: string
      subDepartmentId: string
    }, ExtArgs["result"]["permissionDepartment"]>
    composites: {}
  }

  type PermissionDepartmentGetPayload<S extends boolean | null | undefined | PermissionDepartmentDefaultArgs> = $Result.GetResult<Prisma.$PermissionDepartmentPayload, S>

  type PermissionDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionDepartmentCountAggregateInputType | true
    }

  export interface PermissionDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionDepartment'], meta: { name: 'PermissionDepartment' } }
    /**
     * Find zero or one PermissionDepartment that matches the filter.
     * @param {PermissionDepartmentFindUniqueArgs} args - Arguments to find a PermissionDepartment
     * @example
     * // Get one PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionDepartmentFindUniqueArgs>(args: SelectSubset<T, PermissionDepartmentFindUniqueArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PermissionDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionDepartmentFindUniqueOrThrowArgs} args - Arguments to find a PermissionDepartment
     * @example
     * // Get one PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentFindFirstArgs} args - Arguments to find a PermissionDepartment
     * @example
     * // Get one PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionDepartmentFindFirstArgs>(args?: SelectSubset<T, PermissionDepartmentFindFirstArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentFindFirstOrThrowArgs} args - Arguments to find a PermissionDepartment
     * @example
     * // Get one PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PermissionDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionDepartments
     * const permissionDepartments = await prisma.permissionDepartment.findMany()
     * 
     * // Get first 10 PermissionDepartments
     * const permissionDepartments = await prisma.permissionDepartment.findMany({ take: 10 })
     * 
     * // Only select the `permissionDepartmentId`
     * const permissionDepartmentWithPermissionDepartmentIdOnly = await prisma.permissionDepartment.findMany({ select: { permissionDepartmentId: true } })
     * 
     */
    findMany<T extends PermissionDepartmentFindManyArgs>(args?: SelectSubset<T, PermissionDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PermissionDepartment.
     * @param {PermissionDepartmentCreateArgs} args - Arguments to create a PermissionDepartment.
     * @example
     * // Create one PermissionDepartment
     * const PermissionDepartment = await prisma.permissionDepartment.create({
     *   data: {
     *     // ... data to create a PermissionDepartment
     *   }
     * })
     * 
     */
    create<T extends PermissionDepartmentCreateArgs>(args: SelectSubset<T, PermissionDepartmentCreateArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PermissionDepartments.
     * @param {PermissionDepartmentCreateManyArgs} args - Arguments to create many PermissionDepartments.
     * @example
     * // Create many PermissionDepartments
     * const permissionDepartment = await prisma.permissionDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionDepartmentCreateManyArgs>(args?: SelectSubset<T, PermissionDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionDepartments and returns the data saved in the database.
     * @param {PermissionDepartmentCreateManyAndReturnArgs} args - Arguments to create many PermissionDepartments.
     * @example
     * // Create many PermissionDepartments
     * const permissionDepartment = await prisma.permissionDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionDepartments and only return the `permissionDepartmentId`
     * const permissionDepartmentWithPermissionDepartmentIdOnly = await prisma.permissionDepartment.createManyAndReturn({
     *   select: { permissionDepartmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PermissionDepartment.
     * @param {PermissionDepartmentDeleteArgs} args - Arguments to delete one PermissionDepartment.
     * @example
     * // Delete one PermissionDepartment
     * const PermissionDepartment = await prisma.permissionDepartment.delete({
     *   where: {
     *     // ... filter to delete one PermissionDepartment
     *   }
     * })
     * 
     */
    delete<T extends PermissionDepartmentDeleteArgs>(args: SelectSubset<T, PermissionDepartmentDeleteArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PermissionDepartment.
     * @param {PermissionDepartmentUpdateArgs} args - Arguments to update one PermissionDepartment.
     * @example
     * // Update one PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionDepartmentUpdateArgs>(args: SelectSubset<T, PermissionDepartmentUpdateArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PermissionDepartments.
     * @param {PermissionDepartmentDeleteManyArgs} args - Arguments to filter PermissionDepartments to delete.
     * @example
     * // Delete a few PermissionDepartments
     * const { count } = await prisma.permissionDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDepartmentDeleteManyArgs>(args?: SelectSubset<T, PermissionDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionDepartments
     * const permissionDepartment = await prisma.permissionDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionDepartmentUpdateManyArgs>(args: SelectSubset<T, PermissionDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionDepartments and returns the data updated in the database.
     * @param {PermissionDepartmentUpdateManyAndReturnArgs} args - Arguments to update many PermissionDepartments.
     * @example
     * // Update many PermissionDepartments
     * const permissionDepartment = await prisma.permissionDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PermissionDepartments and only return the `permissionDepartmentId`
     * const permissionDepartmentWithPermissionDepartmentIdOnly = await prisma.permissionDepartment.updateManyAndReturn({
     *   select: { permissionDepartmentId: true },
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
    updateManyAndReturn<T extends PermissionDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PermissionDepartment.
     * @param {PermissionDepartmentUpsertArgs} args - Arguments to update or create a PermissionDepartment.
     * @example
     * // Update or create a PermissionDepartment
     * const permissionDepartment = await prisma.permissionDepartment.upsert({
     *   create: {
     *     // ... data to create a PermissionDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionDepartment we want to update
     *   }
     * })
     */
    upsert<T extends PermissionDepartmentUpsertArgs>(args: SelectSubset<T, PermissionDepartmentUpsertArgs<ExtArgs>>): Prisma__PermissionDepartmentClient<$Result.GetResult<Prisma.$PermissionDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PermissionDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentCountArgs} args - Arguments to filter PermissionDepartments to count.
     * @example
     * // Count the number of PermissionDepartments
     * const count = await prisma.permissionDepartment.count({
     *   where: {
     *     // ... the filter for the PermissionDepartments we want to count
     *   }
     * })
    **/
    count<T extends PermissionDepartmentCountArgs>(
      args?: Subset<T, PermissionDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionDepartmentAggregateArgs>(args: Subset<T, PermissionDepartmentAggregateArgs>): Prisma.PrismaPromise<GetPermissionDepartmentAggregateType<T>>

    /**
     * Group by PermissionDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionDepartmentGroupByArgs} args - Group by arguments.
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
      T extends PermissionDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: PermissionDepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionDepartment model
   */
  readonly fields: PermissionDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPermission<T extends UserPermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPermissionDefaultArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subDepartment<T extends SubDepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubDepartmentDefaultArgs<ExtArgs>>): Prisma__SubDepartmentClient<$Result.GetResult<Prisma.$SubDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PermissionDepartment model
   */
  interface PermissionDepartmentFieldRefs {
    readonly permissionDepartmentId: FieldRef<"PermissionDepartment", 'String'>
    readonly userPermissionId: FieldRef<"PermissionDepartment", 'String'>
    readonly subDepartmentId: FieldRef<"PermissionDepartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PermissionDepartment findUnique
   */
  export type PermissionDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PermissionDepartment to fetch.
     */
    where: PermissionDepartmentWhereUniqueInput
  }

  /**
   * PermissionDepartment findUniqueOrThrow
   */
  export type PermissionDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PermissionDepartment to fetch.
     */
    where: PermissionDepartmentWhereUniqueInput
  }

  /**
   * PermissionDepartment findFirst
   */
  export type PermissionDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PermissionDepartment to fetch.
     */
    where?: PermissionDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionDepartments to fetch.
     */
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionDepartments.
     */
    cursor?: PermissionDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionDepartments.
     */
    distinct?: PermissionDepartmentScalarFieldEnum | PermissionDepartmentScalarFieldEnum[]
  }

  /**
   * PermissionDepartment findFirstOrThrow
   */
  export type PermissionDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PermissionDepartment to fetch.
     */
    where?: PermissionDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionDepartments to fetch.
     */
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionDepartments.
     */
    cursor?: PermissionDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionDepartments.
     */
    distinct?: PermissionDepartmentScalarFieldEnum | PermissionDepartmentScalarFieldEnum[]
  }

  /**
   * PermissionDepartment findMany
   */
  export type PermissionDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which PermissionDepartments to fetch.
     */
    where?: PermissionDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionDepartments to fetch.
     */
    orderBy?: PermissionDepartmentOrderByWithRelationInput | PermissionDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionDepartments.
     */
    cursor?: PermissionDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionDepartments.
     */
    skip?: number
    distinct?: PermissionDepartmentScalarFieldEnum | PermissionDepartmentScalarFieldEnum[]
  }

  /**
   * PermissionDepartment create
   */
  export type PermissionDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionDepartment.
     */
    data: XOR<PermissionDepartmentCreateInput, PermissionDepartmentUncheckedCreateInput>
  }

  /**
   * PermissionDepartment createMany
   */
  export type PermissionDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionDepartments.
     */
    data: PermissionDepartmentCreateManyInput | PermissionDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionDepartment createManyAndReturn
   */
  export type PermissionDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many PermissionDepartments.
     */
    data: PermissionDepartmentCreateManyInput | PermissionDepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionDepartment update
   */
  export type PermissionDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionDepartment.
     */
    data: XOR<PermissionDepartmentUpdateInput, PermissionDepartmentUncheckedUpdateInput>
    /**
     * Choose, which PermissionDepartment to update.
     */
    where: PermissionDepartmentWhereUniqueInput
  }

  /**
   * PermissionDepartment updateMany
   */
  export type PermissionDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionDepartments.
     */
    data: XOR<PermissionDepartmentUpdateManyMutationInput, PermissionDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which PermissionDepartments to update
     */
    where?: PermissionDepartmentWhereInput
    /**
     * Limit how many PermissionDepartments to update.
     */
    limit?: number
  }

  /**
   * PermissionDepartment updateManyAndReturn
   */
  export type PermissionDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update PermissionDepartments.
     */
    data: XOR<PermissionDepartmentUpdateManyMutationInput, PermissionDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which PermissionDepartments to update
     */
    where?: PermissionDepartmentWhereInput
    /**
     * Limit how many PermissionDepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionDepartment upsert
   */
  export type PermissionDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionDepartment to update in case it exists.
     */
    where: PermissionDepartmentWhereUniqueInput
    /**
     * In case the PermissionDepartment found by the `where` argument doesn't exist, create a new PermissionDepartment with this data.
     */
    create: XOR<PermissionDepartmentCreateInput, PermissionDepartmentUncheckedCreateInput>
    /**
     * In case the PermissionDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionDepartmentUpdateInput, PermissionDepartmentUncheckedUpdateInput>
  }

  /**
   * PermissionDepartment delete
   */
  export type PermissionDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
    /**
     * Filter which PermissionDepartment to delete.
     */
    where: PermissionDepartmentWhereUniqueInput
  }

  /**
   * PermissionDepartment deleteMany
   */
  export type PermissionDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionDepartments to delete
     */
    where?: PermissionDepartmentWhereInput
    /**
     * Limit how many PermissionDepartments to delete.
     */
    limit?: number
  }

  /**
   * PermissionDepartment without action
   */
  export type PermissionDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionDepartment
     */
    select?: PermissionDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionDepartment
     */
    omit?: PermissionDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model ScbPayments
   */

  export type AggregateScbPayments = {
    _count: ScbPaymentsCountAggregateOutputType | null
    _min: ScbPaymentsMinAggregateOutputType | null
    _max: ScbPaymentsMaxAggregateOutputType | null
  }

  export type ScbPaymentsMinAggregateOutputType = {
    scbId: string | null
    accountId: string | null
    reverseFlag: string | null
    payeeProxyId: string | null
    payeeProxyType: string | null
    payeeAccountNumber: string | null
    payerAccountNumber: string | null
    payerName: string | null
    sendingBankCode: string | null
    receivingBankCode: string | null
    amount: string | null
    transactionId: string | null
    transactionDateandTime: string | null
    billPaymentRef1: string | null
    billPaymentRef2: string | null
    billPaymentRef3: string | null
    currencyCode: string | null
    channelCode: string | null
    transactionType: string | null
    partnerTransactionId: string | null
    createdAt: Date | null
  }

  export type ScbPaymentsMaxAggregateOutputType = {
    scbId: string | null
    accountId: string | null
    reverseFlag: string | null
    payeeProxyId: string | null
    payeeProxyType: string | null
    payeeAccountNumber: string | null
    payerAccountNumber: string | null
    payerName: string | null
    sendingBankCode: string | null
    receivingBankCode: string | null
    amount: string | null
    transactionId: string | null
    transactionDateandTime: string | null
    billPaymentRef1: string | null
    billPaymentRef2: string | null
    billPaymentRef3: string | null
    currencyCode: string | null
    channelCode: string | null
    transactionType: string | null
    partnerTransactionId: string | null
    createdAt: Date | null
  }

  export type ScbPaymentsCountAggregateOutputType = {
    scbId: number
    accountId: number
    reverseFlag: number
    payeeProxyId: number
    payeeProxyType: number
    payeeAccountNumber: number
    payerAccountNumber: number
    payerName: number
    sendingBankCode: number
    receivingBankCode: number
    amount: number
    transactionId: number
    transactionDateandTime: number
    billPaymentRef1: number
    billPaymentRef2: number
    billPaymentRef3: number
    currencyCode: number
    channelCode: number
    transactionType: number
    partnerTransactionId: number
    createdAt: number
    _all: number
  }


  export type ScbPaymentsMinAggregateInputType = {
    scbId?: true
    accountId?: true
    reverseFlag?: true
    payeeProxyId?: true
    payeeProxyType?: true
    payeeAccountNumber?: true
    payerAccountNumber?: true
    payerName?: true
    sendingBankCode?: true
    receivingBankCode?: true
    amount?: true
    transactionId?: true
    transactionDateandTime?: true
    billPaymentRef1?: true
    billPaymentRef2?: true
    billPaymentRef3?: true
    currencyCode?: true
    channelCode?: true
    transactionType?: true
    partnerTransactionId?: true
    createdAt?: true
  }

  export type ScbPaymentsMaxAggregateInputType = {
    scbId?: true
    accountId?: true
    reverseFlag?: true
    payeeProxyId?: true
    payeeProxyType?: true
    payeeAccountNumber?: true
    payerAccountNumber?: true
    payerName?: true
    sendingBankCode?: true
    receivingBankCode?: true
    amount?: true
    transactionId?: true
    transactionDateandTime?: true
    billPaymentRef1?: true
    billPaymentRef2?: true
    billPaymentRef3?: true
    currencyCode?: true
    channelCode?: true
    transactionType?: true
    partnerTransactionId?: true
    createdAt?: true
  }

  export type ScbPaymentsCountAggregateInputType = {
    scbId?: true
    accountId?: true
    reverseFlag?: true
    payeeProxyId?: true
    payeeProxyType?: true
    payeeAccountNumber?: true
    payerAccountNumber?: true
    payerName?: true
    sendingBankCode?: true
    receivingBankCode?: true
    amount?: true
    transactionId?: true
    transactionDateandTime?: true
    billPaymentRef1?: true
    billPaymentRef2?: true
    billPaymentRef3?: true
    currencyCode?: true
    channelCode?: true
    transactionType?: true
    partnerTransactionId?: true
    createdAt?: true
    _all?: true
  }

  export type ScbPaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbPayments to aggregate.
     */
    where?: ScbPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbPayments to fetch.
     */
    orderBy?: ScbPaymentsOrderByWithRelationInput | ScbPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScbPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScbPayments
    **/
    _count?: true | ScbPaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScbPaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScbPaymentsMaxAggregateInputType
  }

  export type GetScbPaymentsAggregateType<T extends ScbPaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateScbPayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScbPayments[P]>
      : GetScalarType<T[P], AggregateScbPayments[P]>
  }




  export type ScbPaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScbPaymentsWhereInput
    orderBy?: ScbPaymentsOrderByWithAggregationInput | ScbPaymentsOrderByWithAggregationInput[]
    by: ScbPaymentsScalarFieldEnum[] | ScbPaymentsScalarFieldEnum
    having?: ScbPaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScbPaymentsCountAggregateInputType | true
    _min?: ScbPaymentsMinAggregateInputType
    _max?: ScbPaymentsMaxAggregateInputType
  }

  export type ScbPaymentsGroupByOutputType = {
    scbId: string
    accountId: string | null
    reverseFlag: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3: string | null
    currencyCode: string
    channelCode: string | null
    transactionType: string
    partnerTransactionId: string | null
    createdAt: Date
    _count: ScbPaymentsCountAggregateOutputType | null
    _min: ScbPaymentsMinAggregateOutputType | null
    _max: ScbPaymentsMaxAggregateOutputType | null
  }

  type GetScbPaymentsGroupByPayload<T extends ScbPaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScbPaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScbPaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScbPaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], ScbPaymentsGroupByOutputType[P]>
        }
      >
    >


  export type ScbPaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbId?: boolean
    accountId?: boolean
    reverseFlag?: boolean
    payeeProxyId?: boolean
    payeeProxyType?: boolean
    payeeAccountNumber?: boolean
    payerAccountNumber?: boolean
    payerName?: boolean
    sendingBankCode?: boolean
    receivingBankCode?: boolean
    amount?: boolean
    transactionId?: boolean
    transactionDateandTime?: boolean
    billPaymentRef1?: boolean
    billPaymentRef2?: boolean
    billPaymentRef3?: boolean
    currencyCode?: boolean
    channelCode?: boolean
    transactionType?: boolean
    partnerTransactionId?: boolean
    createdAt?: boolean
    ScbSlipVerification?: boolean | ScbPayments$ScbSlipVerificationArgs<ExtArgs>
    ScbVoid?: boolean | ScbPayments$ScbVoidArgs<ExtArgs>
    _count?: boolean | ScbPaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbPayments"]>

  export type ScbPaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbId?: boolean
    accountId?: boolean
    reverseFlag?: boolean
    payeeProxyId?: boolean
    payeeProxyType?: boolean
    payeeAccountNumber?: boolean
    payerAccountNumber?: boolean
    payerName?: boolean
    sendingBankCode?: boolean
    receivingBankCode?: boolean
    amount?: boolean
    transactionId?: boolean
    transactionDateandTime?: boolean
    billPaymentRef1?: boolean
    billPaymentRef2?: boolean
    billPaymentRef3?: boolean
    currencyCode?: boolean
    channelCode?: boolean
    transactionType?: boolean
    partnerTransactionId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scbPayments"]>

  export type ScbPaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbId?: boolean
    accountId?: boolean
    reverseFlag?: boolean
    payeeProxyId?: boolean
    payeeProxyType?: boolean
    payeeAccountNumber?: boolean
    payerAccountNumber?: boolean
    payerName?: boolean
    sendingBankCode?: boolean
    receivingBankCode?: boolean
    amount?: boolean
    transactionId?: boolean
    transactionDateandTime?: boolean
    billPaymentRef1?: boolean
    billPaymentRef2?: boolean
    billPaymentRef3?: boolean
    currencyCode?: boolean
    channelCode?: boolean
    transactionType?: boolean
    partnerTransactionId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scbPayments"]>

  export type ScbPaymentsSelectScalar = {
    scbId?: boolean
    accountId?: boolean
    reverseFlag?: boolean
    payeeProxyId?: boolean
    payeeProxyType?: boolean
    payeeAccountNumber?: boolean
    payerAccountNumber?: boolean
    payerName?: boolean
    sendingBankCode?: boolean
    receivingBankCode?: boolean
    amount?: boolean
    transactionId?: boolean
    transactionDateandTime?: boolean
    billPaymentRef1?: boolean
    billPaymentRef2?: boolean
    billPaymentRef3?: boolean
    currencyCode?: boolean
    channelCode?: boolean
    transactionType?: boolean
    partnerTransactionId?: boolean
    createdAt?: boolean
  }

  export type ScbPaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scbId" | "accountId" | "reverseFlag" | "payeeProxyId" | "payeeProxyType" | "payeeAccountNumber" | "payerAccountNumber" | "payerName" | "sendingBankCode" | "receivingBankCode" | "amount" | "transactionId" | "transactionDateandTime" | "billPaymentRef1" | "billPaymentRef2" | "billPaymentRef3" | "currencyCode" | "channelCode" | "transactionType" | "partnerTransactionId" | "createdAt", ExtArgs["result"]["scbPayments"]>
  export type ScbPaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScbSlipVerification?: boolean | ScbPayments$ScbSlipVerificationArgs<ExtArgs>
    ScbVoid?: boolean | ScbPayments$ScbVoidArgs<ExtArgs>
    _count?: boolean | ScbPaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScbPaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScbPaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScbPaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScbPayments"
    objects: {
      ScbSlipVerification: Prisma.$ScbSlipVerificationPayload<ExtArgs>[]
      ScbVoid: Prisma.$ScbVoidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      scbId: string
      accountId: string | null
      reverseFlag: string | null
      payeeProxyId: string
      payeeProxyType: string
      payeeAccountNumber: string
      payerAccountNumber: string
      payerName: string
      sendingBankCode: string
      receivingBankCode: string
      amount: string
      transactionId: string
      transactionDateandTime: string
      billPaymentRef1: string
      billPaymentRef2: string
      billPaymentRef3: string | null
      currencyCode: string
      channelCode: string | null
      transactionType: string
      partnerTransactionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["scbPayments"]>
    composites: {}
  }

  type ScbPaymentsGetPayload<S extends boolean | null | undefined | ScbPaymentsDefaultArgs> = $Result.GetResult<Prisma.$ScbPaymentsPayload, S>

  type ScbPaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScbPaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScbPaymentsCountAggregateInputType | true
    }

  export interface ScbPaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScbPayments'], meta: { name: 'ScbPayments' } }
    /**
     * Find zero or one ScbPayments that matches the filter.
     * @param {ScbPaymentsFindUniqueArgs} args - Arguments to find a ScbPayments
     * @example
     * // Get one ScbPayments
     * const scbPayments = await prisma.scbPayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScbPaymentsFindUniqueArgs>(args: SelectSubset<T, ScbPaymentsFindUniqueArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScbPayments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScbPaymentsFindUniqueOrThrowArgs} args - Arguments to find a ScbPayments
     * @example
     * // Get one ScbPayments
     * const scbPayments = await prisma.scbPayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScbPaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ScbPaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsFindFirstArgs} args - Arguments to find a ScbPayments
     * @example
     * // Get one ScbPayments
     * const scbPayments = await prisma.scbPayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScbPaymentsFindFirstArgs>(args?: SelectSubset<T, ScbPaymentsFindFirstArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbPayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsFindFirstOrThrowArgs} args - Arguments to find a ScbPayments
     * @example
     * // Get one ScbPayments
     * const scbPayments = await prisma.scbPayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScbPaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ScbPaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScbPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScbPayments
     * const scbPayments = await prisma.scbPayments.findMany()
     * 
     * // Get first 10 ScbPayments
     * const scbPayments = await prisma.scbPayments.findMany({ take: 10 })
     * 
     * // Only select the `scbId`
     * const scbPaymentsWithScbIdOnly = await prisma.scbPayments.findMany({ select: { scbId: true } })
     * 
     */
    findMany<T extends ScbPaymentsFindManyArgs>(args?: SelectSubset<T, ScbPaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScbPayments.
     * @param {ScbPaymentsCreateArgs} args - Arguments to create a ScbPayments.
     * @example
     * // Create one ScbPayments
     * const ScbPayments = await prisma.scbPayments.create({
     *   data: {
     *     // ... data to create a ScbPayments
     *   }
     * })
     * 
     */
    create<T extends ScbPaymentsCreateArgs>(args: SelectSubset<T, ScbPaymentsCreateArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScbPayments.
     * @param {ScbPaymentsCreateManyArgs} args - Arguments to create many ScbPayments.
     * @example
     * // Create many ScbPayments
     * const scbPayments = await prisma.scbPayments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScbPaymentsCreateManyArgs>(args?: SelectSubset<T, ScbPaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScbPayments and returns the data saved in the database.
     * @param {ScbPaymentsCreateManyAndReturnArgs} args - Arguments to create many ScbPayments.
     * @example
     * // Create many ScbPayments
     * const scbPayments = await prisma.scbPayments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScbPayments and only return the `scbId`
     * const scbPaymentsWithScbIdOnly = await prisma.scbPayments.createManyAndReturn({
     *   select: { scbId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScbPaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, ScbPaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScbPayments.
     * @param {ScbPaymentsDeleteArgs} args - Arguments to delete one ScbPayments.
     * @example
     * // Delete one ScbPayments
     * const ScbPayments = await prisma.scbPayments.delete({
     *   where: {
     *     // ... filter to delete one ScbPayments
     *   }
     * })
     * 
     */
    delete<T extends ScbPaymentsDeleteArgs>(args: SelectSubset<T, ScbPaymentsDeleteArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScbPayments.
     * @param {ScbPaymentsUpdateArgs} args - Arguments to update one ScbPayments.
     * @example
     * // Update one ScbPayments
     * const scbPayments = await prisma.scbPayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScbPaymentsUpdateArgs>(args: SelectSubset<T, ScbPaymentsUpdateArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScbPayments.
     * @param {ScbPaymentsDeleteManyArgs} args - Arguments to filter ScbPayments to delete.
     * @example
     * // Delete a few ScbPayments
     * const { count } = await prisma.scbPayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScbPaymentsDeleteManyArgs>(args?: SelectSubset<T, ScbPaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScbPayments
     * const scbPayments = await prisma.scbPayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScbPaymentsUpdateManyArgs>(args: SelectSubset<T, ScbPaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbPayments and returns the data updated in the database.
     * @param {ScbPaymentsUpdateManyAndReturnArgs} args - Arguments to update many ScbPayments.
     * @example
     * // Update many ScbPayments
     * const scbPayments = await prisma.scbPayments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScbPayments and only return the `scbId`
     * const scbPaymentsWithScbIdOnly = await prisma.scbPayments.updateManyAndReturn({
     *   select: { scbId: true },
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
    updateManyAndReturn<T extends ScbPaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, ScbPaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScbPayments.
     * @param {ScbPaymentsUpsertArgs} args - Arguments to update or create a ScbPayments.
     * @example
     * // Update or create a ScbPayments
     * const scbPayments = await prisma.scbPayments.upsert({
     *   create: {
     *     // ... data to create a ScbPayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScbPayments we want to update
     *   }
     * })
     */
    upsert<T extends ScbPaymentsUpsertArgs>(args: SelectSubset<T, ScbPaymentsUpsertArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScbPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsCountArgs} args - Arguments to filter ScbPayments to count.
     * @example
     * // Count the number of ScbPayments
     * const count = await prisma.scbPayments.count({
     *   where: {
     *     // ... the filter for the ScbPayments we want to count
     *   }
     * })
    **/
    count<T extends ScbPaymentsCountArgs>(
      args?: Subset<T, ScbPaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScbPaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScbPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScbPaymentsAggregateArgs>(args: Subset<T, ScbPaymentsAggregateArgs>): Prisma.PrismaPromise<GetScbPaymentsAggregateType<T>>

    /**
     * Group by ScbPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbPaymentsGroupByArgs} args - Group by arguments.
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
      T extends ScbPaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScbPaymentsGroupByArgs['orderBy'] }
        : { orderBy?: ScbPaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScbPaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScbPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScbPayments model
   */
  readonly fields: ScbPaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScbPayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScbPaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ScbSlipVerification<T extends ScbPayments$ScbSlipVerificationArgs<ExtArgs> = {}>(args?: Subset<T, ScbPayments$ScbSlipVerificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ScbVoid<T extends ScbPayments$ScbVoidArgs<ExtArgs> = {}>(args?: Subset<T, ScbPayments$ScbVoidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ScbPayments model
   */
  interface ScbPaymentsFieldRefs {
    readonly scbId: FieldRef<"ScbPayments", 'String'>
    readonly accountId: FieldRef<"ScbPayments", 'String'>
    readonly reverseFlag: FieldRef<"ScbPayments", 'String'>
    readonly payeeProxyId: FieldRef<"ScbPayments", 'String'>
    readonly payeeProxyType: FieldRef<"ScbPayments", 'String'>
    readonly payeeAccountNumber: FieldRef<"ScbPayments", 'String'>
    readonly payerAccountNumber: FieldRef<"ScbPayments", 'String'>
    readonly payerName: FieldRef<"ScbPayments", 'String'>
    readonly sendingBankCode: FieldRef<"ScbPayments", 'String'>
    readonly receivingBankCode: FieldRef<"ScbPayments", 'String'>
    readonly amount: FieldRef<"ScbPayments", 'String'>
    readonly transactionId: FieldRef<"ScbPayments", 'String'>
    readonly transactionDateandTime: FieldRef<"ScbPayments", 'String'>
    readonly billPaymentRef1: FieldRef<"ScbPayments", 'String'>
    readonly billPaymentRef2: FieldRef<"ScbPayments", 'String'>
    readonly billPaymentRef3: FieldRef<"ScbPayments", 'String'>
    readonly currencyCode: FieldRef<"ScbPayments", 'String'>
    readonly channelCode: FieldRef<"ScbPayments", 'String'>
    readonly transactionType: FieldRef<"ScbPayments", 'String'>
    readonly partnerTransactionId: FieldRef<"ScbPayments", 'String'>
    readonly createdAt: FieldRef<"ScbPayments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScbPayments findUnique
   */
  export type ScbPaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which ScbPayments to fetch.
     */
    where: ScbPaymentsWhereUniqueInput
  }

  /**
   * ScbPayments findUniqueOrThrow
   */
  export type ScbPaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which ScbPayments to fetch.
     */
    where: ScbPaymentsWhereUniqueInput
  }

  /**
   * ScbPayments findFirst
   */
  export type ScbPaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which ScbPayments to fetch.
     */
    where?: ScbPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbPayments to fetch.
     */
    orderBy?: ScbPaymentsOrderByWithRelationInput | ScbPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbPayments.
     */
    cursor?: ScbPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbPayments.
     */
    distinct?: ScbPaymentsScalarFieldEnum | ScbPaymentsScalarFieldEnum[]
  }

  /**
   * ScbPayments findFirstOrThrow
   */
  export type ScbPaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which ScbPayments to fetch.
     */
    where?: ScbPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbPayments to fetch.
     */
    orderBy?: ScbPaymentsOrderByWithRelationInput | ScbPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbPayments.
     */
    cursor?: ScbPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbPayments.
     */
    distinct?: ScbPaymentsScalarFieldEnum | ScbPaymentsScalarFieldEnum[]
  }

  /**
   * ScbPayments findMany
   */
  export type ScbPaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter, which ScbPayments to fetch.
     */
    where?: ScbPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbPayments to fetch.
     */
    orderBy?: ScbPaymentsOrderByWithRelationInput | ScbPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScbPayments.
     */
    cursor?: ScbPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbPayments.
     */
    skip?: number
    distinct?: ScbPaymentsScalarFieldEnum | ScbPaymentsScalarFieldEnum[]
  }

  /**
   * ScbPayments create
   */
  export type ScbPaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ScbPayments.
     */
    data: XOR<ScbPaymentsCreateInput, ScbPaymentsUncheckedCreateInput>
  }

  /**
   * ScbPayments createMany
   */
  export type ScbPaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScbPayments.
     */
    data: ScbPaymentsCreateManyInput | ScbPaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScbPayments createManyAndReturn
   */
  export type ScbPaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many ScbPayments.
     */
    data: ScbPaymentsCreateManyInput | ScbPaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScbPayments update
   */
  export type ScbPaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ScbPayments.
     */
    data: XOR<ScbPaymentsUpdateInput, ScbPaymentsUncheckedUpdateInput>
    /**
     * Choose, which ScbPayments to update.
     */
    where: ScbPaymentsWhereUniqueInput
  }

  /**
   * ScbPayments updateMany
   */
  export type ScbPaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScbPayments.
     */
    data: XOR<ScbPaymentsUpdateManyMutationInput, ScbPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which ScbPayments to update
     */
    where?: ScbPaymentsWhereInput
    /**
     * Limit how many ScbPayments to update.
     */
    limit?: number
  }

  /**
   * ScbPayments updateManyAndReturn
   */
  export type ScbPaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * The data used to update ScbPayments.
     */
    data: XOR<ScbPaymentsUpdateManyMutationInput, ScbPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which ScbPayments to update
     */
    where?: ScbPaymentsWhereInput
    /**
     * Limit how many ScbPayments to update.
     */
    limit?: number
  }

  /**
   * ScbPayments upsert
   */
  export type ScbPaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ScbPayments to update in case it exists.
     */
    where: ScbPaymentsWhereUniqueInput
    /**
     * In case the ScbPayments found by the `where` argument doesn't exist, create a new ScbPayments with this data.
     */
    create: XOR<ScbPaymentsCreateInput, ScbPaymentsUncheckedCreateInput>
    /**
     * In case the ScbPayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScbPaymentsUpdateInput, ScbPaymentsUncheckedUpdateInput>
  }

  /**
   * ScbPayments delete
   */
  export type ScbPaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
    /**
     * Filter which ScbPayments to delete.
     */
    where: ScbPaymentsWhereUniqueInput
  }

  /**
   * ScbPayments deleteMany
   */
  export type ScbPaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbPayments to delete
     */
    where?: ScbPaymentsWhereInput
    /**
     * Limit how many ScbPayments to delete.
     */
    limit?: number
  }

  /**
   * ScbPayments.ScbSlipVerification
   */
  export type ScbPayments$ScbSlipVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    where?: ScbSlipVerificationWhereInput
    orderBy?: ScbSlipVerificationOrderByWithRelationInput | ScbSlipVerificationOrderByWithRelationInput[]
    cursor?: ScbSlipVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScbSlipVerificationScalarFieldEnum | ScbSlipVerificationScalarFieldEnum[]
  }

  /**
   * ScbPayments.ScbVoid
   */
  export type ScbPayments$ScbVoidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    where?: ScbVoidWhereInput
    orderBy?: ScbVoidOrderByWithRelationInput | ScbVoidOrderByWithRelationInput[]
    cursor?: ScbVoidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScbVoidScalarFieldEnum | ScbVoidScalarFieldEnum[]
  }

  /**
   * ScbPayments without action
   */
  export type ScbPaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbPayments
     */
    select?: ScbPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbPayments
     */
    omit?: ScbPaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbPaymentsInclude<ExtArgs> | null
  }


  /**
   * Model ScbSlipVerification
   */

  export type AggregateScbSlipVerification = {
    _count: ScbSlipVerificationCountAggregateOutputType | null
    _min: ScbSlipVerificationMinAggregateOutputType | null
    _max: ScbSlipVerificationMaxAggregateOutputType | null
  }

  export type ScbSlipVerificationMinAggregateOutputType = {
    scbVerificationId: string | null
    scbId: string | null
    transTime: string | null
    transRef: string | null
    displayName: string | null
    bankType: string | null
    bankName: string | null
    transDate: string | null
    createdAt: Date | null
  }

  export type ScbSlipVerificationMaxAggregateOutputType = {
    scbVerificationId: string | null
    scbId: string | null
    transTime: string | null
    transRef: string | null
    displayName: string | null
    bankType: string | null
    bankName: string | null
    transDate: string | null
    createdAt: Date | null
  }

  export type ScbSlipVerificationCountAggregateOutputType = {
    scbVerificationId: number
    scbId: number
    transTime: number
    transRef: number
    displayName: number
    bankType: number
    bankName: number
    transDate: number
    createdAt: number
    _all: number
  }


  export type ScbSlipVerificationMinAggregateInputType = {
    scbVerificationId?: true
    scbId?: true
    transTime?: true
    transRef?: true
    displayName?: true
    bankType?: true
    bankName?: true
    transDate?: true
    createdAt?: true
  }

  export type ScbSlipVerificationMaxAggregateInputType = {
    scbVerificationId?: true
    scbId?: true
    transTime?: true
    transRef?: true
    displayName?: true
    bankType?: true
    bankName?: true
    transDate?: true
    createdAt?: true
  }

  export type ScbSlipVerificationCountAggregateInputType = {
    scbVerificationId?: true
    scbId?: true
    transTime?: true
    transRef?: true
    displayName?: true
    bankType?: true
    bankName?: true
    transDate?: true
    createdAt?: true
    _all?: true
  }

  export type ScbSlipVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbSlipVerification to aggregate.
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbSlipVerifications to fetch.
     */
    orderBy?: ScbSlipVerificationOrderByWithRelationInput | ScbSlipVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScbSlipVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbSlipVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbSlipVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScbSlipVerifications
    **/
    _count?: true | ScbSlipVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScbSlipVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScbSlipVerificationMaxAggregateInputType
  }

  export type GetScbSlipVerificationAggregateType<T extends ScbSlipVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateScbSlipVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScbSlipVerification[P]>
      : GetScalarType<T[P], AggregateScbSlipVerification[P]>
  }




  export type ScbSlipVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScbSlipVerificationWhereInput
    orderBy?: ScbSlipVerificationOrderByWithAggregationInput | ScbSlipVerificationOrderByWithAggregationInput[]
    by: ScbSlipVerificationScalarFieldEnum[] | ScbSlipVerificationScalarFieldEnum
    having?: ScbSlipVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScbSlipVerificationCountAggregateInputType | true
    _min?: ScbSlipVerificationMinAggregateInputType
    _max?: ScbSlipVerificationMaxAggregateInputType
  }

  export type ScbSlipVerificationGroupByOutputType = {
    scbVerificationId: string
    scbId: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt: Date
    _count: ScbSlipVerificationCountAggregateOutputType | null
    _min: ScbSlipVerificationMinAggregateOutputType | null
    _max: ScbSlipVerificationMaxAggregateOutputType | null
  }

  type GetScbSlipVerificationGroupByPayload<T extends ScbSlipVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScbSlipVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScbSlipVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScbSlipVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], ScbSlipVerificationGroupByOutputType[P]>
        }
      >
    >


  export type ScbSlipVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVerificationId?: boolean
    scbId?: boolean
    transTime?: boolean
    transRef?: boolean
    displayName?: boolean
    bankType?: boolean
    bankName?: boolean
    transDate?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbSlipVerification"]>

  export type ScbSlipVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVerificationId?: boolean
    scbId?: boolean
    transTime?: boolean
    transRef?: boolean
    displayName?: boolean
    bankType?: boolean
    bankName?: boolean
    transDate?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbSlipVerification"]>

  export type ScbSlipVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVerificationId?: boolean
    scbId?: boolean
    transTime?: boolean
    transRef?: boolean
    displayName?: boolean
    bankType?: boolean
    bankName?: boolean
    transDate?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbSlipVerification"]>

  export type ScbSlipVerificationSelectScalar = {
    scbVerificationId?: boolean
    scbId?: boolean
    transTime?: boolean
    transRef?: boolean
    displayName?: boolean
    bankType?: boolean
    bankName?: boolean
    transDate?: boolean
    createdAt?: boolean
  }

  export type ScbSlipVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scbVerificationId" | "scbId" | "transTime" | "transRef" | "displayName" | "bankType" | "bankName" | "transDate" | "createdAt", ExtArgs["result"]["scbSlipVerification"]>
  export type ScbSlipVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }
  export type ScbSlipVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }
  export type ScbSlipVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }

  export type $ScbSlipVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScbSlipVerification"
    objects: {
      scbPayments: Prisma.$ScbPaymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scbVerificationId: string
      scbId: string
      transTime: string
      transRef: string
      displayName: string
      bankType: string
      bankName: string
      transDate: string
      createdAt: Date
    }, ExtArgs["result"]["scbSlipVerification"]>
    composites: {}
  }

  type ScbSlipVerificationGetPayload<S extends boolean | null | undefined | ScbSlipVerificationDefaultArgs> = $Result.GetResult<Prisma.$ScbSlipVerificationPayload, S>

  type ScbSlipVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScbSlipVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScbSlipVerificationCountAggregateInputType | true
    }

  export interface ScbSlipVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScbSlipVerification'], meta: { name: 'ScbSlipVerification' } }
    /**
     * Find zero or one ScbSlipVerification that matches the filter.
     * @param {ScbSlipVerificationFindUniqueArgs} args - Arguments to find a ScbSlipVerification
     * @example
     * // Get one ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScbSlipVerificationFindUniqueArgs>(args: SelectSubset<T, ScbSlipVerificationFindUniqueArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScbSlipVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScbSlipVerificationFindUniqueOrThrowArgs} args - Arguments to find a ScbSlipVerification
     * @example
     * // Get one ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScbSlipVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ScbSlipVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbSlipVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationFindFirstArgs} args - Arguments to find a ScbSlipVerification
     * @example
     * // Get one ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScbSlipVerificationFindFirstArgs>(args?: SelectSubset<T, ScbSlipVerificationFindFirstArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbSlipVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationFindFirstOrThrowArgs} args - Arguments to find a ScbSlipVerification
     * @example
     * // Get one ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScbSlipVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ScbSlipVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScbSlipVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScbSlipVerifications
     * const scbSlipVerifications = await prisma.scbSlipVerification.findMany()
     * 
     * // Get first 10 ScbSlipVerifications
     * const scbSlipVerifications = await prisma.scbSlipVerification.findMany({ take: 10 })
     * 
     * // Only select the `scbVerificationId`
     * const scbSlipVerificationWithScbVerificationIdOnly = await prisma.scbSlipVerification.findMany({ select: { scbVerificationId: true } })
     * 
     */
    findMany<T extends ScbSlipVerificationFindManyArgs>(args?: SelectSubset<T, ScbSlipVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScbSlipVerification.
     * @param {ScbSlipVerificationCreateArgs} args - Arguments to create a ScbSlipVerification.
     * @example
     * // Create one ScbSlipVerification
     * const ScbSlipVerification = await prisma.scbSlipVerification.create({
     *   data: {
     *     // ... data to create a ScbSlipVerification
     *   }
     * })
     * 
     */
    create<T extends ScbSlipVerificationCreateArgs>(args: SelectSubset<T, ScbSlipVerificationCreateArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScbSlipVerifications.
     * @param {ScbSlipVerificationCreateManyArgs} args - Arguments to create many ScbSlipVerifications.
     * @example
     * // Create many ScbSlipVerifications
     * const scbSlipVerification = await prisma.scbSlipVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScbSlipVerificationCreateManyArgs>(args?: SelectSubset<T, ScbSlipVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScbSlipVerifications and returns the data saved in the database.
     * @param {ScbSlipVerificationCreateManyAndReturnArgs} args - Arguments to create many ScbSlipVerifications.
     * @example
     * // Create many ScbSlipVerifications
     * const scbSlipVerification = await prisma.scbSlipVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScbSlipVerifications and only return the `scbVerificationId`
     * const scbSlipVerificationWithScbVerificationIdOnly = await prisma.scbSlipVerification.createManyAndReturn({
     *   select: { scbVerificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScbSlipVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ScbSlipVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScbSlipVerification.
     * @param {ScbSlipVerificationDeleteArgs} args - Arguments to delete one ScbSlipVerification.
     * @example
     * // Delete one ScbSlipVerification
     * const ScbSlipVerification = await prisma.scbSlipVerification.delete({
     *   where: {
     *     // ... filter to delete one ScbSlipVerification
     *   }
     * })
     * 
     */
    delete<T extends ScbSlipVerificationDeleteArgs>(args: SelectSubset<T, ScbSlipVerificationDeleteArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScbSlipVerification.
     * @param {ScbSlipVerificationUpdateArgs} args - Arguments to update one ScbSlipVerification.
     * @example
     * // Update one ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScbSlipVerificationUpdateArgs>(args: SelectSubset<T, ScbSlipVerificationUpdateArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScbSlipVerifications.
     * @param {ScbSlipVerificationDeleteManyArgs} args - Arguments to filter ScbSlipVerifications to delete.
     * @example
     * // Delete a few ScbSlipVerifications
     * const { count } = await prisma.scbSlipVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScbSlipVerificationDeleteManyArgs>(args?: SelectSubset<T, ScbSlipVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbSlipVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScbSlipVerifications
     * const scbSlipVerification = await prisma.scbSlipVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScbSlipVerificationUpdateManyArgs>(args: SelectSubset<T, ScbSlipVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbSlipVerifications and returns the data updated in the database.
     * @param {ScbSlipVerificationUpdateManyAndReturnArgs} args - Arguments to update many ScbSlipVerifications.
     * @example
     * // Update many ScbSlipVerifications
     * const scbSlipVerification = await prisma.scbSlipVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScbSlipVerifications and only return the `scbVerificationId`
     * const scbSlipVerificationWithScbVerificationIdOnly = await prisma.scbSlipVerification.updateManyAndReturn({
     *   select: { scbVerificationId: true },
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
    updateManyAndReturn<T extends ScbSlipVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ScbSlipVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScbSlipVerification.
     * @param {ScbSlipVerificationUpsertArgs} args - Arguments to update or create a ScbSlipVerification.
     * @example
     * // Update or create a ScbSlipVerification
     * const scbSlipVerification = await prisma.scbSlipVerification.upsert({
     *   create: {
     *     // ... data to create a ScbSlipVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScbSlipVerification we want to update
     *   }
     * })
     */
    upsert<T extends ScbSlipVerificationUpsertArgs>(args: SelectSubset<T, ScbSlipVerificationUpsertArgs<ExtArgs>>): Prisma__ScbSlipVerificationClient<$Result.GetResult<Prisma.$ScbSlipVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScbSlipVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationCountArgs} args - Arguments to filter ScbSlipVerifications to count.
     * @example
     * // Count the number of ScbSlipVerifications
     * const count = await prisma.scbSlipVerification.count({
     *   where: {
     *     // ... the filter for the ScbSlipVerifications we want to count
     *   }
     * })
    **/
    count<T extends ScbSlipVerificationCountArgs>(
      args?: Subset<T, ScbSlipVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScbSlipVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScbSlipVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScbSlipVerificationAggregateArgs>(args: Subset<T, ScbSlipVerificationAggregateArgs>): Prisma.PrismaPromise<GetScbSlipVerificationAggregateType<T>>

    /**
     * Group by ScbSlipVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbSlipVerificationGroupByArgs} args - Group by arguments.
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
      T extends ScbSlipVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScbSlipVerificationGroupByArgs['orderBy'] }
        : { orderBy?: ScbSlipVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScbSlipVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScbSlipVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScbSlipVerification model
   */
  readonly fields: ScbSlipVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScbSlipVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScbSlipVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scbPayments<T extends ScbPaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScbPaymentsDefaultArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScbSlipVerification model
   */
  interface ScbSlipVerificationFieldRefs {
    readonly scbVerificationId: FieldRef<"ScbSlipVerification", 'String'>
    readonly scbId: FieldRef<"ScbSlipVerification", 'String'>
    readonly transTime: FieldRef<"ScbSlipVerification", 'String'>
    readonly transRef: FieldRef<"ScbSlipVerification", 'String'>
    readonly displayName: FieldRef<"ScbSlipVerification", 'String'>
    readonly bankType: FieldRef<"ScbSlipVerification", 'String'>
    readonly bankName: FieldRef<"ScbSlipVerification", 'String'>
    readonly transDate: FieldRef<"ScbSlipVerification", 'String'>
    readonly createdAt: FieldRef<"ScbSlipVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScbSlipVerification findUnique
   */
  export type ScbSlipVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ScbSlipVerification to fetch.
     */
    where: ScbSlipVerificationWhereUniqueInput
  }

  /**
   * ScbSlipVerification findUniqueOrThrow
   */
  export type ScbSlipVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ScbSlipVerification to fetch.
     */
    where: ScbSlipVerificationWhereUniqueInput
  }

  /**
   * ScbSlipVerification findFirst
   */
  export type ScbSlipVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ScbSlipVerification to fetch.
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbSlipVerifications to fetch.
     */
    orderBy?: ScbSlipVerificationOrderByWithRelationInput | ScbSlipVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbSlipVerifications.
     */
    cursor?: ScbSlipVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbSlipVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbSlipVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbSlipVerifications.
     */
    distinct?: ScbSlipVerificationScalarFieldEnum | ScbSlipVerificationScalarFieldEnum[]
  }

  /**
   * ScbSlipVerification findFirstOrThrow
   */
  export type ScbSlipVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ScbSlipVerification to fetch.
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbSlipVerifications to fetch.
     */
    orderBy?: ScbSlipVerificationOrderByWithRelationInput | ScbSlipVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbSlipVerifications.
     */
    cursor?: ScbSlipVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbSlipVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbSlipVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbSlipVerifications.
     */
    distinct?: ScbSlipVerificationScalarFieldEnum | ScbSlipVerificationScalarFieldEnum[]
  }

  /**
   * ScbSlipVerification findMany
   */
  export type ScbSlipVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter, which ScbSlipVerifications to fetch.
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbSlipVerifications to fetch.
     */
    orderBy?: ScbSlipVerificationOrderByWithRelationInput | ScbSlipVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScbSlipVerifications.
     */
    cursor?: ScbSlipVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbSlipVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbSlipVerifications.
     */
    skip?: number
    distinct?: ScbSlipVerificationScalarFieldEnum | ScbSlipVerificationScalarFieldEnum[]
  }

  /**
   * ScbSlipVerification create
   */
  export type ScbSlipVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a ScbSlipVerification.
     */
    data: XOR<ScbSlipVerificationCreateInput, ScbSlipVerificationUncheckedCreateInput>
  }

  /**
   * ScbSlipVerification createMany
   */
  export type ScbSlipVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScbSlipVerifications.
     */
    data: ScbSlipVerificationCreateManyInput | ScbSlipVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScbSlipVerification createManyAndReturn
   */
  export type ScbSlipVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many ScbSlipVerifications.
     */
    data: ScbSlipVerificationCreateManyInput | ScbSlipVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScbSlipVerification update
   */
  export type ScbSlipVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a ScbSlipVerification.
     */
    data: XOR<ScbSlipVerificationUpdateInput, ScbSlipVerificationUncheckedUpdateInput>
    /**
     * Choose, which ScbSlipVerification to update.
     */
    where: ScbSlipVerificationWhereUniqueInput
  }

  /**
   * ScbSlipVerification updateMany
   */
  export type ScbSlipVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScbSlipVerifications.
     */
    data: XOR<ScbSlipVerificationUpdateManyMutationInput, ScbSlipVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ScbSlipVerifications to update
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * Limit how many ScbSlipVerifications to update.
     */
    limit?: number
  }

  /**
   * ScbSlipVerification updateManyAndReturn
   */
  export type ScbSlipVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * The data used to update ScbSlipVerifications.
     */
    data: XOR<ScbSlipVerificationUpdateManyMutationInput, ScbSlipVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ScbSlipVerifications to update
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * Limit how many ScbSlipVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScbSlipVerification upsert
   */
  export type ScbSlipVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the ScbSlipVerification to update in case it exists.
     */
    where: ScbSlipVerificationWhereUniqueInput
    /**
     * In case the ScbSlipVerification found by the `where` argument doesn't exist, create a new ScbSlipVerification with this data.
     */
    create: XOR<ScbSlipVerificationCreateInput, ScbSlipVerificationUncheckedCreateInput>
    /**
     * In case the ScbSlipVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScbSlipVerificationUpdateInput, ScbSlipVerificationUncheckedUpdateInput>
  }

  /**
   * ScbSlipVerification delete
   */
  export type ScbSlipVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
    /**
     * Filter which ScbSlipVerification to delete.
     */
    where: ScbSlipVerificationWhereUniqueInput
  }

  /**
   * ScbSlipVerification deleteMany
   */
  export type ScbSlipVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbSlipVerifications to delete
     */
    where?: ScbSlipVerificationWhereInput
    /**
     * Limit how many ScbSlipVerifications to delete.
     */
    limit?: number
  }

  /**
   * ScbSlipVerification without action
   */
  export type ScbSlipVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbSlipVerification
     */
    select?: ScbSlipVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbSlipVerification
     */
    omit?: ScbSlipVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbSlipVerificationInclude<ExtArgs> | null
  }


  /**
   * Model ScbVoid
   */

  export type AggregateScbVoid = {
    _count: ScbVoidCountAggregateOutputType | null
    _min: ScbVoidMinAggregateOutputType | null
    _max: ScbVoidMaxAggregateOutputType | null
  }

  export type ScbVoidMinAggregateOutputType = {
    scbVoidId: string | null
    scbId: string | null
    responseStatus: string | null
    responseCode: string | null
    responseCodeDescription: string | null
    extStatusDesc: string | null
    createdAt: Date | null
  }

  export type ScbVoidMaxAggregateOutputType = {
    scbVoidId: string | null
    scbId: string | null
    responseStatus: string | null
    responseCode: string | null
    responseCodeDescription: string | null
    extStatusDesc: string | null
    createdAt: Date | null
  }

  export type ScbVoidCountAggregateOutputType = {
    scbVoidId: number
    scbId: number
    responseStatus: number
    responseCode: number
    responseCodeDescription: number
    extStatusDesc: number
    createdAt: number
    _all: number
  }


  export type ScbVoidMinAggregateInputType = {
    scbVoidId?: true
    scbId?: true
    responseStatus?: true
    responseCode?: true
    responseCodeDescription?: true
    extStatusDesc?: true
    createdAt?: true
  }

  export type ScbVoidMaxAggregateInputType = {
    scbVoidId?: true
    scbId?: true
    responseStatus?: true
    responseCode?: true
    responseCodeDescription?: true
    extStatusDesc?: true
    createdAt?: true
  }

  export type ScbVoidCountAggregateInputType = {
    scbVoidId?: true
    scbId?: true
    responseStatus?: true
    responseCode?: true
    responseCodeDescription?: true
    extStatusDesc?: true
    createdAt?: true
    _all?: true
  }

  export type ScbVoidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbVoid to aggregate.
     */
    where?: ScbVoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbVoids to fetch.
     */
    orderBy?: ScbVoidOrderByWithRelationInput | ScbVoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScbVoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbVoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbVoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScbVoids
    **/
    _count?: true | ScbVoidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScbVoidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScbVoidMaxAggregateInputType
  }

  export type GetScbVoidAggregateType<T extends ScbVoidAggregateArgs> = {
        [P in keyof T & keyof AggregateScbVoid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScbVoid[P]>
      : GetScalarType<T[P], AggregateScbVoid[P]>
  }




  export type ScbVoidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScbVoidWhereInput
    orderBy?: ScbVoidOrderByWithAggregationInput | ScbVoidOrderByWithAggregationInput[]
    by: ScbVoidScalarFieldEnum[] | ScbVoidScalarFieldEnum
    having?: ScbVoidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScbVoidCountAggregateInputType | true
    _min?: ScbVoidMinAggregateInputType
    _max?: ScbVoidMaxAggregateInputType
  }

  export type ScbVoidGroupByOutputType = {
    scbVoidId: string
    scbId: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt: Date
    _count: ScbVoidCountAggregateOutputType | null
    _min: ScbVoidMinAggregateOutputType | null
    _max: ScbVoidMaxAggregateOutputType | null
  }

  type GetScbVoidGroupByPayload<T extends ScbVoidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScbVoidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScbVoidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScbVoidGroupByOutputType[P]>
            : GetScalarType<T[P], ScbVoidGroupByOutputType[P]>
        }
      >
    >


  export type ScbVoidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVoidId?: boolean
    scbId?: boolean
    responseStatus?: boolean
    responseCode?: boolean
    responseCodeDescription?: boolean
    extStatusDesc?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbVoid"]>

  export type ScbVoidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVoidId?: boolean
    scbId?: boolean
    responseStatus?: boolean
    responseCode?: boolean
    responseCodeDescription?: boolean
    extStatusDesc?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbVoid"]>

  export type ScbVoidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scbVoidId?: boolean
    scbId?: boolean
    responseStatus?: boolean
    responseCode?: boolean
    responseCodeDescription?: boolean
    extStatusDesc?: boolean
    createdAt?: boolean
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scbVoid"]>

  export type ScbVoidSelectScalar = {
    scbVoidId?: boolean
    scbId?: boolean
    responseStatus?: boolean
    responseCode?: boolean
    responseCodeDescription?: boolean
    extStatusDesc?: boolean
    createdAt?: boolean
  }

  export type ScbVoidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scbVoidId" | "scbId" | "responseStatus" | "responseCode" | "responseCodeDescription" | "extStatusDesc" | "createdAt", ExtArgs["result"]["scbVoid"]>
  export type ScbVoidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }
  export type ScbVoidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }
  export type ScbVoidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scbPayments?: boolean | ScbPaymentsDefaultArgs<ExtArgs>
  }

  export type $ScbVoidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScbVoid"
    objects: {
      scbPayments: Prisma.$ScbPaymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scbVoidId: string
      scbId: string
      responseStatus: string
      responseCode: string
      responseCodeDescription: string
      extStatusDesc: string
      createdAt: Date
    }, ExtArgs["result"]["scbVoid"]>
    composites: {}
  }

  type ScbVoidGetPayload<S extends boolean | null | undefined | ScbVoidDefaultArgs> = $Result.GetResult<Prisma.$ScbVoidPayload, S>

  type ScbVoidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScbVoidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScbVoidCountAggregateInputType | true
    }

  export interface ScbVoidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScbVoid'], meta: { name: 'ScbVoid' } }
    /**
     * Find zero or one ScbVoid that matches the filter.
     * @param {ScbVoidFindUniqueArgs} args - Arguments to find a ScbVoid
     * @example
     * // Get one ScbVoid
     * const scbVoid = await prisma.scbVoid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScbVoidFindUniqueArgs>(args: SelectSubset<T, ScbVoidFindUniqueArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScbVoid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScbVoidFindUniqueOrThrowArgs} args - Arguments to find a ScbVoid
     * @example
     * // Get one ScbVoid
     * const scbVoid = await prisma.scbVoid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScbVoidFindUniqueOrThrowArgs>(args: SelectSubset<T, ScbVoidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbVoid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidFindFirstArgs} args - Arguments to find a ScbVoid
     * @example
     * // Get one ScbVoid
     * const scbVoid = await prisma.scbVoid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScbVoidFindFirstArgs>(args?: SelectSubset<T, ScbVoidFindFirstArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScbVoid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidFindFirstOrThrowArgs} args - Arguments to find a ScbVoid
     * @example
     * // Get one ScbVoid
     * const scbVoid = await prisma.scbVoid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScbVoidFindFirstOrThrowArgs>(args?: SelectSubset<T, ScbVoidFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScbVoids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScbVoids
     * const scbVoids = await prisma.scbVoid.findMany()
     * 
     * // Get first 10 ScbVoids
     * const scbVoids = await prisma.scbVoid.findMany({ take: 10 })
     * 
     * // Only select the `scbVoidId`
     * const scbVoidWithScbVoidIdOnly = await prisma.scbVoid.findMany({ select: { scbVoidId: true } })
     * 
     */
    findMany<T extends ScbVoidFindManyArgs>(args?: SelectSubset<T, ScbVoidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScbVoid.
     * @param {ScbVoidCreateArgs} args - Arguments to create a ScbVoid.
     * @example
     * // Create one ScbVoid
     * const ScbVoid = await prisma.scbVoid.create({
     *   data: {
     *     // ... data to create a ScbVoid
     *   }
     * })
     * 
     */
    create<T extends ScbVoidCreateArgs>(args: SelectSubset<T, ScbVoidCreateArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScbVoids.
     * @param {ScbVoidCreateManyArgs} args - Arguments to create many ScbVoids.
     * @example
     * // Create many ScbVoids
     * const scbVoid = await prisma.scbVoid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScbVoidCreateManyArgs>(args?: SelectSubset<T, ScbVoidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScbVoids and returns the data saved in the database.
     * @param {ScbVoidCreateManyAndReturnArgs} args - Arguments to create many ScbVoids.
     * @example
     * // Create many ScbVoids
     * const scbVoid = await prisma.scbVoid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScbVoids and only return the `scbVoidId`
     * const scbVoidWithScbVoidIdOnly = await prisma.scbVoid.createManyAndReturn({
     *   select: { scbVoidId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScbVoidCreateManyAndReturnArgs>(args?: SelectSubset<T, ScbVoidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScbVoid.
     * @param {ScbVoidDeleteArgs} args - Arguments to delete one ScbVoid.
     * @example
     * // Delete one ScbVoid
     * const ScbVoid = await prisma.scbVoid.delete({
     *   where: {
     *     // ... filter to delete one ScbVoid
     *   }
     * })
     * 
     */
    delete<T extends ScbVoidDeleteArgs>(args: SelectSubset<T, ScbVoidDeleteArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScbVoid.
     * @param {ScbVoidUpdateArgs} args - Arguments to update one ScbVoid.
     * @example
     * // Update one ScbVoid
     * const scbVoid = await prisma.scbVoid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScbVoidUpdateArgs>(args: SelectSubset<T, ScbVoidUpdateArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScbVoids.
     * @param {ScbVoidDeleteManyArgs} args - Arguments to filter ScbVoids to delete.
     * @example
     * // Delete a few ScbVoids
     * const { count } = await prisma.scbVoid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScbVoidDeleteManyArgs>(args?: SelectSubset<T, ScbVoidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbVoids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScbVoids
     * const scbVoid = await prisma.scbVoid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScbVoidUpdateManyArgs>(args: SelectSubset<T, ScbVoidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScbVoids and returns the data updated in the database.
     * @param {ScbVoidUpdateManyAndReturnArgs} args - Arguments to update many ScbVoids.
     * @example
     * // Update many ScbVoids
     * const scbVoid = await prisma.scbVoid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScbVoids and only return the `scbVoidId`
     * const scbVoidWithScbVoidIdOnly = await prisma.scbVoid.updateManyAndReturn({
     *   select: { scbVoidId: true },
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
    updateManyAndReturn<T extends ScbVoidUpdateManyAndReturnArgs>(args: SelectSubset<T, ScbVoidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScbVoid.
     * @param {ScbVoidUpsertArgs} args - Arguments to update or create a ScbVoid.
     * @example
     * // Update or create a ScbVoid
     * const scbVoid = await prisma.scbVoid.upsert({
     *   create: {
     *     // ... data to create a ScbVoid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScbVoid we want to update
     *   }
     * })
     */
    upsert<T extends ScbVoidUpsertArgs>(args: SelectSubset<T, ScbVoidUpsertArgs<ExtArgs>>): Prisma__ScbVoidClient<$Result.GetResult<Prisma.$ScbVoidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScbVoids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidCountArgs} args - Arguments to filter ScbVoids to count.
     * @example
     * // Count the number of ScbVoids
     * const count = await prisma.scbVoid.count({
     *   where: {
     *     // ... the filter for the ScbVoids we want to count
     *   }
     * })
    **/
    count<T extends ScbVoidCountArgs>(
      args?: Subset<T, ScbVoidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScbVoidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScbVoid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScbVoidAggregateArgs>(args: Subset<T, ScbVoidAggregateArgs>): Prisma.PrismaPromise<GetScbVoidAggregateType<T>>

    /**
     * Group by ScbVoid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScbVoidGroupByArgs} args - Group by arguments.
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
      T extends ScbVoidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScbVoidGroupByArgs['orderBy'] }
        : { orderBy?: ScbVoidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScbVoidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScbVoidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScbVoid model
   */
  readonly fields: ScbVoidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScbVoid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScbVoidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scbPayments<T extends ScbPaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScbPaymentsDefaultArgs<ExtArgs>>): Prisma__ScbPaymentsClient<$Result.GetResult<Prisma.$ScbPaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScbVoid model
   */
  interface ScbVoidFieldRefs {
    readonly scbVoidId: FieldRef<"ScbVoid", 'String'>
    readonly scbId: FieldRef<"ScbVoid", 'String'>
    readonly responseStatus: FieldRef<"ScbVoid", 'String'>
    readonly responseCode: FieldRef<"ScbVoid", 'String'>
    readonly responseCodeDescription: FieldRef<"ScbVoid", 'String'>
    readonly extStatusDesc: FieldRef<"ScbVoid", 'String'>
    readonly createdAt: FieldRef<"ScbVoid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScbVoid findUnique
   */
  export type ScbVoidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter, which ScbVoid to fetch.
     */
    where: ScbVoidWhereUniqueInput
  }

  /**
   * ScbVoid findUniqueOrThrow
   */
  export type ScbVoidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter, which ScbVoid to fetch.
     */
    where: ScbVoidWhereUniqueInput
  }

  /**
   * ScbVoid findFirst
   */
  export type ScbVoidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter, which ScbVoid to fetch.
     */
    where?: ScbVoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbVoids to fetch.
     */
    orderBy?: ScbVoidOrderByWithRelationInput | ScbVoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbVoids.
     */
    cursor?: ScbVoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbVoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbVoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbVoids.
     */
    distinct?: ScbVoidScalarFieldEnum | ScbVoidScalarFieldEnum[]
  }

  /**
   * ScbVoid findFirstOrThrow
   */
  export type ScbVoidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter, which ScbVoid to fetch.
     */
    where?: ScbVoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbVoids to fetch.
     */
    orderBy?: ScbVoidOrderByWithRelationInput | ScbVoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScbVoids.
     */
    cursor?: ScbVoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbVoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbVoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScbVoids.
     */
    distinct?: ScbVoidScalarFieldEnum | ScbVoidScalarFieldEnum[]
  }

  /**
   * ScbVoid findMany
   */
  export type ScbVoidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter, which ScbVoids to fetch.
     */
    where?: ScbVoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScbVoids to fetch.
     */
    orderBy?: ScbVoidOrderByWithRelationInput | ScbVoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScbVoids.
     */
    cursor?: ScbVoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScbVoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScbVoids.
     */
    skip?: number
    distinct?: ScbVoidScalarFieldEnum | ScbVoidScalarFieldEnum[]
  }

  /**
   * ScbVoid create
   */
  export type ScbVoidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * The data needed to create a ScbVoid.
     */
    data: XOR<ScbVoidCreateInput, ScbVoidUncheckedCreateInput>
  }

  /**
   * ScbVoid createMany
   */
  export type ScbVoidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScbVoids.
     */
    data: ScbVoidCreateManyInput | ScbVoidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScbVoid createManyAndReturn
   */
  export type ScbVoidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * The data used to create many ScbVoids.
     */
    data: ScbVoidCreateManyInput | ScbVoidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScbVoid update
   */
  export type ScbVoidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * The data needed to update a ScbVoid.
     */
    data: XOR<ScbVoidUpdateInput, ScbVoidUncheckedUpdateInput>
    /**
     * Choose, which ScbVoid to update.
     */
    where: ScbVoidWhereUniqueInput
  }

  /**
   * ScbVoid updateMany
   */
  export type ScbVoidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScbVoids.
     */
    data: XOR<ScbVoidUpdateManyMutationInput, ScbVoidUncheckedUpdateManyInput>
    /**
     * Filter which ScbVoids to update
     */
    where?: ScbVoidWhereInput
    /**
     * Limit how many ScbVoids to update.
     */
    limit?: number
  }

  /**
   * ScbVoid updateManyAndReturn
   */
  export type ScbVoidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * The data used to update ScbVoids.
     */
    data: XOR<ScbVoidUpdateManyMutationInput, ScbVoidUncheckedUpdateManyInput>
    /**
     * Filter which ScbVoids to update
     */
    where?: ScbVoidWhereInput
    /**
     * Limit how many ScbVoids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScbVoid upsert
   */
  export type ScbVoidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * The filter to search for the ScbVoid to update in case it exists.
     */
    where: ScbVoidWhereUniqueInput
    /**
     * In case the ScbVoid found by the `where` argument doesn't exist, create a new ScbVoid with this data.
     */
    create: XOR<ScbVoidCreateInput, ScbVoidUncheckedCreateInput>
    /**
     * In case the ScbVoid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScbVoidUpdateInput, ScbVoidUncheckedUpdateInput>
  }

  /**
   * ScbVoid delete
   */
  export type ScbVoidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
    /**
     * Filter which ScbVoid to delete.
     */
    where: ScbVoidWhereUniqueInput
  }

  /**
   * ScbVoid deleteMany
   */
  export type ScbVoidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScbVoids to delete
     */
    where?: ScbVoidWhereInput
    /**
     * Limit how many ScbVoids to delete.
     */
    limit?: number
  }

  /**
   * ScbVoid without action
   */
  export type ScbVoidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScbVoid
     */
    select?: ScbVoidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScbVoid
     */
    omit?: ScbVoidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScbVoidInclude<ExtArgs> | null
  }


  /**
   * Model VisitorBlock
   */

  export type AggregateVisitorBlock = {
    _count: VisitorBlockCountAggregateOutputType | null
    _min: VisitorBlockMinAggregateOutputType | null
    _max: VisitorBlockMaxAggregateOutputType | null
  }

  export type VisitorBlockMinAggregateOutputType = {
    blockId: string | null
    visitorId: string | null
    blockedAt: Date | null
    unblockAt: Date | null
  }

  export type VisitorBlockMaxAggregateOutputType = {
    blockId: string | null
    visitorId: string | null
    blockedAt: Date | null
    unblockAt: Date | null
  }

  export type VisitorBlockCountAggregateOutputType = {
    blockId: number
    visitorId: number
    blockedAt: number
    unblockAt: number
    _all: number
  }


  export type VisitorBlockMinAggregateInputType = {
    blockId?: true
    visitorId?: true
    blockedAt?: true
    unblockAt?: true
  }

  export type VisitorBlockMaxAggregateInputType = {
    blockId?: true
    visitorId?: true
    blockedAt?: true
    unblockAt?: true
  }

  export type VisitorBlockCountAggregateInputType = {
    blockId?: true
    visitorId?: true
    blockedAt?: true
    unblockAt?: true
    _all?: true
  }

  export type VisitorBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorBlock to aggregate.
     */
    where?: VisitorBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBlocks to fetch.
     */
    orderBy?: VisitorBlockOrderByWithRelationInput | VisitorBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorBlocks
    **/
    _count?: true | VisitorBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorBlockMaxAggregateInputType
  }

  export type GetVisitorBlockAggregateType<T extends VisitorBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorBlock[P]>
      : GetScalarType<T[P], AggregateVisitorBlock[P]>
  }




  export type VisitorBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorBlockWhereInput
    orderBy?: VisitorBlockOrderByWithAggregationInput | VisitorBlockOrderByWithAggregationInput[]
    by: VisitorBlockScalarFieldEnum[] | VisitorBlockScalarFieldEnum
    having?: VisitorBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorBlockCountAggregateInputType | true
    _min?: VisitorBlockMinAggregateInputType
    _max?: VisitorBlockMaxAggregateInputType
  }

  export type VisitorBlockGroupByOutputType = {
    blockId: string
    visitorId: string
    blockedAt: Date
    unblockAt: Date
    _count: VisitorBlockCountAggregateOutputType | null
    _min: VisitorBlockMinAggregateOutputType | null
    _max: VisitorBlockMaxAggregateOutputType | null
  }

  type GetVisitorBlockGroupByPayload<T extends VisitorBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorBlockGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorBlockGroupByOutputType[P]>
        }
      >
    >


  export type VisitorBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockId?: boolean
    visitorId?: boolean
    blockedAt?: boolean
    unblockAt?: boolean
  }, ExtArgs["result"]["visitorBlock"]>

  export type VisitorBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockId?: boolean
    visitorId?: boolean
    blockedAt?: boolean
    unblockAt?: boolean
  }, ExtArgs["result"]["visitorBlock"]>

  export type VisitorBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockId?: boolean
    visitorId?: boolean
    blockedAt?: boolean
    unblockAt?: boolean
  }, ExtArgs["result"]["visitorBlock"]>

  export type VisitorBlockSelectScalar = {
    blockId?: boolean
    visitorId?: boolean
    blockedAt?: boolean
    unblockAt?: boolean
  }

  export type VisitorBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"blockId" | "visitorId" | "blockedAt" | "unblockAt", ExtArgs["result"]["visitorBlock"]>

  export type $VisitorBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      blockId: string
      visitorId: string
      blockedAt: Date
      unblockAt: Date
    }, ExtArgs["result"]["visitorBlock"]>
    composites: {}
  }

  type VisitorBlockGetPayload<S extends boolean | null | undefined | VisitorBlockDefaultArgs> = $Result.GetResult<Prisma.$VisitorBlockPayload, S>

  type VisitorBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorBlockCountAggregateInputType | true
    }

  export interface VisitorBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorBlock'], meta: { name: 'VisitorBlock' } }
    /**
     * Find zero or one VisitorBlock that matches the filter.
     * @param {VisitorBlockFindUniqueArgs} args - Arguments to find a VisitorBlock
     * @example
     * // Get one VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorBlockFindUniqueArgs>(args: SelectSubset<T, VisitorBlockFindUniqueArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorBlockFindUniqueOrThrowArgs} args - Arguments to find a VisitorBlock
     * @example
     * // Get one VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockFindFirstArgs} args - Arguments to find a VisitorBlock
     * @example
     * // Get one VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorBlockFindFirstArgs>(args?: SelectSubset<T, VisitorBlockFindFirstArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockFindFirstOrThrowArgs} args - Arguments to find a VisitorBlock
     * @example
     * // Get one VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorBlocks
     * const visitorBlocks = await prisma.visitorBlock.findMany()
     * 
     * // Get first 10 VisitorBlocks
     * const visitorBlocks = await prisma.visitorBlock.findMany({ take: 10 })
     * 
     * // Only select the `blockId`
     * const visitorBlockWithBlockIdOnly = await prisma.visitorBlock.findMany({ select: { blockId: true } })
     * 
     */
    findMany<T extends VisitorBlockFindManyArgs>(args?: SelectSubset<T, VisitorBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorBlock.
     * @param {VisitorBlockCreateArgs} args - Arguments to create a VisitorBlock.
     * @example
     * // Create one VisitorBlock
     * const VisitorBlock = await prisma.visitorBlock.create({
     *   data: {
     *     // ... data to create a VisitorBlock
     *   }
     * })
     * 
     */
    create<T extends VisitorBlockCreateArgs>(args: SelectSubset<T, VisitorBlockCreateArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorBlocks.
     * @param {VisitorBlockCreateManyArgs} args - Arguments to create many VisitorBlocks.
     * @example
     * // Create many VisitorBlocks
     * const visitorBlock = await prisma.visitorBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorBlockCreateManyArgs>(args?: SelectSubset<T, VisitorBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorBlocks and returns the data saved in the database.
     * @param {VisitorBlockCreateManyAndReturnArgs} args - Arguments to create many VisitorBlocks.
     * @example
     * // Create many VisitorBlocks
     * const visitorBlock = await prisma.visitorBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorBlocks and only return the `blockId`
     * const visitorBlockWithBlockIdOnly = await prisma.visitorBlock.createManyAndReturn({
     *   select: { blockId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorBlock.
     * @param {VisitorBlockDeleteArgs} args - Arguments to delete one VisitorBlock.
     * @example
     * // Delete one VisitorBlock
     * const VisitorBlock = await prisma.visitorBlock.delete({
     *   where: {
     *     // ... filter to delete one VisitorBlock
     *   }
     * })
     * 
     */
    delete<T extends VisitorBlockDeleteArgs>(args: SelectSubset<T, VisitorBlockDeleteArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorBlock.
     * @param {VisitorBlockUpdateArgs} args - Arguments to update one VisitorBlock.
     * @example
     * // Update one VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorBlockUpdateArgs>(args: SelectSubset<T, VisitorBlockUpdateArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorBlocks.
     * @param {VisitorBlockDeleteManyArgs} args - Arguments to filter VisitorBlocks to delete.
     * @example
     * // Delete a few VisitorBlocks
     * const { count } = await prisma.visitorBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorBlockDeleteManyArgs>(args?: SelectSubset<T, VisitorBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorBlocks
     * const visitorBlock = await prisma.visitorBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorBlockUpdateManyArgs>(args: SelectSubset<T, VisitorBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorBlocks and returns the data updated in the database.
     * @param {VisitorBlockUpdateManyAndReturnArgs} args - Arguments to update many VisitorBlocks.
     * @example
     * // Update many VisitorBlocks
     * const visitorBlock = await prisma.visitorBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorBlocks and only return the `blockId`
     * const visitorBlockWithBlockIdOnly = await prisma.visitorBlock.updateManyAndReturn({
     *   select: { blockId: true },
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
    updateManyAndReturn<T extends VisitorBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorBlock.
     * @param {VisitorBlockUpsertArgs} args - Arguments to update or create a VisitorBlock.
     * @example
     * // Update or create a VisitorBlock
     * const visitorBlock = await prisma.visitorBlock.upsert({
     *   create: {
     *     // ... data to create a VisitorBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorBlock we want to update
     *   }
     * })
     */
    upsert<T extends VisitorBlockUpsertArgs>(args: SelectSubset<T, VisitorBlockUpsertArgs<ExtArgs>>): Prisma__VisitorBlockClient<$Result.GetResult<Prisma.$VisitorBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockCountArgs} args - Arguments to filter VisitorBlocks to count.
     * @example
     * // Count the number of VisitorBlocks
     * const count = await prisma.visitorBlock.count({
     *   where: {
     *     // ... the filter for the VisitorBlocks we want to count
     *   }
     * })
    **/
    count<T extends VisitorBlockCountArgs>(
      args?: Subset<T, VisitorBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorBlockAggregateArgs>(args: Subset<T, VisitorBlockAggregateArgs>): Prisma.PrismaPromise<GetVisitorBlockAggregateType<T>>

    /**
     * Group by VisitorBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorBlockGroupByArgs} args - Group by arguments.
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
      T extends VisitorBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorBlockGroupByArgs['orderBy'] }
        : { orderBy?: VisitorBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorBlock model
   */
  readonly fields: VisitorBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VisitorBlock model
   */
  interface VisitorBlockFieldRefs {
    readonly blockId: FieldRef<"VisitorBlock", 'String'>
    readonly visitorId: FieldRef<"VisitorBlock", 'String'>
    readonly blockedAt: FieldRef<"VisitorBlock", 'DateTime'>
    readonly unblockAt: FieldRef<"VisitorBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitorBlock findUnique
   */
  export type VisitorBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter, which VisitorBlock to fetch.
     */
    where: VisitorBlockWhereUniqueInput
  }

  /**
   * VisitorBlock findUniqueOrThrow
   */
  export type VisitorBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter, which VisitorBlock to fetch.
     */
    where: VisitorBlockWhereUniqueInput
  }

  /**
   * VisitorBlock findFirst
   */
  export type VisitorBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter, which VisitorBlock to fetch.
     */
    where?: VisitorBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBlocks to fetch.
     */
    orderBy?: VisitorBlockOrderByWithRelationInput | VisitorBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorBlocks.
     */
    cursor?: VisitorBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorBlocks.
     */
    distinct?: VisitorBlockScalarFieldEnum | VisitorBlockScalarFieldEnum[]
  }

  /**
   * VisitorBlock findFirstOrThrow
   */
  export type VisitorBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter, which VisitorBlock to fetch.
     */
    where?: VisitorBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBlocks to fetch.
     */
    orderBy?: VisitorBlockOrderByWithRelationInput | VisitorBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorBlocks.
     */
    cursor?: VisitorBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorBlocks.
     */
    distinct?: VisitorBlockScalarFieldEnum | VisitorBlockScalarFieldEnum[]
  }

  /**
   * VisitorBlock findMany
   */
  export type VisitorBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter, which VisitorBlocks to fetch.
     */
    where?: VisitorBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorBlocks to fetch.
     */
    orderBy?: VisitorBlockOrderByWithRelationInput | VisitorBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorBlocks.
     */
    cursor?: VisitorBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorBlocks.
     */
    skip?: number
    distinct?: VisitorBlockScalarFieldEnum | VisitorBlockScalarFieldEnum[]
  }

  /**
   * VisitorBlock create
   */
  export type VisitorBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a VisitorBlock.
     */
    data: XOR<VisitorBlockCreateInput, VisitorBlockUncheckedCreateInput>
  }

  /**
   * VisitorBlock createMany
   */
  export type VisitorBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorBlocks.
     */
    data: VisitorBlockCreateManyInput | VisitorBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorBlock createManyAndReturn
   */
  export type VisitorBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorBlocks.
     */
    data: VisitorBlockCreateManyInput | VisitorBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorBlock update
   */
  export type VisitorBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a VisitorBlock.
     */
    data: XOR<VisitorBlockUpdateInput, VisitorBlockUncheckedUpdateInput>
    /**
     * Choose, which VisitorBlock to update.
     */
    where: VisitorBlockWhereUniqueInput
  }

  /**
   * VisitorBlock updateMany
   */
  export type VisitorBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorBlocks.
     */
    data: XOR<VisitorBlockUpdateManyMutationInput, VisitorBlockUncheckedUpdateManyInput>
    /**
     * Filter which VisitorBlocks to update
     */
    where?: VisitorBlockWhereInput
    /**
     * Limit how many VisitorBlocks to update.
     */
    limit?: number
  }

  /**
   * VisitorBlock updateManyAndReturn
   */
  export type VisitorBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * The data used to update VisitorBlocks.
     */
    data: XOR<VisitorBlockUpdateManyMutationInput, VisitorBlockUncheckedUpdateManyInput>
    /**
     * Filter which VisitorBlocks to update
     */
    where?: VisitorBlockWhereInput
    /**
     * Limit how many VisitorBlocks to update.
     */
    limit?: number
  }

  /**
   * VisitorBlock upsert
   */
  export type VisitorBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the VisitorBlock to update in case it exists.
     */
    where: VisitorBlockWhereUniqueInput
    /**
     * In case the VisitorBlock found by the `where` argument doesn't exist, create a new VisitorBlock with this data.
     */
    create: XOR<VisitorBlockCreateInput, VisitorBlockUncheckedCreateInput>
    /**
     * In case the VisitorBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorBlockUpdateInput, VisitorBlockUncheckedUpdateInput>
  }

  /**
   * VisitorBlock delete
   */
  export type VisitorBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
    /**
     * Filter which VisitorBlock to delete.
     */
    where: VisitorBlockWhereUniqueInput
  }

  /**
   * VisitorBlock deleteMany
   */
  export type VisitorBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorBlocks to delete
     */
    where?: VisitorBlockWhereInput
    /**
     * Limit how many VisitorBlocks to delete.
     */
    limit?: number
  }

  /**
   * VisitorBlock without action
   */
  export type VisitorBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorBlock
     */
    select?: VisitorBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorBlock
     */
    omit?: VisitorBlockOmit<ExtArgs> | null
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
    userId: 'userId',
    cmuitaccount: 'cmuitaccount',
    cmuitaccount_name: 'cmuitaccount_name',
    firstname_EN: 'firstname_EN',
    firstname_TH: 'firstname_TH',
    itaccounttype_EN: 'itaccounttype_EN',
    itaccounttype_TH: 'itaccounttype_TH',
    itaccounttype_id: 'itaccounttype_id',
    lastname_EN: 'lastname_EN',
    lastname_TH: 'lastname_TH',
    organization_code: 'organization_code',
    organization_name_EN: 'organization_name_EN',
    organization_name_TH: 'organization_name_TH',
    organization_vet: 'organization_vet',
    organization_vet_id: 'organization_vet_id',
    prename_EN: 'prename_EN',
    prename_TH: 'prename_TH',
    prename_id: 'prename_id',
    student_id: 'student_id',
    status_user: 'status_user',
    image: 'image',
    jobpositionId: 'jobpositionId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobPositionScalarFieldEnum: {
    jobpositionId: 'jobpositionId',
    name: 'name',
    passposition: 'passposition',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type JobPositionScalarFieldEnum = (typeof JobPositionScalarFieldEnum)[keyof typeof JobPositionScalarFieldEnum]


  export const MainDepartmentScalarFieldEnum: {
    mainDepartmentId: 'mainDepartmentId',
    name_EN: 'name_EN',
    name_TH: 'name_TH',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MainDepartmentScalarFieldEnum = (typeof MainDepartmentScalarFieldEnum)[keyof typeof MainDepartmentScalarFieldEnum]


  export const SubDepartmentScalarFieldEnum: {
    subDepartmentId: 'subDepartmentId',
    name_EN: 'name_EN',
    name_TH: 'name_TH',
    mainDepartmentId: 'mainDepartmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubDepartmentScalarFieldEnum = (typeof SubDepartmentScalarFieldEnum)[keyof typeof SubDepartmentScalarFieldEnum]


  export const DepartmentMembershipScalarFieldEnum: {
    departmentMembershipId: 'departmentMembershipId',
    userId: 'userId',
    subDepartmentId: 'subDepartmentId',
    assignedAt: 'assignedAt'
  };

  export type DepartmentMembershipScalarFieldEnum = (typeof DepartmentMembershipScalarFieldEnum)[keyof typeof DepartmentMembershipScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    database: 'database',
    part: 'part',
    position: 'position',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    menuId: 'menuId',
    name: 'name',
    icon: 'icon',
    part: 'part',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const SubMenuScalarFieldEnum: {
    submenuId: 'submenuId',
    name: 'name',
    icon: 'icon',
    part: 'part',
    position: 'position',
    menuId: 'menuId',
    isProjectBased: 'isProjectBased',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubMenuScalarFieldEnum = (typeof SubMenuScalarFieldEnum)[keyof typeof SubMenuScalarFieldEnum]


  export const UserPermissionScalarFieldEnum: {
    userPermissionId: 'userPermissionId',
    userId: 'userId',
    submenuId: 'submenuId',
    projectId: 'projectId',
    view: 'view',
    create: 'create',
    edit: 'edit',
    delete: 'delete',
    accessScope: 'accessScope',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPermissionScalarFieldEnum = (typeof UserPermissionScalarFieldEnum)[keyof typeof UserPermissionScalarFieldEnum]


  export const UserSuperAdminScalarFieldEnum: {
    userSuperAdminId: 'userSuperAdminId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSuperAdminScalarFieldEnum = (typeof UserSuperAdminScalarFieldEnum)[keyof typeof UserSuperAdminScalarFieldEnum]


  export const PermissionDepartmentScalarFieldEnum: {
    permissionDepartmentId: 'permissionDepartmentId',
    userPermissionId: 'userPermissionId',
    subDepartmentId: 'subDepartmentId'
  };

  export type PermissionDepartmentScalarFieldEnum = (typeof PermissionDepartmentScalarFieldEnum)[keyof typeof PermissionDepartmentScalarFieldEnum]


  export const ScbPaymentsScalarFieldEnum: {
    scbId: 'scbId',
    accountId: 'accountId',
    reverseFlag: 'reverseFlag',
    payeeProxyId: 'payeeProxyId',
    payeeProxyType: 'payeeProxyType',
    payeeAccountNumber: 'payeeAccountNumber',
    payerAccountNumber: 'payerAccountNumber',
    payerName: 'payerName',
    sendingBankCode: 'sendingBankCode',
    receivingBankCode: 'receivingBankCode',
    amount: 'amount',
    transactionId: 'transactionId',
    transactionDateandTime: 'transactionDateandTime',
    billPaymentRef1: 'billPaymentRef1',
    billPaymentRef2: 'billPaymentRef2',
    billPaymentRef3: 'billPaymentRef3',
    currencyCode: 'currencyCode',
    channelCode: 'channelCode',
    transactionType: 'transactionType',
    partnerTransactionId: 'partnerTransactionId',
    createdAt: 'createdAt'
  };

  export type ScbPaymentsScalarFieldEnum = (typeof ScbPaymentsScalarFieldEnum)[keyof typeof ScbPaymentsScalarFieldEnum]


  export const ScbSlipVerificationScalarFieldEnum: {
    scbVerificationId: 'scbVerificationId',
    scbId: 'scbId',
    transTime: 'transTime',
    transRef: 'transRef',
    displayName: 'displayName',
    bankType: 'bankType',
    bankName: 'bankName',
    transDate: 'transDate',
    createdAt: 'createdAt'
  };

  export type ScbSlipVerificationScalarFieldEnum = (typeof ScbSlipVerificationScalarFieldEnum)[keyof typeof ScbSlipVerificationScalarFieldEnum]


  export const ScbVoidScalarFieldEnum: {
    scbVoidId: 'scbVoidId',
    scbId: 'scbId',
    responseStatus: 'responseStatus',
    responseCode: 'responseCode',
    responseCodeDescription: 'responseCodeDescription',
    extStatusDesc: 'extStatusDesc',
    createdAt: 'createdAt'
  };

  export type ScbVoidScalarFieldEnum = (typeof ScbVoidScalarFieldEnum)[keyof typeof ScbVoidScalarFieldEnum]


  export const VisitorBlockScalarFieldEnum: {
    blockId: 'blockId',
    visitorId: 'visitorId',
    blockedAt: 'blockedAt',
    unblockAt: 'unblockAt'
  };

  export type VisitorBlockScalarFieldEnum = (typeof VisitorBlockScalarFieldEnum)[keyof typeof VisitorBlockScalarFieldEnum]


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
   * Reference to a field of type 'AccessScope'
   */
  export type EnumAccessScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessScope'>
    


  /**
   * Reference to a field of type 'AccessScope[]'
   */
  export type ListEnumAccessScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessScope[]'>
    


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
    userId?: UuidFilter<"User"> | string
    cmuitaccount?: StringFilter<"User"> | string
    cmuitaccount_name?: StringFilter<"User"> | string
    firstname_EN?: StringFilter<"User"> | string
    firstname_TH?: StringFilter<"User"> | string
    itaccounttype_EN?: StringFilter<"User"> | string
    itaccounttype_TH?: StringFilter<"User"> | string
    itaccounttype_id?: StringFilter<"User"> | string
    lastname_EN?: StringFilter<"User"> | string
    lastname_TH?: StringFilter<"User"> | string
    organization_code?: StringFilter<"User"> | string
    organization_name_EN?: StringFilter<"User"> | string
    organization_name_TH?: StringFilter<"User"> | string
    organization_vet?: StringNullableFilter<"User"> | string | null
    organization_vet_id?: StringNullableFilter<"User"> | string | null
    prename_EN?: StringFilter<"User"> | string
    prename_TH?: StringFilter<"User"> | string
    prename_id?: StringFilter<"User"> | string
    student_id?: StringNullableFilter<"User"> | string | null
    status_user?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    jobpositionId?: UuidNullableFilter<"User"> | string | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    jobposition?: XOR<JobPositionNullableScalarRelationFilter, JobPositionWhereInput> | null
    DepartmentMembership?: DepartmentMembershipListRelationFilter
    UserPermission?: UserPermissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    cmuitaccount?: SortOrder
    cmuitaccount_name?: SortOrder
    firstname_EN?: SortOrder
    firstname_TH?: SortOrder
    itaccounttype_EN?: SortOrder
    itaccounttype_TH?: SortOrder
    itaccounttype_id?: SortOrder
    lastname_EN?: SortOrder
    lastname_TH?: SortOrder
    organization_code?: SortOrder
    organization_name_EN?: SortOrder
    organization_name_TH?: SortOrder
    organization_vet?: SortOrderInput | SortOrder
    organization_vet_id?: SortOrderInput | SortOrder
    prename_EN?: SortOrder
    prename_TH?: SortOrder
    prename_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    status_user?: SortOrder
    image?: SortOrderInput | SortOrder
    jobpositionId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    jobposition?: JobPositionOrderByWithRelationInput
    DepartmentMembership?: DepartmentMembershipOrderByRelationAggregateInput
    UserPermission?: UserPermissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    cmuitaccount?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    cmuitaccount_name?: StringFilter<"User"> | string
    firstname_EN?: StringFilter<"User"> | string
    firstname_TH?: StringFilter<"User"> | string
    itaccounttype_EN?: StringFilter<"User"> | string
    itaccounttype_TH?: StringFilter<"User"> | string
    itaccounttype_id?: StringFilter<"User"> | string
    lastname_EN?: StringFilter<"User"> | string
    lastname_TH?: StringFilter<"User"> | string
    organization_code?: StringFilter<"User"> | string
    organization_name_EN?: StringFilter<"User"> | string
    organization_name_TH?: StringFilter<"User"> | string
    organization_vet?: StringNullableFilter<"User"> | string | null
    organization_vet_id?: StringNullableFilter<"User"> | string | null
    prename_EN?: StringFilter<"User"> | string
    prename_TH?: StringFilter<"User"> | string
    prename_id?: StringFilter<"User"> | string
    student_id?: StringNullableFilter<"User"> | string | null
    status_user?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    jobpositionId?: UuidNullableFilter<"User"> | string | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    jobposition?: XOR<JobPositionNullableScalarRelationFilter, JobPositionWhereInput> | null
    DepartmentMembership?: DepartmentMembershipListRelationFilter
    UserPermission?: UserPermissionListRelationFilter
  }, "userId" | "cmuitaccount">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    cmuitaccount?: SortOrder
    cmuitaccount_name?: SortOrder
    firstname_EN?: SortOrder
    firstname_TH?: SortOrder
    itaccounttype_EN?: SortOrder
    itaccounttype_TH?: SortOrder
    itaccounttype_id?: SortOrder
    lastname_EN?: SortOrder
    lastname_TH?: SortOrder
    organization_code?: SortOrder
    organization_name_EN?: SortOrder
    organization_name_TH?: SortOrder
    organization_vet?: SortOrderInput | SortOrder
    organization_vet_id?: SortOrderInput | SortOrder
    prename_EN?: SortOrder
    prename_TH?: SortOrder
    prename_id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    status_user?: SortOrder
    image?: SortOrderInput | SortOrder
    jobpositionId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"User"> | string
    cmuitaccount?: StringWithAggregatesFilter<"User"> | string
    cmuitaccount_name?: StringWithAggregatesFilter<"User"> | string
    firstname_EN?: StringWithAggregatesFilter<"User"> | string
    firstname_TH?: StringWithAggregatesFilter<"User"> | string
    itaccounttype_EN?: StringWithAggregatesFilter<"User"> | string
    itaccounttype_TH?: StringWithAggregatesFilter<"User"> | string
    itaccounttype_id?: StringWithAggregatesFilter<"User"> | string
    lastname_EN?: StringWithAggregatesFilter<"User"> | string
    lastname_TH?: StringWithAggregatesFilter<"User"> | string
    organization_code?: StringWithAggregatesFilter<"User"> | string
    organization_name_EN?: StringWithAggregatesFilter<"User"> | string
    organization_name_TH?: StringWithAggregatesFilter<"User"> | string
    organization_vet?: StringNullableWithAggregatesFilter<"User"> | string | null
    organization_vet_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    prename_EN?: StringWithAggregatesFilter<"User"> | string
    prename_TH?: StringWithAggregatesFilter<"User"> | string
    prename_id?: StringWithAggregatesFilter<"User"> | string
    student_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    status_user?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    jobpositionId?: UuidNullableWithAggregatesFilter<"User"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobPositionWhereInput = {
    AND?: JobPositionWhereInput | JobPositionWhereInput[]
    OR?: JobPositionWhereInput[]
    NOT?: JobPositionWhereInput | JobPositionWhereInput[]
    jobpositionId?: UuidFilter<"JobPosition"> | string
    name?: StringFilter<"JobPosition"> | string
    passposition?: StringFilter<"JobPosition"> | string
    createAt?: DateTimeFilter<"JobPosition"> | Date | string
    updateAt?: DateTimeFilter<"JobPosition"> | Date | string
    User?: UserListRelationFilter
  }

  export type JobPositionOrderByWithRelationInput = {
    jobpositionId?: SortOrder
    name?: SortOrder
    passposition?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type JobPositionWhereUniqueInput = Prisma.AtLeast<{
    jobpositionId?: string
    AND?: JobPositionWhereInput | JobPositionWhereInput[]
    OR?: JobPositionWhereInput[]
    NOT?: JobPositionWhereInput | JobPositionWhereInput[]
    name?: StringFilter<"JobPosition"> | string
    passposition?: StringFilter<"JobPosition"> | string
    createAt?: DateTimeFilter<"JobPosition"> | Date | string
    updateAt?: DateTimeFilter<"JobPosition"> | Date | string
    User?: UserListRelationFilter
  }, "jobpositionId">

  export type JobPositionOrderByWithAggregationInput = {
    jobpositionId?: SortOrder
    name?: SortOrder
    passposition?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: JobPositionCountOrderByAggregateInput
    _max?: JobPositionMaxOrderByAggregateInput
    _min?: JobPositionMinOrderByAggregateInput
  }

  export type JobPositionScalarWhereWithAggregatesInput = {
    AND?: JobPositionScalarWhereWithAggregatesInput | JobPositionScalarWhereWithAggregatesInput[]
    OR?: JobPositionScalarWhereWithAggregatesInput[]
    NOT?: JobPositionScalarWhereWithAggregatesInput | JobPositionScalarWhereWithAggregatesInput[]
    jobpositionId?: UuidWithAggregatesFilter<"JobPosition"> | string
    name?: StringWithAggregatesFilter<"JobPosition"> | string
    passposition?: StringWithAggregatesFilter<"JobPosition"> | string
    createAt?: DateTimeWithAggregatesFilter<"JobPosition"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"JobPosition"> | Date | string
  }

  export type MainDepartmentWhereInput = {
    AND?: MainDepartmentWhereInput | MainDepartmentWhereInput[]
    OR?: MainDepartmentWhereInput[]
    NOT?: MainDepartmentWhereInput | MainDepartmentWhereInput[]
    mainDepartmentId?: UuidFilter<"MainDepartment"> | string
    name_EN?: StringNullableFilter<"MainDepartment"> | string | null
    name_TH?: StringFilter<"MainDepartment"> | string
    createdAt?: DateTimeFilter<"MainDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"MainDepartment"> | Date | string
    subDepartments?: SubDepartmentListRelationFilter
  }

  export type MainDepartmentOrderByWithRelationInput = {
    mainDepartmentId?: SortOrder
    name_EN?: SortOrderInput | SortOrder
    name_TH?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subDepartments?: SubDepartmentOrderByRelationAggregateInput
  }

  export type MainDepartmentWhereUniqueInput = Prisma.AtLeast<{
    mainDepartmentId?: string
    name_TH?: string
    AND?: MainDepartmentWhereInput | MainDepartmentWhereInput[]
    OR?: MainDepartmentWhereInput[]
    NOT?: MainDepartmentWhereInput | MainDepartmentWhereInput[]
    name_EN?: StringNullableFilter<"MainDepartment"> | string | null
    createdAt?: DateTimeFilter<"MainDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"MainDepartment"> | Date | string
    subDepartments?: SubDepartmentListRelationFilter
  }, "mainDepartmentId" | "name_TH">

  export type MainDepartmentOrderByWithAggregationInput = {
    mainDepartmentId?: SortOrder
    name_EN?: SortOrderInput | SortOrder
    name_TH?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MainDepartmentCountOrderByAggregateInput
    _max?: MainDepartmentMaxOrderByAggregateInput
    _min?: MainDepartmentMinOrderByAggregateInput
  }

  export type MainDepartmentScalarWhereWithAggregatesInput = {
    AND?: MainDepartmentScalarWhereWithAggregatesInput | MainDepartmentScalarWhereWithAggregatesInput[]
    OR?: MainDepartmentScalarWhereWithAggregatesInput[]
    NOT?: MainDepartmentScalarWhereWithAggregatesInput | MainDepartmentScalarWhereWithAggregatesInput[]
    mainDepartmentId?: UuidWithAggregatesFilter<"MainDepartment"> | string
    name_EN?: StringNullableWithAggregatesFilter<"MainDepartment"> | string | null
    name_TH?: StringWithAggregatesFilter<"MainDepartment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MainDepartment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MainDepartment"> | Date | string
  }

  export type SubDepartmentWhereInput = {
    AND?: SubDepartmentWhereInput | SubDepartmentWhereInput[]
    OR?: SubDepartmentWhereInput[]
    NOT?: SubDepartmentWhereInput | SubDepartmentWhereInput[]
    subDepartmentId?: UuidFilter<"SubDepartment"> | string
    name_EN?: StringNullableFilter<"SubDepartment"> | string | null
    name_TH?: StringFilter<"SubDepartment"> | string
    mainDepartmentId?: UuidFilter<"SubDepartment"> | string
    createdAt?: DateTimeFilter<"SubDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"SubDepartment"> | Date | string
    mainDepartment?: XOR<MainDepartmentScalarRelationFilter, MainDepartmentWhereInput>
    members?: DepartmentMembershipListRelationFilter
    PermissionDepartment?: PermissionDepartmentListRelationFilter
  }

  export type SubDepartmentOrderByWithRelationInput = {
    subDepartmentId?: SortOrder
    name_EN?: SortOrderInput | SortOrder
    name_TH?: SortOrder
    mainDepartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainDepartment?: MainDepartmentOrderByWithRelationInput
    members?: DepartmentMembershipOrderByRelationAggregateInput
    PermissionDepartment?: PermissionDepartmentOrderByRelationAggregateInput
  }

  export type SubDepartmentWhereUniqueInput = Prisma.AtLeast<{
    subDepartmentId?: string
    name_TH?: string
    AND?: SubDepartmentWhereInput | SubDepartmentWhereInput[]
    OR?: SubDepartmentWhereInput[]
    NOT?: SubDepartmentWhereInput | SubDepartmentWhereInput[]
    name_EN?: StringNullableFilter<"SubDepartment"> | string | null
    mainDepartmentId?: UuidFilter<"SubDepartment"> | string
    createdAt?: DateTimeFilter<"SubDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"SubDepartment"> | Date | string
    mainDepartment?: XOR<MainDepartmentScalarRelationFilter, MainDepartmentWhereInput>
    members?: DepartmentMembershipListRelationFilter
    PermissionDepartment?: PermissionDepartmentListRelationFilter
  }, "subDepartmentId" | "name_TH">

  export type SubDepartmentOrderByWithAggregationInput = {
    subDepartmentId?: SortOrder
    name_EN?: SortOrderInput | SortOrder
    name_TH?: SortOrder
    mainDepartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubDepartmentCountOrderByAggregateInput
    _max?: SubDepartmentMaxOrderByAggregateInput
    _min?: SubDepartmentMinOrderByAggregateInput
  }

  export type SubDepartmentScalarWhereWithAggregatesInput = {
    AND?: SubDepartmentScalarWhereWithAggregatesInput | SubDepartmentScalarWhereWithAggregatesInput[]
    OR?: SubDepartmentScalarWhereWithAggregatesInput[]
    NOT?: SubDepartmentScalarWhereWithAggregatesInput | SubDepartmentScalarWhereWithAggregatesInput[]
    subDepartmentId?: UuidWithAggregatesFilter<"SubDepartment"> | string
    name_EN?: StringNullableWithAggregatesFilter<"SubDepartment"> | string | null
    name_TH?: StringWithAggregatesFilter<"SubDepartment"> | string
    mainDepartmentId?: UuidWithAggregatesFilter<"SubDepartment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubDepartment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubDepartment"> | Date | string
  }

  export type DepartmentMembershipWhereInput = {
    AND?: DepartmentMembershipWhereInput | DepartmentMembershipWhereInput[]
    OR?: DepartmentMembershipWhereInput[]
    NOT?: DepartmentMembershipWhereInput | DepartmentMembershipWhereInput[]
    departmentMembershipId?: UuidFilter<"DepartmentMembership"> | string
    userId?: UuidFilter<"DepartmentMembership"> | string
    subDepartmentId?: UuidFilter<"DepartmentMembership"> | string
    assignedAt?: DateTimeFilter<"DepartmentMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subDepartment?: XOR<SubDepartmentScalarRelationFilter, SubDepartmentWhereInput>
  }

  export type DepartmentMembershipOrderByWithRelationInput = {
    departmentMembershipId?: SortOrder
    userId?: SortOrder
    subDepartmentId?: SortOrder
    assignedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subDepartment?: SubDepartmentOrderByWithRelationInput
  }

  export type DepartmentMembershipWhereUniqueInput = Prisma.AtLeast<{
    departmentMembershipId?: string
    userId_subDepartmentId?: DepartmentMembershipUserIdSubDepartmentIdCompoundUniqueInput
    AND?: DepartmentMembershipWhereInput | DepartmentMembershipWhereInput[]
    OR?: DepartmentMembershipWhereInput[]
    NOT?: DepartmentMembershipWhereInput | DepartmentMembershipWhereInput[]
    userId?: UuidFilter<"DepartmentMembership"> | string
    subDepartmentId?: UuidFilter<"DepartmentMembership"> | string
    assignedAt?: DateTimeFilter<"DepartmentMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subDepartment?: XOR<SubDepartmentScalarRelationFilter, SubDepartmentWhereInput>
  }, "departmentMembershipId" | "userId_subDepartmentId">

  export type DepartmentMembershipOrderByWithAggregationInput = {
    departmentMembershipId?: SortOrder
    userId?: SortOrder
    subDepartmentId?: SortOrder
    assignedAt?: SortOrder
    _count?: DepartmentMembershipCountOrderByAggregateInput
    _max?: DepartmentMembershipMaxOrderByAggregateInput
    _min?: DepartmentMembershipMinOrderByAggregateInput
  }

  export type DepartmentMembershipScalarWhereWithAggregatesInput = {
    AND?: DepartmentMembershipScalarWhereWithAggregatesInput | DepartmentMembershipScalarWhereWithAggregatesInput[]
    OR?: DepartmentMembershipScalarWhereWithAggregatesInput[]
    NOT?: DepartmentMembershipScalarWhereWithAggregatesInput | DepartmentMembershipScalarWhereWithAggregatesInput[]
    departmentMembershipId?: UuidWithAggregatesFilter<"DepartmentMembership"> | string
    userId?: UuidWithAggregatesFilter<"DepartmentMembership"> | string
    subDepartmentId?: UuidWithAggregatesFilter<"DepartmentMembership"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"DepartmentMembership"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectId?: UuidFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    database?: StringFilter<"Project"> | string
    part?: StringNullableFilter<"Project"> | string | null
    position?: IntNullableFilter<"Project"> | number | null
    status?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    UserPermission?: UserPermissionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    database?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserPermission?: UserPermissionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    projectId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    database?: StringFilter<"Project"> | string
    part?: StringNullableFilter<"Project"> | string | null
    position?: IntNullableFilter<"Project"> | number | null
    status?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    UserPermission?: UserPermissionListRelationFilter
  }, "projectId">

  export type ProjectOrderByWithAggregationInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    database?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    projectId?: UuidWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    database?: StringWithAggregatesFilter<"Project"> | string
    part?: StringNullableWithAggregatesFilter<"Project"> | string | null
    position?: IntNullableWithAggregatesFilter<"Project"> | number | null
    status?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    menuId?: UuidFilter<"Menu"> | string
    name?: StringFilter<"Menu"> | string
    icon?: StringFilter<"Menu"> | string
    part?: StringNullableFilter<"Menu"> | string | null
    position?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    subMenus?: SubMenuListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    menuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subMenus?: SubMenuOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    menuId?: string
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    name?: StringFilter<"Menu"> | string
    icon?: StringFilter<"Menu"> | string
    part?: StringNullableFilter<"Menu"> | string | null
    position?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    subMenus?: SubMenuListRelationFilter
  }, "menuId">

  export type MenuOrderByWithAggregationInput = {
    menuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    menuId?: UuidWithAggregatesFilter<"Menu"> | string
    name?: StringWithAggregatesFilter<"Menu"> | string
    icon?: StringWithAggregatesFilter<"Menu"> | string
    part?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    position?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type SubMenuWhereInput = {
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    submenuId?: UuidFilter<"SubMenu"> | string
    name?: StringFilter<"SubMenu"> | string
    icon?: StringFilter<"SubMenu"> | string
    part?: StringNullableFilter<"SubMenu"> | string | null
    position?: IntNullableFilter<"SubMenu"> | number | null
    menuId?: UuidFilter<"SubMenu"> | string
    isProjectBased?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    permissions?: UserPermissionListRelationFilter
  }

  export type SubMenuOrderByWithRelationInput = {
    submenuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    menuId?: SortOrder
    isProjectBased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menu?: MenuOrderByWithRelationInput
    permissions?: UserPermissionOrderByRelationAggregateInput
  }

  export type SubMenuWhereUniqueInput = Prisma.AtLeast<{
    submenuId?: string
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    name?: StringFilter<"SubMenu"> | string
    icon?: StringFilter<"SubMenu"> | string
    part?: StringNullableFilter<"SubMenu"> | string | null
    position?: IntNullableFilter<"SubMenu"> | number | null
    menuId?: UuidFilter<"SubMenu"> | string
    isProjectBased?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    permissions?: UserPermissionListRelationFilter
  }, "submenuId">

  export type SubMenuOrderByWithAggregationInput = {
    submenuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    menuId?: SortOrder
    isProjectBased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubMenuCountOrderByAggregateInput
    _avg?: SubMenuAvgOrderByAggregateInput
    _max?: SubMenuMaxOrderByAggregateInput
    _min?: SubMenuMinOrderByAggregateInput
    _sum?: SubMenuSumOrderByAggregateInput
  }

  export type SubMenuScalarWhereWithAggregatesInput = {
    AND?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    OR?: SubMenuScalarWhereWithAggregatesInput[]
    NOT?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    submenuId?: UuidWithAggregatesFilter<"SubMenu"> | string
    name?: StringWithAggregatesFilter<"SubMenu"> | string
    icon?: StringWithAggregatesFilter<"SubMenu"> | string
    part?: StringNullableWithAggregatesFilter<"SubMenu"> | string | null
    position?: IntNullableWithAggregatesFilter<"SubMenu"> | number | null
    menuId?: UuidWithAggregatesFilter<"SubMenu"> | string
    isProjectBased?: BoolWithAggregatesFilter<"SubMenu"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubMenu"> | Date | string
  }

  export type UserPermissionWhereInput = {
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    userPermissionId?: UuidFilter<"UserPermission"> | string
    userId?: UuidFilter<"UserPermission"> | string
    submenuId?: UuidFilter<"UserPermission"> | string
    projectId?: UuidNullableFilter<"UserPermission"> | string | null
    view?: BoolFilter<"UserPermission"> | boolean
    create?: BoolFilter<"UserPermission"> | boolean
    edit?: BoolFilter<"UserPermission"> | boolean
    delete?: BoolFilter<"UserPermission"> | boolean
    accessScope?: EnumAccessScopeFilter<"UserPermission"> | $Enums.AccessScope
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submenu?: XOR<SubMenuScalarRelationFilter, SubMenuWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    departments?: PermissionDepartmentListRelationFilter
  }

  export type UserPermissionOrderByWithRelationInput = {
    userPermissionId?: SortOrder
    userId?: SortOrder
    submenuId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    view?: SortOrder
    create?: SortOrder
    edit?: SortOrder
    delete?: SortOrder
    accessScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submenu?: SubMenuOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    departments?: PermissionDepartmentOrderByRelationAggregateInput
  }

  export type UserPermissionWhereUniqueInput = Prisma.AtLeast<{
    userPermissionId?: string
    userId_submenuId_projectId?: UserPermissionUserIdSubmenuIdProjectIdCompoundUniqueInput
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    userId?: UuidFilter<"UserPermission"> | string
    submenuId?: UuidFilter<"UserPermission"> | string
    projectId?: UuidNullableFilter<"UserPermission"> | string | null
    view?: BoolFilter<"UserPermission"> | boolean
    create?: BoolFilter<"UserPermission"> | boolean
    edit?: BoolFilter<"UserPermission"> | boolean
    delete?: BoolFilter<"UserPermission"> | boolean
    accessScope?: EnumAccessScopeFilter<"UserPermission"> | $Enums.AccessScope
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submenu?: XOR<SubMenuScalarRelationFilter, SubMenuWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    departments?: PermissionDepartmentListRelationFilter
  }, "userPermissionId" | "userId_submenuId_projectId">

  export type UserPermissionOrderByWithAggregationInput = {
    userPermissionId?: SortOrder
    userId?: SortOrder
    submenuId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    view?: SortOrder
    create?: SortOrder
    edit?: SortOrder
    delete?: SortOrder
    accessScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPermissionCountOrderByAggregateInput
    _max?: UserPermissionMaxOrderByAggregateInput
    _min?: UserPermissionMinOrderByAggregateInput
  }

  export type UserPermissionScalarWhereWithAggregatesInput = {
    AND?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    OR?: UserPermissionScalarWhereWithAggregatesInput[]
    NOT?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    userPermissionId?: UuidWithAggregatesFilter<"UserPermission"> | string
    userId?: UuidWithAggregatesFilter<"UserPermission"> | string
    submenuId?: UuidWithAggregatesFilter<"UserPermission"> | string
    projectId?: UuidNullableWithAggregatesFilter<"UserPermission"> | string | null
    view?: BoolWithAggregatesFilter<"UserPermission"> | boolean
    create?: BoolWithAggregatesFilter<"UserPermission"> | boolean
    edit?: BoolWithAggregatesFilter<"UserPermission"> | boolean
    delete?: BoolWithAggregatesFilter<"UserPermission"> | boolean
    accessScope?: EnumAccessScopeWithAggregatesFilter<"UserPermission"> | $Enums.AccessScope
    createdAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
  }

  export type UserSuperAdminWhereInput = {
    AND?: UserSuperAdminWhereInput | UserSuperAdminWhereInput[]
    OR?: UserSuperAdminWhereInput[]
    NOT?: UserSuperAdminWhereInput | UserSuperAdminWhereInput[]
    userSuperAdminId?: UuidFilter<"UserSuperAdmin"> | string
    userId?: UuidFilter<"UserSuperAdmin"> | string
    createdAt?: DateTimeFilter<"UserSuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"UserSuperAdmin"> | Date | string
  }

  export type UserSuperAdminOrderByWithRelationInput = {
    userSuperAdminId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSuperAdminWhereUniqueInput = Prisma.AtLeast<{
    userSuperAdminId?: string
    userId?: string
    AND?: UserSuperAdminWhereInput | UserSuperAdminWhereInput[]
    OR?: UserSuperAdminWhereInput[]
    NOT?: UserSuperAdminWhereInput | UserSuperAdminWhereInput[]
    createdAt?: DateTimeFilter<"UserSuperAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"UserSuperAdmin"> | Date | string
  }, "userSuperAdminId" | "userId">

  export type UserSuperAdminOrderByWithAggregationInput = {
    userSuperAdminId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSuperAdminCountOrderByAggregateInput
    _max?: UserSuperAdminMaxOrderByAggregateInput
    _min?: UserSuperAdminMinOrderByAggregateInput
  }

  export type UserSuperAdminScalarWhereWithAggregatesInput = {
    AND?: UserSuperAdminScalarWhereWithAggregatesInput | UserSuperAdminScalarWhereWithAggregatesInput[]
    OR?: UserSuperAdminScalarWhereWithAggregatesInput[]
    NOT?: UserSuperAdminScalarWhereWithAggregatesInput | UserSuperAdminScalarWhereWithAggregatesInput[]
    userSuperAdminId?: UuidWithAggregatesFilter<"UserSuperAdmin"> | string
    userId?: UuidWithAggregatesFilter<"UserSuperAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSuperAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSuperAdmin"> | Date | string
  }

  export type PermissionDepartmentWhereInput = {
    AND?: PermissionDepartmentWhereInput | PermissionDepartmentWhereInput[]
    OR?: PermissionDepartmentWhereInput[]
    NOT?: PermissionDepartmentWhereInput | PermissionDepartmentWhereInput[]
    permissionDepartmentId?: UuidFilter<"PermissionDepartment"> | string
    userPermissionId?: UuidFilter<"PermissionDepartment"> | string
    subDepartmentId?: UuidFilter<"PermissionDepartment"> | string
    userPermission?: XOR<UserPermissionScalarRelationFilter, UserPermissionWhereInput>
    subDepartment?: XOR<SubDepartmentScalarRelationFilter, SubDepartmentWhereInput>
  }

  export type PermissionDepartmentOrderByWithRelationInput = {
    permissionDepartmentId?: SortOrder
    userPermissionId?: SortOrder
    subDepartmentId?: SortOrder
    userPermission?: UserPermissionOrderByWithRelationInput
    subDepartment?: SubDepartmentOrderByWithRelationInput
  }

  export type PermissionDepartmentWhereUniqueInput = Prisma.AtLeast<{
    permissionDepartmentId?: string
    userPermissionId_subDepartmentId?: PermissionDepartmentUserPermissionIdSubDepartmentIdCompoundUniqueInput
    AND?: PermissionDepartmentWhereInput | PermissionDepartmentWhereInput[]
    OR?: PermissionDepartmentWhereInput[]
    NOT?: PermissionDepartmentWhereInput | PermissionDepartmentWhereInput[]
    userPermissionId?: UuidFilter<"PermissionDepartment"> | string
    subDepartmentId?: UuidFilter<"PermissionDepartment"> | string
    userPermission?: XOR<UserPermissionScalarRelationFilter, UserPermissionWhereInput>
    subDepartment?: XOR<SubDepartmentScalarRelationFilter, SubDepartmentWhereInput>
  }, "permissionDepartmentId" | "userPermissionId_subDepartmentId">

  export type PermissionDepartmentOrderByWithAggregationInput = {
    permissionDepartmentId?: SortOrder
    userPermissionId?: SortOrder
    subDepartmentId?: SortOrder
    _count?: PermissionDepartmentCountOrderByAggregateInput
    _max?: PermissionDepartmentMaxOrderByAggregateInput
    _min?: PermissionDepartmentMinOrderByAggregateInput
  }

  export type PermissionDepartmentScalarWhereWithAggregatesInput = {
    AND?: PermissionDepartmentScalarWhereWithAggregatesInput | PermissionDepartmentScalarWhereWithAggregatesInput[]
    OR?: PermissionDepartmentScalarWhereWithAggregatesInput[]
    NOT?: PermissionDepartmentScalarWhereWithAggregatesInput | PermissionDepartmentScalarWhereWithAggregatesInput[]
    permissionDepartmentId?: UuidWithAggregatesFilter<"PermissionDepartment"> | string
    userPermissionId?: UuidWithAggregatesFilter<"PermissionDepartment"> | string
    subDepartmentId?: UuidWithAggregatesFilter<"PermissionDepartment"> | string
  }

  export type ScbPaymentsWhereInput = {
    AND?: ScbPaymentsWhereInput | ScbPaymentsWhereInput[]
    OR?: ScbPaymentsWhereInput[]
    NOT?: ScbPaymentsWhereInput | ScbPaymentsWhereInput[]
    scbId?: UuidFilter<"ScbPayments"> | string
    accountId?: StringNullableFilter<"ScbPayments"> | string | null
    reverseFlag?: StringNullableFilter<"ScbPayments"> | string | null
    payeeProxyId?: StringFilter<"ScbPayments"> | string
    payeeProxyType?: StringFilter<"ScbPayments"> | string
    payeeAccountNumber?: StringFilter<"ScbPayments"> | string
    payerAccountNumber?: StringFilter<"ScbPayments"> | string
    payerName?: StringFilter<"ScbPayments"> | string
    sendingBankCode?: StringFilter<"ScbPayments"> | string
    receivingBankCode?: StringFilter<"ScbPayments"> | string
    amount?: StringFilter<"ScbPayments"> | string
    transactionId?: StringFilter<"ScbPayments"> | string
    transactionDateandTime?: StringFilter<"ScbPayments"> | string
    billPaymentRef1?: StringFilter<"ScbPayments"> | string
    billPaymentRef2?: StringFilter<"ScbPayments"> | string
    billPaymentRef3?: StringNullableFilter<"ScbPayments"> | string | null
    currencyCode?: StringFilter<"ScbPayments"> | string
    channelCode?: StringNullableFilter<"ScbPayments"> | string | null
    transactionType?: StringFilter<"ScbPayments"> | string
    partnerTransactionId?: StringNullableFilter<"ScbPayments"> | string | null
    createdAt?: DateTimeFilter<"ScbPayments"> | Date | string
    ScbSlipVerification?: ScbSlipVerificationListRelationFilter
    ScbVoid?: ScbVoidListRelationFilter
  }

  export type ScbPaymentsOrderByWithRelationInput = {
    scbId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    reverseFlag?: SortOrderInput | SortOrder
    payeeProxyId?: SortOrder
    payeeProxyType?: SortOrder
    payeeAccountNumber?: SortOrder
    payerAccountNumber?: SortOrder
    payerName?: SortOrder
    sendingBankCode?: SortOrder
    receivingBankCode?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    transactionDateandTime?: SortOrder
    billPaymentRef1?: SortOrder
    billPaymentRef2?: SortOrder
    billPaymentRef3?: SortOrderInput | SortOrder
    currencyCode?: SortOrder
    channelCode?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    partnerTransactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ScbSlipVerification?: ScbSlipVerificationOrderByRelationAggregateInput
    ScbVoid?: ScbVoidOrderByRelationAggregateInput
  }

  export type ScbPaymentsWhereUniqueInput = Prisma.AtLeast<{
    scbId?: string
    transactionId?: string
    AND?: ScbPaymentsWhereInput | ScbPaymentsWhereInput[]
    OR?: ScbPaymentsWhereInput[]
    NOT?: ScbPaymentsWhereInput | ScbPaymentsWhereInput[]
    accountId?: StringNullableFilter<"ScbPayments"> | string | null
    reverseFlag?: StringNullableFilter<"ScbPayments"> | string | null
    payeeProxyId?: StringFilter<"ScbPayments"> | string
    payeeProxyType?: StringFilter<"ScbPayments"> | string
    payeeAccountNumber?: StringFilter<"ScbPayments"> | string
    payerAccountNumber?: StringFilter<"ScbPayments"> | string
    payerName?: StringFilter<"ScbPayments"> | string
    sendingBankCode?: StringFilter<"ScbPayments"> | string
    receivingBankCode?: StringFilter<"ScbPayments"> | string
    amount?: StringFilter<"ScbPayments"> | string
    transactionDateandTime?: StringFilter<"ScbPayments"> | string
    billPaymentRef1?: StringFilter<"ScbPayments"> | string
    billPaymentRef2?: StringFilter<"ScbPayments"> | string
    billPaymentRef3?: StringNullableFilter<"ScbPayments"> | string | null
    currencyCode?: StringFilter<"ScbPayments"> | string
    channelCode?: StringNullableFilter<"ScbPayments"> | string | null
    transactionType?: StringFilter<"ScbPayments"> | string
    partnerTransactionId?: StringNullableFilter<"ScbPayments"> | string | null
    createdAt?: DateTimeFilter<"ScbPayments"> | Date | string
    ScbSlipVerification?: ScbSlipVerificationListRelationFilter
    ScbVoid?: ScbVoidListRelationFilter
  }, "scbId" | "transactionId">

  export type ScbPaymentsOrderByWithAggregationInput = {
    scbId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    reverseFlag?: SortOrderInput | SortOrder
    payeeProxyId?: SortOrder
    payeeProxyType?: SortOrder
    payeeAccountNumber?: SortOrder
    payerAccountNumber?: SortOrder
    payerName?: SortOrder
    sendingBankCode?: SortOrder
    receivingBankCode?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    transactionDateandTime?: SortOrder
    billPaymentRef1?: SortOrder
    billPaymentRef2?: SortOrder
    billPaymentRef3?: SortOrderInput | SortOrder
    currencyCode?: SortOrder
    channelCode?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    partnerTransactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScbPaymentsCountOrderByAggregateInput
    _max?: ScbPaymentsMaxOrderByAggregateInput
    _min?: ScbPaymentsMinOrderByAggregateInput
  }

  export type ScbPaymentsScalarWhereWithAggregatesInput = {
    AND?: ScbPaymentsScalarWhereWithAggregatesInput | ScbPaymentsScalarWhereWithAggregatesInput[]
    OR?: ScbPaymentsScalarWhereWithAggregatesInput[]
    NOT?: ScbPaymentsScalarWhereWithAggregatesInput | ScbPaymentsScalarWhereWithAggregatesInput[]
    scbId?: UuidWithAggregatesFilter<"ScbPayments"> | string
    accountId?: StringNullableWithAggregatesFilter<"ScbPayments"> | string | null
    reverseFlag?: StringNullableWithAggregatesFilter<"ScbPayments"> | string | null
    payeeProxyId?: StringWithAggregatesFilter<"ScbPayments"> | string
    payeeProxyType?: StringWithAggregatesFilter<"ScbPayments"> | string
    payeeAccountNumber?: StringWithAggregatesFilter<"ScbPayments"> | string
    payerAccountNumber?: StringWithAggregatesFilter<"ScbPayments"> | string
    payerName?: StringWithAggregatesFilter<"ScbPayments"> | string
    sendingBankCode?: StringWithAggregatesFilter<"ScbPayments"> | string
    receivingBankCode?: StringWithAggregatesFilter<"ScbPayments"> | string
    amount?: StringWithAggregatesFilter<"ScbPayments"> | string
    transactionId?: StringWithAggregatesFilter<"ScbPayments"> | string
    transactionDateandTime?: StringWithAggregatesFilter<"ScbPayments"> | string
    billPaymentRef1?: StringWithAggregatesFilter<"ScbPayments"> | string
    billPaymentRef2?: StringWithAggregatesFilter<"ScbPayments"> | string
    billPaymentRef3?: StringNullableWithAggregatesFilter<"ScbPayments"> | string | null
    currencyCode?: StringWithAggregatesFilter<"ScbPayments"> | string
    channelCode?: StringNullableWithAggregatesFilter<"ScbPayments"> | string | null
    transactionType?: StringWithAggregatesFilter<"ScbPayments"> | string
    partnerTransactionId?: StringNullableWithAggregatesFilter<"ScbPayments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScbPayments"> | Date | string
  }

  export type ScbSlipVerificationWhereInput = {
    AND?: ScbSlipVerificationWhereInput | ScbSlipVerificationWhereInput[]
    OR?: ScbSlipVerificationWhereInput[]
    NOT?: ScbSlipVerificationWhereInput | ScbSlipVerificationWhereInput[]
    scbVerificationId?: UuidFilter<"ScbSlipVerification"> | string
    scbId?: UuidFilter<"ScbSlipVerification"> | string
    transTime?: StringFilter<"ScbSlipVerification"> | string
    transRef?: StringFilter<"ScbSlipVerification"> | string
    displayName?: StringFilter<"ScbSlipVerification"> | string
    bankType?: StringFilter<"ScbSlipVerification"> | string
    bankName?: StringFilter<"ScbSlipVerification"> | string
    transDate?: StringFilter<"ScbSlipVerification"> | string
    createdAt?: DateTimeFilter<"ScbSlipVerification"> | Date | string
    scbPayments?: XOR<ScbPaymentsScalarRelationFilter, ScbPaymentsWhereInput>
  }

  export type ScbSlipVerificationOrderByWithRelationInput = {
    scbVerificationId?: SortOrder
    scbId?: SortOrder
    transTime?: SortOrder
    transRef?: SortOrder
    displayName?: SortOrder
    bankType?: SortOrder
    bankName?: SortOrder
    transDate?: SortOrder
    createdAt?: SortOrder
    scbPayments?: ScbPaymentsOrderByWithRelationInput
  }

  export type ScbSlipVerificationWhereUniqueInput = Prisma.AtLeast<{
    scbVerificationId?: string
    AND?: ScbSlipVerificationWhereInput | ScbSlipVerificationWhereInput[]
    OR?: ScbSlipVerificationWhereInput[]
    NOT?: ScbSlipVerificationWhereInput | ScbSlipVerificationWhereInput[]
    scbId?: UuidFilter<"ScbSlipVerification"> | string
    transTime?: StringFilter<"ScbSlipVerification"> | string
    transRef?: StringFilter<"ScbSlipVerification"> | string
    displayName?: StringFilter<"ScbSlipVerification"> | string
    bankType?: StringFilter<"ScbSlipVerification"> | string
    bankName?: StringFilter<"ScbSlipVerification"> | string
    transDate?: StringFilter<"ScbSlipVerification"> | string
    createdAt?: DateTimeFilter<"ScbSlipVerification"> | Date | string
    scbPayments?: XOR<ScbPaymentsScalarRelationFilter, ScbPaymentsWhereInput>
  }, "scbVerificationId">

  export type ScbSlipVerificationOrderByWithAggregationInput = {
    scbVerificationId?: SortOrder
    scbId?: SortOrder
    transTime?: SortOrder
    transRef?: SortOrder
    displayName?: SortOrder
    bankType?: SortOrder
    bankName?: SortOrder
    transDate?: SortOrder
    createdAt?: SortOrder
    _count?: ScbSlipVerificationCountOrderByAggregateInput
    _max?: ScbSlipVerificationMaxOrderByAggregateInput
    _min?: ScbSlipVerificationMinOrderByAggregateInput
  }

  export type ScbSlipVerificationScalarWhereWithAggregatesInput = {
    AND?: ScbSlipVerificationScalarWhereWithAggregatesInput | ScbSlipVerificationScalarWhereWithAggregatesInput[]
    OR?: ScbSlipVerificationScalarWhereWithAggregatesInput[]
    NOT?: ScbSlipVerificationScalarWhereWithAggregatesInput | ScbSlipVerificationScalarWhereWithAggregatesInput[]
    scbVerificationId?: UuidWithAggregatesFilter<"ScbSlipVerification"> | string
    scbId?: UuidWithAggregatesFilter<"ScbSlipVerification"> | string
    transTime?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    transRef?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    displayName?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    bankType?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    bankName?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    transDate?: StringWithAggregatesFilter<"ScbSlipVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScbSlipVerification"> | Date | string
  }

  export type ScbVoidWhereInput = {
    AND?: ScbVoidWhereInput | ScbVoidWhereInput[]
    OR?: ScbVoidWhereInput[]
    NOT?: ScbVoidWhereInput | ScbVoidWhereInput[]
    scbVoidId?: UuidFilter<"ScbVoid"> | string
    scbId?: UuidFilter<"ScbVoid"> | string
    responseStatus?: StringFilter<"ScbVoid"> | string
    responseCode?: StringFilter<"ScbVoid"> | string
    responseCodeDescription?: StringFilter<"ScbVoid"> | string
    extStatusDesc?: StringFilter<"ScbVoid"> | string
    createdAt?: DateTimeFilter<"ScbVoid"> | Date | string
    scbPayments?: XOR<ScbPaymentsScalarRelationFilter, ScbPaymentsWhereInput>
  }

  export type ScbVoidOrderByWithRelationInput = {
    scbVoidId?: SortOrder
    scbId?: SortOrder
    responseStatus?: SortOrder
    responseCode?: SortOrder
    responseCodeDescription?: SortOrder
    extStatusDesc?: SortOrder
    createdAt?: SortOrder
    scbPayments?: ScbPaymentsOrderByWithRelationInput
  }

  export type ScbVoidWhereUniqueInput = Prisma.AtLeast<{
    scbVoidId?: string
    AND?: ScbVoidWhereInput | ScbVoidWhereInput[]
    OR?: ScbVoidWhereInput[]
    NOT?: ScbVoidWhereInput | ScbVoidWhereInput[]
    scbId?: UuidFilter<"ScbVoid"> | string
    responseStatus?: StringFilter<"ScbVoid"> | string
    responseCode?: StringFilter<"ScbVoid"> | string
    responseCodeDescription?: StringFilter<"ScbVoid"> | string
    extStatusDesc?: StringFilter<"ScbVoid"> | string
    createdAt?: DateTimeFilter<"ScbVoid"> | Date | string
    scbPayments?: XOR<ScbPaymentsScalarRelationFilter, ScbPaymentsWhereInput>
  }, "scbVoidId">

  export type ScbVoidOrderByWithAggregationInput = {
    scbVoidId?: SortOrder
    scbId?: SortOrder
    responseStatus?: SortOrder
    responseCode?: SortOrder
    responseCodeDescription?: SortOrder
    extStatusDesc?: SortOrder
    createdAt?: SortOrder
    _count?: ScbVoidCountOrderByAggregateInput
    _max?: ScbVoidMaxOrderByAggregateInput
    _min?: ScbVoidMinOrderByAggregateInput
  }

  export type ScbVoidScalarWhereWithAggregatesInput = {
    AND?: ScbVoidScalarWhereWithAggregatesInput | ScbVoidScalarWhereWithAggregatesInput[]
    OR?: ScbVoidScalarWhereWithAggregatesInput[]
    NOT?: ScbVoidScalarWhereWithAggregatesInput | ScbVoidScalarWhereWithAggregatesInput[]
    scbVoidId?: UuidWithAggregatesFilter<"ScbVoid"> | string
    scbId?: UuidWithAggregatesFilter<"ScbVoid"> | string
    responseStatus?: StringWithAggregatesFilter<"ScbVoid"> | string
    responseCode?: StringWithAggregatesFilter<"ScbVoid"> | string
    responseCodeDescription?: StringWithAggregatesFilter<"ScbVoid"> | string
    extStatusDesc?: StringWithAggregatesFilter<"ScbVoid"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScbVoid"> | Date | string
  }

  export type VisitorBlockWhereInput = {
    AND?: VisitorBlockWhereInput | VisitorBlockWhereInput[]
    OR?: VisitorBlockWhereInput[]
    NOT?: VisitorBlockWhereInput | VisitorBlockWhereInput[]
    blockId?: UuidFilter<"VisitorBlock"> | string
    visitorId?: StringFilter<"VisitorBlock"> | string
    blockedAt?: DateTimeFilter<"VisitorBlock"> | Date | string
    unblockAt?: DateTimeFilter<"VisitorBlock"> | Date | string
  }

  export type VisitorBlockOrderByWithRelationInput = {
    blockId?: SortOrder
    visitorId?: SortOrder
    blockedAt?: SortOrder
    unblockAt?: SortOrder
  }

  export type VisitorBlockWhereUniqueInput = Prisma.AtLeast<{
    blockId?: string
    visitorId?: string
    AND?: VisitorBlockWhereInput | VisitorBlockWhereInput[]
    OR?: VisitorBlockWhereInput[]
    NOT?: VisitorBlockWhereInput | VisitorBlockWhereInput[]
    blockedAt?: DateTimeFilter<"VisitorBlock"> | Date | string
    unblockAt?: DateTimeFilter<"VisitorBlock"> | Date | string
  }, "blockId" | "visitorId">

  export type VisitorBlockOrderByWithAggregationInput = {
    blockId?: SortOrder
    visitorId?: SortOrder
    blockedAt?: SortOrder
    unblockAt?: SortOrder
    _count?: VisitorBlockCountOrderByAggregateInput
    _max?: VisitorBlockMaxOrderByAggregateInput
    _min?: VisitorBlockMinOrderByAggregateInput
  }

  export type VisitorBlockScalarWhereWithAggregatesInput = {
    AND?: VisitorBlockScalarWhereWithAggregatesInput | VisitorBlockScalarWhereWithAggregatesInput[]
    OR?: VisitorBlockScalarWhereWithAggregatesInput[]
    NOT?: VisitorBlockScalarWhereWithAggregatesInput | VisitorBlockScalarWhereWithAggregatesInput[]
    blockId?: UuidWithAggregatesFilter<"VisitorBlock"> | string
    visitorId?: StringWithAggregatesFilter<"VisitorBlock"> | string
    blockedAt?: DateTimeWithAggregatesFilter<"VisitorBlock"> | Date | string
    unblockAt?: DateTimeWithAggregatesFilter<"VisitorBlock"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
    jobposition?: JobPositionCreateNestedOneWithoutUserInput
    DepartmentMembership?: DepartmentMembershipCreateNestedManyWithoutUserInput
    UserPermission?: UserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    jobpositionId?: string | null
    createAt: Date | string
    updateAt: Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedCreateNestedManyWithoutUserInput
    UserPermission?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobposition?: JobPositionUpdateOneWithoutUserNestedInput
    DepartmentMembership?: DepartmentMembershipUpdateManyWithoutUserNestedInput
    UserPermission?: UserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    jobpositionId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedUpdateManyWithoutUserNestedInput
    UserPermission?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    jobpositionId?: string | null
    createAt: Date | string
    updateAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    jobpositionId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPositionCreateInput = {
    jobpositionId?: string
    name: string
    passposition: string
    createAt: Date | string
    updateAt: Date | string
    User?: UserCreateNestedManyWithoutJobpositionInput
  }

  export type JobPositionUncheckedCreateInput = {
    jobpositionId?: string
    name: string
    passposition: string
    createAt: Date | string
    updateAt: Date | string
    User?: UserUncheckedCreateNestedManyWithoutJobpositionInput
  }

  export type JobPositionUpdateInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutJobpositionNestedInput
  }

  export type JobPositionUncheckedUpdateInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutJobpositionNestedInput
  }

  export type JobPositionCreateManyInput = {
    jobpositionId?: string
    name: string
    passposition: string
    createAt: Date | string
    updateAt: Date | string
  }

  export type JobPositionUpdateManyMutationInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPositionUncheckedUpdateManyInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainDepartmentCreateInput = {
    mainDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subDepartments?: SubDepartmentCreateNestedManyWithoutMainDepartmentInput
  }

  export type MainDepartmentUncheckedCreateInput = {
    mainDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subDepartments?: SubDepartmentUncheckedCreateNestedManyWithoutMainDepartmentInput
  }

  export type MainDepartmentUpdateInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subDepartments?: SubDepartmentUpdateManyWithoutMainDepartmentNestedInput
  }

  export type MainDepartmentUncheckedUpdateInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subDepartments?: SubDepartmentUncheckedUpdateManyWithoutMainDepartmentNestedInput
  }

  export type MainDepartmentCreateManyInput = {
    mainDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainDepartmentUpdateManyMutationInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainDepartmentUncheckedUpdateManyInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDepartmentCreateInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainDepartment: MainDepartmentCreateNestedOneWithoutSubDepartmentsInput
    members?: DepartmentMembershipCreateNestedManyWithoutSubDepartmentInput
    PermissionDepartment?: PermissionDepartmentCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentUncheckedCreateInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    mainDepartmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DepartmentMembershipUncheckedCreateNestedManyWithoutSubDepartmentInput
    PermissionDepartment?: PermissionDepartmentUncheckedCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentUpdateInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainDepartment?: MainDepartmentUpdateOneRequiredWithoutSubDepartmentsNestedInput
    members?: DepartmentMembershipUpdateManyWithoutSubDepartmentNestedInput
    PermissionDepartment?: PermissionDepartmentUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentUncheckedUpdateInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentNestedInput
    PermissionDepartment?: PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentCreateManyInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    mainDepartmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDepartmentUpdateManyMutationInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDepartmentUncheckedUpdateManyInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipCreateInput = {
    departmentMembershipId?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutDepartmentMembershipInput
    subDepartment: SubDepartmentCreateNestedOneWithoutMembersInput
  }

  export type DepartmentMembershipUncheckedCreateInput = {
    departmentMembershipId?: string
    userId: string
    subDepartmentId: string
    assignedAt?: Date | string
  }

  export type DepartmentMembershipUpdateInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepartmentMembershipNestedInput
    subDepartment?: SubDepartmentUpdateOneRequiredWithoutMembersNestedInput
  }

  export type DepartmentMembershipUncheckedUpdateInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipCreateManyInput = {
    departmentMembershipId?: string
    userId: string
    subDepartmentId: string
    assignedAt?: Date | string
  }

  export type DepartmentMembershipUpdateManyMutationInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipUncheckedUpdateManyInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    projectId?: string
    name: string
    description?: string | null
    database: string
    part?: string | null
    position?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPermission?: UserPermissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    projectId?: string
    name: string
    description?: string | null
    database: string
    part?: string | null
    position?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPermission?: UserPermissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPermission?: UserPermissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPermission?: UserPermissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    projectId?: string
    name: string
    description?: string | null
    database: string
    part?: string | null
    position?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    menuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subMenus?: SubMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    menuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subMenus?: SubMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subMenus?: SubMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subMenus?: SubMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    menuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuCreateInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    menu: MenuCreateNestedOneWithoutSubMenusInput
    permissions?: UserPermissionCreateNestedManyWithoutSubmenuInput
  }

  export type SubMenuUncheckedCreateInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    menuId: string
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutSubmenuInput
  }

  export type SubMenuUpdateInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutSubMenusNestedInput
    permissions?: UserPermissionUpdateManyWithoutSubmenuNestedInput
  }

  export type SubMenuUncheckedUpdateInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: StringFieldUpdateOperationsInput | string
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserPermissionUncheckedUpdateManyWithoutSubmenuNestedInput
  }

  export type SubMenuCreateManyInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    menuId: string
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUpdateManyMutationInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuUncheckedUpdateManyInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: StringFieldUpdateOperationsInput | string
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionCreateInput = {
    userPermissionId?: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPermissionInput
    submenu: SubMenuCreateNestedOneWithoutPermissionsInput
    project?: ProjectCreateNestedOneWithoutUserPermissionInput
    departments?: PermissionDepartmentCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionUncheckedCreateInput = {
    userPermissionId?: string
    userId: string
    submenuId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: PermissionDepartmentUncheckedCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionUpdateInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPermissionNestedInput
    submenu?: SubMenuUpdateOneRequiredWithoutPermissionsNestedInput
    project?: ProjectUpdateOneWithoutUserPermissionNestedInput
    departments?: PermissionDepartmentUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionCreateManyInput = {
    userPermissionId?: string
    userId: string
    submenuId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateManyMutationInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSuperAdminCreateInput = {
    userSuperAdminId?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSuperAdminUncheckedCreateInput = {
    userSuperAdminId?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSuperAdminUpdateInput = {
    userSuperAdminId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSuperAdminUncheckedUpdateInput = {
    userSuperAdminId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSuperAdminCreateManyInput = {
    userSuperAdminId?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSuperAdminUpdateManyMutationInput = {
    userSuperAdminId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSuperAdminUncheckedUpdateManyInput = {
    userSuperAdminId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionDepartmentCreateInput = {
    permissionDepartmentId?: string
    userPermission: UserPermissionCreateNestedOneWithoutDepartmentsInput
    subDepartment: SubDepartmentCreateNestedOneWithoutPermissionDepartmentInput
  }

  export type PermissionDepartmentUncheckedCreateInput = {
    permissionDepartmentId?: string
    userPermissionId: string
    subDepartmentId: string
  }

  export type PermissionDepartmentUpdateInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermission?: UserPermissionUpdateOneRequiredWithoutDepartmentsNestedInput
    subDepartment?: SubDepartmentUpdateOneRequiredWithoutPermissionDepartmentNestedInput
  }

  export type PermissionDepartmentUncheckedUpdateInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermissionId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionDepartmentCreateManyInput = {
    permissionDepartmentId?: string
    userPermissionId: string
    subDepartmentId: string
  }

  export type PermissionDepartmentUpdateManyMutationInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionDepartmentUncheckedUpdateManyInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermissionId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ScbPaymentsCreateInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbSlipVerification?: ScbSlipVerificationCreateNestedManyWithoutScbPaymentsInput
    ScbVoid?: ScbVoidCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsUncheckedCreateInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbSlipVerification?: ScbSlipVerificationUncheckedCreateNestedManyWithoutScbPaymentsInput
    ScbVoid?: ScbVoidUncheckedCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsUpdateInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbSlipVerification?: ScbSlipVerificationUpdateManyWithoutScbPaymentsNestedInput
    ScbVoid?: ScbVoidUpdateManyWithoutScbPaymentsNestedInput
  }

  export type ScbPaymentsUncheckedUpdateInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbSlipVerification?: ScbSlipVerificationUncheckedUpdateManyWithoutScbPaymentsNestedInput
    ScbVoid?: ScbVoidUncheckedUpdateManyWithoutScbPaymentsNestedInput
  }

  export type ScbPaymentsCreateManyInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
  }

  export type ScbPaymentsUpdateManyMutationInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbPaymentsUncheckedUpdateManyInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbSlipVerificationCreateInput = {
    scbVerificationId?: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
    scbPayments: ScbPaymentsCreateNestedOneWithoutScbSlipVerificationInput
  }

  export type ScbSlipVerificationUncheckedCreateInput = {
    scbVerificationId?: string
    scbId: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
  }

  export type ScbSlipVerificationUpdateInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scbPayments?: ScbPaymentsUpdateOneRequiredWithoutScbSlipVerificationNestedInput
  }

  export type ScbSlipVerificationUncheckedUpdateInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    scbId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbSlipVerificationCreateManyInput = {
    scbVerificationId?: string
    scbId: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
  }

  export type ScbSlipVerificationUpdateManyMutationInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbSlipVerificationUncheckedUpdateManyInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    scbId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidCreateInput = {
    scbVoidId?: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
    scbPayments: ScbPaymentsCreateNestedOneWithoutScbVoidInput
  }

  export type ScbVoidUncheckedCreateInput = {
    scbVoidId?: string
    scbId: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
  }

  export type ScbVoidUpdateInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scbPayments?: ScbPaymentsUpdateOneRequiredWithoutScbVoidNestedInput
  }

  export type ScbVoidUncheckedUpdateInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    scbId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidCreateManyInput = {
    scbVoidId?: string
    scbId: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
  }

  export type ScbVoidUpdateManyMutationInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidUncheckedUpdateManyInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    scbId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorBlockCreateInput = {
    blockId?: string
    visitorId: string
    blockedAt?: Date | string
    unblockAt: Date | string
  }

  export type VisitorBlockUncheckedCreateInput = {
    blockId?: string
    visitorId: string
    blockedAt?: Date | string
    unblockAt: Date | string
  }

  export type VisitorBlockUpdateInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unblockAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorBlockUncheckedUpdateInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unblockAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorBlockCreateManyInput = {
    blockId?: string
    visitorId: string
    blockedAt?: Date | string
    unblockAt: Date | string
  }

  export type VisitorBlockUpdateManyMutationInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unblockAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorBlockUncheckedUpdateManyInput = {
    blockId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unblockAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type JobPositionNullableScalarRelationFilter = {
    is?: JobPositionWhereInput | null
    isNot?: JobPositionWhereInput | null
  }

  export type DepartmentMembershipListRelationFilter = {
    every?: DepartmentMembershipWhereInput
    some?: DepartmentMembershipWhereInput
    none?: DepartmentMembershipWhereInput
  }

  export type UserPermissionListRelationFilter = {
    every?: UserPermissionWhereInput
    some?: UserPermissionWhereInput
    none?: UserPermissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    cmuitaccount?: SortOrder
    cmuitaccount_name?: SortOrder
    firstname_EN?: SortOrder
    firstname_TH?: SortOrder
    itaccounttype_EN?: SortOrder
    itaccounttype_TH?: SortOrder
    itaccounttype_id?: SortOrder
    lastname_EN?: SortOrder
    lastname_TH?: SortOrder
    organization_code?: SortOrder
    organization_name_EN?: SortOrder
    organization_name_TH?: SortOrder
    organization_vet?: SortOrder
    organization_vet_id?: SortOrder
    prename_EN?: SortOrder
    prename_TH?: SortOrder
    prename_id?: SortOrder
    student_id?: SortOrder
    status_user?: SortOrder
    image?: SortOrder
    jobpositionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    cmuitaccount?: SortOrder
    cmuitaccount_name?: SortOrder
    firstname_EN?: SortOrder
    firstname_TH?: SortOrder
    itaccounttype_EN?: SortOrder
    itaccounttype_TH?: SortOrder
    itaccounttype_id?: SortOrder
    lastname_EN?: SortOrder
    lastname_TH?: SortOrder
    organization_code?: SortOrder
    organization_name_EN?: SortOrder
    organization_name_TH?: SortOrder
    organization_vet?: SortOrder
    organization_vet_id?: SortOrder
    prename_EN?: SortOrder
    prename_TH?: SortOrder
    prename_id?: SortOrder
    student_id?: SortOrder
    status_user?: SortOrder
    image?: SortOrder
    jobpositionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    cmuitaccount?: SortOrder
    cmuitaccount_name?: SortOrder
    firstname_EN?: SortOrder
    firstname_TH?: SortOrder
    itaccounttype_EN?: SortOrder
    itaccounttype_TH?: SortOrder
    itaccounttype_id?: SortOrder
    lastname_EN?: SortOrder
    lastname_TH?: SortOrder
    organization_code?: SortOrder
    organization_name_EN?: SortOrder
    organization_name_TH?: SortOrder
    organization_vet?: SortOrder
    organization_vet_id?: SortOrder
    prename_EN?: SortOrder
    prename_TH?: SortOrder
    prename_id?: SortOrder
    student_id?: SortOrder
    status_user?: SortOrder
    image?: SortOrder
    jobpositionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobPositionCountOrderByAggregateInput = {
    jobpositionId?: SortOrder
    name?: SortOrder
    passposition?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type JobPositionMaxOrderByAggregateInput = {
    jobpositionId?: SortOrder
    name?: SortOrder
    passposition?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type JobPositionMinOrderByAggregateInput = {
    jobpositionId?: SortOrder
    name?: SortOrder
    passposition?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SubDepartmentListRelationFilter = {
    every?: SubDepartmentWhereInput
    some?: SubDepartmentWhereInput
    none?: SubDepartmentWhereInput
  }

  export type SubDepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainDepartmentCountOrderByAggregateInput = {
    mainDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainDepartmentMaxOrderByAggregateInput = {
    mainDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainDepartmentMinOrderByAggregateInput = {
    mainDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainDepartmentScalarRelationFilter = {
    is?: MainDepartmentWhereInput
    isNot?: MainDepartmentWhereInput
  }

  export type PermissionDepartmentListRelationFilter = {
    every?: PermissionDepartmentWhereInput
    some?: PermissionDepartmentWhereInput
    none?: PermissionDepartmentWhereInput
  }

  export type PermissionDepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubDepartmentCountOrderByAggregateInput = {
    subDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    mainDepartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubDepartmentMaxOrderByAggregateInput = {
    subDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    mainDepartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubDepartmentMinOrderByAggregateInput = {
    subDepartmentId?: SortOrder
    name_EN?: SortOrder
    name_TH?: SortOrder
    mainDepartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubDepartmentScalarRelationFilter = {
    is?: SubDepartmentWhereInput
    isNot?: SubDepartmentWhereInput
  }

  export type DepartmentMembershipUserIdSubDepartmentIdCompoundUniqueInput = {
    userId: string
    subDepartmentId: string
  }

  export type DepartmentMembershipCountOrderByAggregateInput = {
    departmentMembershipId?: SortOrder
    userId?: SortOrder
    subDepartmentId?: SortOrder
    assignedAt?: SortOrder
  }

  export type DepartmentMembershipMaxOrderByAggregateInput = {
    departmentMembershipId?: SortOrder
    userId?: SortOrder
    subDepartmentId?: SortOrder
    assignedAt?: SortOrder
  }

  export type DepartmentMembershipMinOrderByAggregateInput = {
    departmentMembershipId?: SortOrder
    userId?: SortOrder
    subDepartmentId?: SortOrder
    assignedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectCountOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    database?: SortOrder
    part?: SortOrder
    position?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    database?: SortOrder
    part?: SortOrder
    position?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    database?: SortOrder
    part?: SortOrder
    position?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    position?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubMenuListRelationFilter = {
    every?: SubMenuWhereInput
    some?: SubMenuWhereInput
    none?: SubMenuWhereInput
  }

  export type SubMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    menuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    menuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    menuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type SubMenuCountOrderByAggregateInput = {
    submenuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    menuId?: SortOrder
    isProjectBased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type SubMenuMaxOrderByAggregateInput = {
    submenuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    menuId?: SortOrder
    isProjectBased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuMinOrderByAggregateInput = {
    submenuId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    part?: SortOrder
    position?: SortOrder
    menuId?: SortOrder
    isProjectBased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumAccessScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessScope | EnumAccessScopeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessScopeFilter<$PrismaModel> | $Enums.AccessScope
  }

  export type SubMenuScalarRelationFilter = {
    is?: SubMenuWhereInput
    isNot?: SubMenuWhereInput
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type UserPermissionUserIdSubmenuIdProjectIdCompoundUniqueInput = {
    userId: string
    submenuId: string
    projectId: string
  }

  export type UserPermissionCountOrderByAggregateInput = {
    userPermissionId?: SortOrder
    userId?: SortOrder
    submenuId?: SortOrder
    projectId?: SortOrder
    view?: SortOrder
    create?: SortOrder
    edit?: SortOrder
    delete?: SortOrder
    accessScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMaxOrderByAggregateInput = {
    userPermissionId?: SortOrder
    userId?: SortOrder
    submenuId?: SortOrder
    projectId?: SortOrder
    view?: SortOrder
    create?: SortOrder
    edit?: SortOrder
    delete?: SortOrder
    accessScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMinOrderByAggregateInput = {
    userPermissionId?: SortOrder
    userId?: SortOrder
    submenuId?: SortOrder
    projectId?: SortOrder
    view?: SortOrder
    create?: SortOrder
    edit?: SortOrder
    delete?: SortOrder
    accessScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAccessScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessScope | EnumAccessScopeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessScopeWithAggregatesFilter<$PrismaModel> | $Enums.AccessScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessScopeFilter<$PrismaModel>
    _max?: NestedEnumAccessScopeFilter<$PrismaModel>
  }

  export type UserSuperAdminCountOrderByAggregateInput = {
    userSuperAdminId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSuperAdminMaxOrderByAggregateInput = {
    userSuperAdminId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSuperAdminMinOrderByAggregateInput = {
    userSuperAdminId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionScalarRelationFilter = {
    is?: UserPermissionWhereInput
    isNot?: UserPermissionWhereInput
  }

  export type PermissionDepartmentUserPermissionIdSubDepartmentIdCompoundUniqueInput = {
    userPermissionId: string
    subDepartmentId: string
  }

  export type PermissionDepartmentCountOrderByAggregateInput = {
    permissionDepartmentId?: SortOrder
    userPermissionId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type PermissionDepartmentMaxOrderByAggregateInput = {
    permissionDepartmentId?: SortOrder
    userPermissionId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type PermissionDepartmentMinOrderByAggregateInput = {
    permissionDepartmentId?: SortOrder
    userPermissionId?: SortOrder
    subDepartmentId?: SortOrder
  }

  export type ScbSlipVerificationListRelationFilter = {
    every?: ScbSlipVerificationWhereInput
    some?: ScbSlipVerificationWhereInput
    none?: ScbSlipVerificationWhereInput
  }

  export type ScbVoidListRelationFilter = {
    every?: ScbVoidWhereInput
    some?: ScbVoidWhereInput
    none?: ScbVoidWhereInput
  }

  export type ScbSlipVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScbVoidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScbPaymentsCountOrderByAggregateInput = {
    scbId?: SortOrder
    accountId?: SortOrder
    reverseFlag?: SortOrder
    payeeProxyId?: SortOrder
    payeeProxyType?: SortOrder
    payeeAccountNumber?: SortOrder
    payerAccountNumber?: SortOrder
    payerName?: SortOrder
    sendingBankCode?: SortOrder
    receivingBankCode?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    transactionDateandTime?: SortOrder
    billPaymentRef1?: SortOrder
    billPaymentRef2?: SortOrder
    billPaymentRef3?: SortOrder
    currencyCode?: SortOrder
    channelCode?: SortOrder
    transactionType?: SortOrder
    partnerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbPaymentsMaxOrderByAggregateInput = {
    scbId?: SortOrder
    accountId?: SortOrder
    reverseFlag?: SortOrder
    payeeProxyId?: SortOrder
    payeeProxyType?: SortOrder
    payeeAccountNumber?: SortOrder
    payerAccountNumber?: SortOrder
    payerName?: SortOrder
    sendingBankCode?: SortOrder
    receivingBankCode?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    transactionDateandTime?: SortOrder
    billPaymentRef1?: SortOrder
    billPaymentRef2?: SortOrder
    billPaymentRef3?: SortOrder
    currencyCode?: SortOrder
    channelCode?: SortOrder
    transactionType?: SortOrder
    partnerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbPaymentsMinOrderByAggregateInput = {
    scbId?: SortOrder
    accountId?: SortOrder
    reverseFlag?: SortOrder
    payeeProxyId?: SortOrder
    payeeProxyType?: SortOrder
    payeeAccountNumber?: SortOrder
    payerAccountNumber?: SortOrder
    payerName?: SortOrder
    sendingBankCode?: SortOrder
    receivingBankCode?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    transactionDateandTime?: SortOrder
    billPaymentRef1?: SortOrder
    billPaymentRef2?: SortOrder
    billPaymentRef3?: SortOrder
    currencyCode?: SortOrder
    channelCode?: SortOrder
    transactionType?: SortOrder
    partnerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbPaymentsScalarRelationFilter = {
    is?: ScbPaymentsWhereInput
    isNot?: ScbPaymentsWhereInput
  }

  export type ScbSlipVerificationCountOrderByAggregateInput = {
    scbVerificationId?: SortOrder
    scbId?: SortOrder
    transTime?: SortOrder
    transRef?: SortOrder
    displayName?: SortOrder
    bankType?: SortOrder
    bankName?: SortOrder
    transDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbSlipVerificationMaxOrderByAggregateInput = {
    scbVerificationId?: SortOrder
    scbId?: SortOrder
    transTime?: SortOrder
    transRef?: SortOrder
    displayName?: SortOrder
    bankType?: SortOrder
    bankName?: SortOrder
    transDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbSlipVerificationMinOrderByAggregateInput = {
    scbVerificationId?: SortOrder
    scbId?: SortOrder
    transTime?: SortOrder
    transRef?: SortOrder
    displayName?: SortOrder
    bankType?: SortOrder
    bankName?: SortOrder
    transDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbVoidCountOrderByAggregateInput = {
    scbVoidId?: SortOrder
    scbId?: SortOrder
    responseStatus?: SortOrder
    responseCode?: SortOrder
    responseCodeDescription?: SortOrder
    extStatusDesc?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbVoidMaxOrderByAggregateInput = {
    scbVoidId?: SortOrder
    scbId?: SortOrder
    responseStatus?: SortOrder
    responseCode?: SortOrder
    responseCodeDescription?: SortOrder
    extStatusDesc?: SortOrder
    createdAt?: SortOrder
  }

  export type ScbVoidMinOrderByAggregateInput = {
    scbVoidId?: SortOrder
    scbId?: SortOrder
    responseStatus?: SortOrder
    responseCode?: SortOrder
    responseCodeDescription?: SortOrder
    extStatusDesc?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitorBlockCountOrderByAggregateInput = {
    blockId?: SortOrder
    visitorId?: SortOrder
    blockedAt?: SortOrder
    unblockAt?: SortOrder
  }

  export type VisitorBlockMaxOrderByAggregateInput = {
    blockId?: SortOrder
    visitorId?: SortOrder
    blockedAt?: SortOrder
    unblockAt?: SortOrder
  }

  export type VisitorBlockMinOrderByAggregateInput = {
    blockId?: SortOrder
    visitorId?: SortOrder
    blockedAt?: SortOrder
    unblockAt?: SortOrder
  }

  export type JobPositionCreateNestedOneWithoutUserInput = {
    create?: XOR<JobPositionCreateWithoutUserInput, JobPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobPositionCreateOrConnectWithoutUserInput
    connect?: JobPositionWhereUniqueInput
  }

  export type DepartmentMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput> | DepartmentMembershipCreateWithoutUserInput[] | DepartmentMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutUserInput | DepartmentMembershipCreateOrConnectWithoutUserInput[]
    createMany?: DepartmentMembershipCreateManyUserInputEnvelope
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
  }

  export type UserPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type DepartmentMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput> | DepartmentMembershipCreateWithoutUserInput[] | DepartmentMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutUserInput | DepartmentMembershipCreateOrConnectWithoutUserInput[]
    createMany?: DepartmentMembershipCreateManyUserInputEnvelope
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
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

  export type JobPositionUpdateOneWithoutUserNestedInput = {
    create?: XOR<JobPositionCreateWithoutUserInput, JobPositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobPositionCreateOrConnectWithoutUserInput
    upsert?: JobPositionUpsertWithoutUserInput
    disconnect?: JobPositionWhereInput | boolean
    delete?: JobPositionWhereInput | boolean
    connect?: JobPositionWhereUniqueInput
    update?: XOR<XOR<JobPositionUpdateToOneWithWhereWithoutUserInput, JobPositionUpdateWithoutUserInput>, JobPositionUncheckedUpdateWithoutUserInput>
  }

  export type DepartmentMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput> | DepartmentMembershipCreateWithoutUserInput[] | DepartmentMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutUserInput | DepartmentMembershipCreateOrConnectWithoutUserInput[]
    upsert?: DepartmentMembershipUpsertWithWhereUniqueWithoutUserInput | DepartmentMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepartmentMembershipCreateManyUserInputEnvelope
    set?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    disconnect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    delete?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    update?: DepartmentMembershipUpdateWithWhereUniqueWithoutUserInput | DepartmentMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepartmentMembershipUpdateManyWithWhereWithoutUserInput | DepartmentMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
  }

  export type UserPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type DepartmentMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput> | DepartmentMembershipCreateWithoutUserInput[] | DepartmentMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutUserInput | DepartmentMembershipCreateOrConnectWithoutUserInput[]
    upsert?: DepartmentMembershipUpsertWithWhereUniqueWithoutUserInput | DepartmentMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepartmentMembershipCreateManyUserInputEnvelope
    set?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    disconnect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    delete?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    update?: DepartmentMembershipUpdateWithWhereUniqueWithoutUserInput | DepartmentMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepartmentMembershipUpdateManyWithWhereWithoutUserInput | DepartmentMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutJobpositionInput = {
    create?: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput> | UserCreateWithoutJobpositionInput[] | UserUncheckedCreateWithoutJobpositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJobpositionInput | UserCreateOrConnectWithoutJobpositionInput[]
    createMany?: UserCreateManyJobpositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJobpositionInput = {
    create?: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput> | UserCreateWithoutJobpositionInput[] | UserUncheckedCreateWithoutJobpositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJobpositionInput | UserCreateOrConnectWithoutJobpositionInput[]
    createMany?: UserCreateManyJobpositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutJobpositionNestedInput = {
    create?: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput> | UserCreateWithoutJobpositionInput[] | UserUncheckedCreateWithoutJobpositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJobpositionInput | UserCreateOrConnectWithoutJobpositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJobpositionInput | UserUpsertWithWhereUniqueWithoutJobpositionInput[]
    createMany?: UserCreateManyJobpositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJobpositionInput | UserUpdateWithWhereUniqueWithoutJobpositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJobpositionInput | UserUpdateManyWithWhereWithoutJobpositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJobpositionNestedInput = {
    create?: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput> | UserCreateWithoutJobpositionInput[] | UserUncheckedCreateWithoutJobpositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJobpositionInput | UserCreateOrConnectWithoutJobpositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJobpositionInput | UserUpsertWithWhereUniqueWithoutJobpositionInput[]
    createMany?: UserCreateManyJobpositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJobpositionInput | UserUpdateWithWhereUniqueWithoutJobpositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJobpositionInput | UserUpdateManyWithWhereWithoutJobpositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubDepartmentCreateNestedManyWithoutMainDepartmentInput = {
    create?: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput> | SubDepartmentCreateWithoutMainDepartmentInput[] | SubDepartmentUncheckedCreateWithoutMainDepartmentInput[]
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMainDepartmentInput | SubDepartmentCreateOrConnectWithoutMainDepartmentInput[]
    createMany?: SubDepartmentCreateManyMainDepartmentInputEnvelope
    connect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
  }

  export type SubDepartmentUncheckedCreateNestedManyWithoutMainDepartmentInput = {
    create?: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput> | SubDepartmentCreateWithoutMainDepartmentInput[] | SubDepartmentUncheckedCreateWithoutMainDepartmentInput[]
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMainDepartmentInput | SubDepartmentCreateOrConnectWithoutMainDepartmentInput[]
    createMany?: SubDepartmentCreateManyMainDepartmentInputEnvelope
    connect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
  }

  export type SubDepartmentUpdateManyWithoutMainDepartmentNestedInput = {
    create?: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput> | SubDepartmentCreateWithoutMainDepartmentInput[] | SubDepartmentUncheckedCreateWithoutMainDepartmentInput[]
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMainDepartmentInput | SubDepartmentCreateOrConnectWithoutMainDepartmentInput[]
    upsert?: SubDepartmentUpsertWithWhereUniqueWithoutMainDepartmentInput | SubDepartmentUpsertWithWhereUniqueWithoutMainDepartmentInput[]
    createMany?: SubDepartmentCreateManyMainDepartmentInputEnvelope
    set?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    disconnect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    delete?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    connect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    update?: SubDepartmentUpdateWithWhereUniqueWithoutMainDepartmentInput | SubDepartmentUpdateWithWhereUniqueWithoutMainDepartmentInput[]
    updateMany?: SubDepartmentUpdateManyWithWhereWithoutMainDepartmentInput | SubDepartmentUpdateManyWithWhereWithoutMainDepartmentInput[]
    deleteMany?: SubDepartmentScalarWhereInput | SubDepartmentScalarWhereInput[]
  }

  export type SubDepartmentUncheckedUpdateManyWithoutMainDepartmentNestedInput = {
    create?: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput> | SubDepartmentCreateWithoutMainDepartmentInput[] | SubDepartmentUncheckedCreateWithoutMainDepartmentInput[]
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMainDepartmentInput | SubDepartmentCreateOrConnectWithoutMainDepartmentInput[]
    upsert?: SubDepartmentUpsertWithWhereUniqueWithoutMainDepartmentInput | SubDepartmentUpsertWithWhereUniqueWithoutMainDepartmentInput[]
    createMany?: SubDepartmentCreateManyMainDepartmentInputEnvelope
    set?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    disconnect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    delete?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    connect?: SubDepartmentWhereUniqueInput | SubDepartmentWhereUniqueInput[]
    update?: SubDepartmentUpdateWithWhereUniqueWithoutMainDepartmentInput | SubDepartmentUpdateWithWhereUniqueWithoutMainDepartmentInput[]
    updateMany?: SubDepartmentUpdateManyWithWhereWithoutMainDepartmentInput | SubDepartmentUpdateManyWithWhereWithoutMainDepartmentInput[]
    deleteMany?: SubDepartmentScalarWhereInput | SubDepartmentScalarWhereInput[]
  }

  export type MainDepartmentCreateNestedOneWithoutSubDepartmentsInput = {
    create?: XOR<MainDepartmentCreateWithoutSubDepartmentsInput, MainDepartmentUncheckedCreateWithoutSubDepartmentsInput>
    connectOrCreate?: MainDepartmentCreateOrConnectWithoutSubDepartmentsInput
    connect?: MainDepartmentWhereUniqueInput
  }

  export type DepartmentMembershipCreateNestedManyWithoutSubDepartmentInput = {
    create?: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput> | DepartmentMembershipCreateWithoutSubDepartmentInput[] | DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput | DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput[]
    createMany?: DepartmentMembershipCreateManySubDepartmentInputEnvelope
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
  }

  export type PermissionDepartmentCreateNestedManyWithoutSubDepartmentInput = {
    create?: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput> | PermissionDepartmentCreateWithoutSubDepartmentInput[] | PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput | PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput[]
    createMany?: PermissionDepartmentCreateManySubDepartmentInputEnvelope
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
  }

  export type DepartmentMembershipUncheckedCreateNestedManyWithoutSubDepartmentInput = {
    create?: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput> | DepartmentMembershipCreateWithoutSubDepartmentInput[] | DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput | DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput[]
    createMany?: DepartmentMembershipCreateManySubDepartmentInputEnvelope
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
  }

  export type PermissionDepartmentUncheckedCreateNestedManyWithoutSubDepartmentInput = {
    create?: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput> | PermissionDepartmentCreateWithoutSubDepartmentInput[] | PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput | PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput[]
    createMany?: PermissionDepartmentCreateManySubDepartmentInputEnvelope
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
  }

  export type MainDepartmentUpdateOneRequiredWithoutSubDepartmentsNestedInput = {
    create?: XOR<MainDepartmentCreateWithoutSubDepartmentsInput, MainDepartmentUncheckedCreateWithoutSubDepartmentsInput>
    connectOrCreate?: MainDepartmentCreateOrConnectWithoutSubDepartmentsInput
    upsert?: MainDepartmentUpsertWithoutSubDepartmentsInput
    connect?: MainDepartmentWhereUniqueInput
    update?: XOR<XOR<MainDepartmentUpdateToOneWithWhereWithoutSubDepartmentsInput, MainDepartmentUpdateWithoutSubDepartmentsInput>, MainDepartmentUncheckedUpdateWithoutSubDepartmentsInput>
  }

  export type DepartmentMembershipUpdateManyWithoutSubDepartmentNestedInput = {
    create?: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput> | DepartmentMembershipCreateWithoutSubDepartmentInput[] | DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput | DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput[]
    upsert?: DepartmentMembershipUpsertWithWhereUniqueWithoutSubDepartmentInput | DepartmentMembershipUpsertWithWhereUniqueWithoutSubDepartmentInput[]
    createMany?: DepartmentMembershipCreateManySubDepartmentInputEnvelope
    set?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    disconnect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    delete?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    update?: DepartmentMembershipUpdateWithWhereUniqueWithoutSubDepartmentInput | DepartmentMembershipUpdateWithWhereUniqueWithoutSubDepartmentInput[]
    updateMany?: DepartmentMembershipUpdateManyWithWhereWithoutSubDepartmentInput | DepartmentMembershipUpdateManyWithWhereWithoutSubDepartmentInput[]
    deleteMany?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
  }

  export type PermissionDepartmentUpdateManyWithoutSubDepartmentNestedInput = {
    create?: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput> | PermissionDepartmentCreateWithoutSubDepartmentInput[] | PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput | PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput[]
    upsert?: PermissionDepartmentUpsertWithWhereUniqueWithoutSubDepartmentInput | PermissionDepartmentUpsertWithWhereUniqueWithoutSubDepartmentInput[]
    createMany?: PermissionDepartmentCreateManySubDepartmentInputEnvelope
    set?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    disconnect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    delete?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    update?: PermissionDepartmentUpdateWithWhereUniqueWithoutSubDepartmentInput | PermissionDepartmentUpdateWithWhereUniqueWithoutSubDepartmentInput[]
    updateMany?: PermissionDepartmentUpdateManyWithWhereWithoutSubDepartmentInput | PermissionDepartmentUpdateManyWithWhereWithoutSubDepartmentInput[]
    deleteMany?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
  }

  export type DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentNestedInput = {
    create?: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput> | DepartmentMembershipCreateWithoutSubDepartmentInput[] | DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput | DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput[]
    upsert?: DepartmentMembershipUpsertWithWhereUniqueWithoutSubDepartmentInput | DepartmentMembershipUpsertWithWhereUniqueWithoutSubDepartmentInput[]
    createMany?: DepartmentMembershipCreateManySubDepartmentInputEnvelope
    set?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    disconnect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    delete?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    connect?: DepartmentMembershipWhereUniqueInput | DepartmentMembershipWhereUniqueInput[]
    update?: DepartmentMembershipUpdateWithWhereUniqueWithoutSubDepartmentInput | DepartmentMembershipUpdateWithWhereUniqueWithoutSubDepartmentInput[]
    updateMany?: DepartmentMembershipUpdateManyWithWhereWithoutSubDepartmentInput | DepartmentMembershipUpdateManyWithWhereWithoutSubDepartmentInput[]
    deleteMany?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
  }

  export type PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentNestedInput = {
    create?: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput> | PermissionDepartmentCreateWithoutSubDepartmentInput[] | PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput | PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput[]
    upsert?: PermissionDepartmentUpsertWithWhereUniqueWithoutSubDepartmentInput | PermissionDepartmentUpsertWithWhereUniqueWithoutSubDepartmentInput[]
    createMany?: PermissionDepartmentCreateManySubDepartmentInputEnvelope
    set?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    disconnect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    delete?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    update?: PermissionDepartmentUpdateWithWhereUniqueWithoutSubDepartmentInput | PermissionDepartmentUpdateWithWhereUniqueWithoutSubDepartmentInput[]
    updateMany?: PermissionDepartmentUpdateManyWithWhereWithoutSubDepartmentInput | PermissionDepartmentUpdateManyWithWhereWithoutSubDepartmentInput[]
    deleteMany?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepartmentMembershipInput = {
    create?: XOR<UserCreateWithoutDepartmentMembershipInput, UserUncheckedCreateWithoutDepartmentMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentMembershipInput
    connect?: UserWhereUniqueInput
  }

  export type SubDepartmentCreateNestedOneWithoutMembersInput = {
    create?: XOR<SubDepartmentCreateWithoutMembersInput, SubDepartmentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMembersInput
    connect?: SubDepartmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepartmentMembershipNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentMembershipInput, UserUncheckedCreateWithoutDepartmentMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentMembershipInput
    upsert?: UserUpsertWithoutDepartmentMembershipInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepartmentMembershipInput, UserUpdateWithoutDepartmentMembershipInput>, UserUncheckedUpdateWithoutDepartmentMembershipInput>
  }

  export type SubDepartmentUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<SubDepartmentCreateWithoutMembersInput, SubDepartmentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutMembersInput
    upsert?: SubDepartmentUpsertWithoutMembersInput
    connect?: SubDepartmentWhereUniqueInput
    update?: XOR<XOR<SubDepartmentUpdateToOneWithWhereWithoutMembersInput, SubDepartmentUpdateWithoutMembersInput>, SubDepartmentUncheckedUpdateWithoutMembersInput>
  }

  export type UserPermissionCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput> | UserPermissionCreateWithoutProjectInput[] | UserPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutProjectInput | UserPermissionCreateOrConnectWithoutProjectInput[]
    createMany?: UserPermissionCreateManyProjectInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput> | UserPermissionCreateWithoutProjectInput[] | UserPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutProjectInput | UserPermissionCreateOrConnectWithoutProjectInput[]
    createMany?: UserPermissionCreateManyProjectInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserPermissionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput> | UserPermissionCreateWithoutProjectInput[] | UserPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutProjectInput | UserPermissionCreateOrConnectWithoutProjectInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutProjectInput | UserPermissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserPermissionCreateManyProjectInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutProjectInput | UserPermissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutProjectInput | UserPermissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput> | UserPermissionCreateWithoutProjectInput[] | UserPermissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutProjectInput | UserPermissionCreateOrConnectWithoutProjectInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutProjectInput | UserPermissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserPermissionCreateManyProjectInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutProjectInput | UserPermissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutProjectInput | UserPermissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type SubMenuCreateNestedManyWithoutMenuInput = {
    create?: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput> | SubMenuCreateWithoutMenuInput[] | SubMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuInput | SubMenuCreateOrConnectWithoutMenuInput[]
    createMany?: SubMenuCreateManyMenuInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput> | SubMenuCreateWithoutMenuInput[] | SubMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuInput | SubMenuCreateOrConnectWithoutMenuInput[]
    createMany?: SubMenuCreateManyMenuInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput> | SubMenuCreateWithoutMenuInput[] | SubMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuInput | SubMenuCreateOrConnectWithoutMenuInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMenuInput | SubMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SubMenuCreateManyMenuInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMenuInput | SubMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMenuInput | SubMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput> | SubMenuCreateWithoutMenuInput[] | SubMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuInput | SubMenuCreateOrConnectWithoutMenuInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMenuInput | SubMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SubMenuCreateManyMenuInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMenuInput | SubMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMenuInput | SubMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutSubMenusInput = {
    create?: XOR<MenuCreateWithoutSubMenusInput, MenuUncheckedCreateWithoutSubMenusInput>
    connectOrCreate?: MenuCreateOrConnectWithoutSubMenusInput
    connect?: MenuWhereUniqueInput
  }

  export type UserPermissionCreateNestedManyWithoutSubmenuInput = {
    create?: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput> | UserPermissionCreateWithoutSubmenuInput[] | UserPermissionUncheckedCreateWithoutSubmenuInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutSubmenuInput | UserPermissionCreateOrConnectWithoutSubmenuInput[]
    createMany?: UserPermissionCreateManySubmenuInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutSubmenuInput = {
    create?: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput> | UserPermissionCreateWithoutSubmenuInput[] | UserPermissionUncheckedCreateWithoutSubmenuInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutSubmenuInput | UserPermissionCreateOrConnectWithoutSubmenuInput[]
    createMany?: UserPermissionCreateManySubmenuInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type MenuUpdateOneRequiredWithoutSubMenusNestedInput = {
    create?: XOR<MenuCreateWithoutSubMenusInput, MenuUncheckedCreateWithoutSubMenusInput>
    connectOrCreate?: MenuCreateOrConnectWithoutSubMenusInput
    upsert?: MenuUpsertWithoutSubMenusInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutSubMenusInput, MenuUpdateWithoutSubMenusInput>, MenuUncheckedUpdateWithoutSubMenusInput>
  }

  export type UserPermissionUpdateManyWithoutSubmenuNestedInput = {
    create?: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput> | UserPermissionCreateWithoutSubmenuInput[] | UserPermissionUncheckedCreateWithoutSubmenuInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutSubmenuInput | UserPermissionCreateOrConnectWithoutSubmenuInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutSubmenuInput | UserPermissionUpsertWithWhereUniqueWithoutSubmenuInput[]
    createMany?: UserPermissionCreateManySubmenuInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutSubmenuInput | UserPermissionUpdateWithWhereUniqueWithoutSubmenuInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutSubmenuInput | UserPermissionUpdateManyWithWhereWithoutSubmenuInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutSubmenuNestedInput = {
    create?: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput> | UserPermissionCreateWithoutSubmenuInput[] | UserPermissionUncheckedCreateWithoutSubmenuInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutSubmenuInput | UserPermissionCreateOrConnectWithoutSubmenuInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutSubmenuInput | UserPermissionUpsertWithWhereUniqueWithoutSubmenuInput[]
    createMany?: UserPermissionCreateManySubmenuInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutSubmenuInput | UserPermissionUpdateWithWhereUniqueWithoutSubmenuInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutSubmenuInput | UserPermissionUpdateManyWithWhereWithoutSubmenuInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPermissionInput = {
    create?: XOR<UserCreateWithoutUserPermissionInput, UserUncheckedCreateWithoutUserPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionInput
    connect?: UserWhereUniqueInput
  }

  export type SubMenuCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<SubMenuCreateWithoutPermissionsInput, SubMenuUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: SubMenuCreateOrConnectWithoutPermissionsInput
    connect?: SubMenuWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUserPermissionInput = {
    create?: XOR<ProjectCreateWithoutUserPermissionInput, ProjectUncheckedCreateWithoutUserPermissionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserPermissionInput
    connect?: ProjectWhereUniqueInput
  }

  export type PermissionDepartmentCreateNestedManyWithoutUserPermissionInput = {
    create?: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput> | PermissionDepartmentCreateWithoutUserPermissionInput[] | PermissionDepartmentUncheckedCreateWithoutUserPermissionInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutUserPermissionInput | PermissionDepartmentCreateOrConnectWithoutUserPermissionInput[]
    createMany?: PermissionDepartmentCreateManyUserPermissionInputEnvelope
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
  }

  export type PermissionDepartmentUncheckedCreateNestedManyWithoutUserPermissionInput = {
    create?: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput> | PermissionDepartmentCreateWithoutUserPermissionInput[] | PermissionDepartmentUncheckedCreateWithoutUserPermissionInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutUserPermissionInput | PermissionDepartmentCreateOrConnectWithoutUserPermissionInput[]
    createMany?: PermissionDepartmentCreateManyUserPermissionInputEnvelope
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
  }

  export type EnumAccessScopeFieldUpdateOperationsInput = {
    set?: $Enums.AccessScope
  }

  export type UserUpdateOneRequiredWithoutUserPermissionNestedInput = {
    create?: XOR<UserCreateWithoutUserPermissionInput, UserUncheckedCreateWithoutUserPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionInput
    upsert?: UserUpsertWithoutUserPermissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPermissionInput, UserUpdateWithoutUserPermissionInput>, UserUncheckedUpdateWithoutUserPermissionInput>
  }

  export type SubMenuUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<SubMenuCreateWithoutPermissionsInput, SubMenuUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: SubMenuCreateOrConnectWithoutPermissionsInput
    upsert?: SubMenuUpsertWithoutPermissionsInput
    connect?: SubMenuWhereUniqueInput
    update?: XOR<XOR<SubMenuUpdateToOneWithWhereWithoutPermissionsInput, SubMenuUpdateWithoutPermissionsInput>, SubMenuUncheckedUpdateWithoutPermissionsInput>
  }

  export type ProjectUpdateOneWithoutUserPermissionNestedInput = {
    create?: XOR<ProjectCreateWithoutUserPermissionInput, ProjectUncheckedCreateWithoutUserPermissionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserPermissionInput
    upsert?: ProjectUpsertWithoutUserPermissionInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserPermissionInput, ProjectUpdateWithoutUserPermissionInput>, ProjectUncheckedUpdateWithoutUserPermissionInput>
  }

  export type PermissionDepartmentUpdateManyWithoutUserPermissionNestedInput = {
    create?: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput> | PermissionDepartmentCreateWithoutUserPermissionInput[] | PermissionDepartmentUncheckedCreateWithoutUserPermissionInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutUserPermissionInput | PermissionDepartmentCreateOrConnectWithoutUserPermissionInput[]
    upsert?: PermissionDepartmentUpsertWithWhereUniqueWithoutUserPermissionInput | PermissionDepartmentUpsertWithWhereUniqueWithoutUserPermissionInput[]
    createMany?: PermissionDepartmentCreateManyUserPermissionInputEnvelope
    set?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    disconnect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    delete?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    update?: PermissionDepartmentUpdateWithWhereUniqueWithoutUserPermissionInput | PermissionDepartmentUpdateWithWhereUniqueWithoutUserPermissionInput[]
    updateMany?: PermissionDepartmentUpdateManyWithWhereWithoutUserPermissionInput | PermissionDepartmentUpdateManyWithWhereWithoutUserPermissionInput[]
    deleteMany?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
  }

  export type PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionNestedInput = {
    create?: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput> | PermissionDepartmentCreateWithoutUserPermissionInput[] | PermissionDepartmentUncheckedCreateWithoutUserPermissionInput[]
    connectOrCreate?: PermissionDepartmentCreateOrConnectWithoutUserPermissionInput | PermissionDepartmentCreateOrConnectWithoutUserPermissionInput[]
    upsert?: PermissionDepartmentUpsertWithWhereUniqueWithoutUserPermissionInput | PermissionDepartmentUpsertWithWhereUniqueWithoutUserPermissionInput[]
    createMany?: PermissionDepartmentCreateManyUserPermissionInputEnvelope
    set?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    disconnect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    delete?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    connect?: PermissionDepartmentWhereUniqueInput | PermissionDepartmentWhereUniqueInput[]
    update?: PermissionDepartmentUpdateWithWhereUniqueWithoutUserPermissionInput | PermissionDepartmentUpdateWithWhereUniqueWithoutUserPermissionInput[]
    updateMany?: PermissionDepartmentUpdateManyWithWhereWithoutUserPermissionInput | PermissionDepartmentUpdateManyWithWhereWithoutUserPermissionInput[]
    deleteMany?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
  }

  export type UserPermissionCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<UserPermissionCreateWithoutDepartmentsInput, UserPermissionUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UserPermissionCreateOrConnectWithoutDepartmentsInput
    connect?: UserPermissionWhereUniqueInput
  }

  export type SubDepartmentCreateNestedOneWithoutPermissionDepartmentInput = {
    create?: XOR<SubDepartmentCreateWithoutPermissionDepartmentInput, SubDepartmentUncheckedCreateWithoutPermissionDepartmentInput>
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutPermissionDepartmentInput
    connect?: SubDepartmentWhereUniqueInput
  }

  export type UserPermissionUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<UserPermissionCreateWithoutDepartmentsInput, UserPermissionUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UserPermissionCreateOrConnectWithoutDepartmentsInput
    upsert?: UserPermissionUpsertWithoutDepartmentsInput
    connect?: UserPermissionWhereUniqueInput
    update?: XOR<XOR<UserPermissionUpdateToOneWithWhereWithoutDepartmentsInput, UserPermissionUpdateWithoutDepartmentsInput>, UserPermissionUncheckedUpdateWithoutDepartmentsInput>
  }

  export type SubDepartmentUpdateOneRequiredWithoutPermissionDepartmentNestedInput = {
    create?: XOR<SubDepartmentCreateWithoutPermissionDepartmentInput, SubDepartmentUncheckedCreateWithoutPermissionDepartmentInput>
    connectOrCreate?: SubDepartmentCreateOrConnectWithoutPermissionDepartmentInput
    upsert?: SubDepartmentUpsertWithoutPermissionDepartmentInput
    connect?: SubDepartmentWhereUniqueInput
    update?: XOR<XOR<SubDepartmentUpdateToOneWithWhereWithoutPermissionDepartmentInput, SubDepartmentUpdateWithoutPermissionDepartmentInput>, SubDepartmentUncheckedUpdateWithoutPermissionDepartmentInput>
  }

  export type ScbSlipVerificationCreateNestedManyWithoutScbPaymentsInput = {
    create?: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput> | ScbSlipVerificationCreateWithoutScbPaymentsInput[] | ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput | ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput[]
    createMany?: ScbSlipVerificationCreateManyScbPaymentsInputEnvelope
    connect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
  }

  export type ScbVoidCreateNestedManyWithoutScbPaymentsInput = {
    create?: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput> | ScbVoidCreateWithoutScbPaymentsInput[] | ScbVoidUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbVoidCreateOrConnectWithoutScbPaymentsInput | ScbVoidCreateOrConnectWithoutScbPaymentsInput[]
    createMany?: ScbVoidCreateManyScbPaymentsInputEnvelope
    connect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
  }

  export type ScbSlipVerificationUncheckedCreateNestedManyWithoutScbPaymentsInput = {
    create?: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput> | ScbSlipVerificationCreateWithoutScbPaymentsInput[] | ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput | ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput[]
    createMany?: ScbSlipVerificationCreateManyScbPaymentsInputEnvelope
    connect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
  }

  export type ScbVoidUncheckedCreateNestedManyWithoutScbPaymentsInput = {
    create?: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput> | ScbVoidCreateWithoutScbPaymentsInput[] | ScbVoidUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbVoidCreateOrConnectWithoutScbPaymentsInput | ScbVoidCreateOrConnectWithoutScbPaymentsInput[]
    createMany?: ScbVoidCreateManyScbPaymentsInputEnvelope
    connect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
  }

  export type ScbSlipVerificationUpdateManyWithoutScbPaymentsNestedInput = {
    create?: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput> | ScbSlipVerificationCreateWithoutScbPaymentsInput[] | ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput | ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput[]
    upsert?: ScbSlipVerificationUpsertWithWhereUniqueWithoutScbPaymentsInput | ScbSlipVerificationUpsertWithWhereUniqueWithoutScbPaymentsInput[]
    createMany?: ScbSlipVerificationCreateManyScbPaymentsInputEnvelope
    set?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    disconnect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    delete?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    connect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    update?: ScbSlipVerificationUpdateWithWhereUniqueWithoutScbPaymentsInput | ScbSlipVerificationUpdateWithWhereUniqueWithoutScbPaymentsInput[]
    updateMany?: ScbSlipVerificationUpdateManyWithWhereWithoutScbPaymentsInput | ScbSlipVerificationUpdateManyWithWhereWithoutScbPaymentsInput[]
    deleteMany?: ScbSlipVerificationScalarWhereInput | ScbSlipVerificationScalarWhereInput[]
  }

  export type ScbVoidUpdateManyWithoutScbPaymentsNestedInput = {
    create?: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput> | ScbVoidCreateWithoutScbPaymentsInput[] | ScbVoidUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbVoidCreateOrConnectWithoutScbPaymentsInput | ScbVoidCreateOrConnectWithoutScbPaymentsInput[]
    upsert?: ScbVoidUpsertWithWhereUniqueWithoutScbPaymentsInput | ScbVoidUpsertWithWhereUniqueWithoutScbPaymentsInput[]
    createMany?: ScbVoidCreateManyScbPaymentsInputEnvelope
    set?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    disconnect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    delete?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    connect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    update?: ScbVoidUpdateWithWhereUniqueWithoutScbPaymentsInput | ScbVoidUpdateWithWhereUniqueWithoutScbPaymentsInput[]
    updateMany?: ScbVoidUpdateManyWithWhereWithoutScbPaymentsInput | ScbVoidUpdateManyWithWhereWithoutScbPaymentsInput[]
    deleteMany?: ScbVoidScalarWhereInput | ScbVoidScalarWhereInput[]
  }

  export type ScbSlipVerificationUncheckedUpdateManyWithoutScbPaymentsNestedInput = {
    create?: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput> | ScbSlipVerificationCreateWithoutScbPaymentsInput[] | ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput | ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput[]
    upsert?: ScbSlipVerificationUpsertWithWhereUniqueWithoutScbPaymentsInput | ScbSlipVerificationUpsertWithWhereUniqueWithoutScbPaymentsInput[]
    createMany?: ScbSlipVerificationCreateManyScbPaymentsInputEnvelope
    set?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    disconnect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    delete?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    connect?: ScbSlipVerificationWhereUniqueInput | ScbSlipVerificationWhereUniqueInput[]
    update?: ScbSlipVerificationUpdateWithWhereUniqueWithoutScbPaymentsInput | ScbSlipVerificationUpdateWithWhereUniqueWithoutScbPaymentsInput[]
    updateMany?: ScbSlipVerificationUpdateManyWithWhereWithoutScbPaymentsInput | ScbSlipVerificationUpdateManyWithWhereWithoutScbPaymentsInput[]
    deleteMany?: ScbSlipVerificationScalarWhereInput | ScbSlipVerificationScalarWhereInput[]
  }

  export type ScbVoidUncheckedUpdateManyWithoutScbPaymentsNestedInput = {
    create?: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput> | ScbVoidCreateWithoutScbPaymentsInput[] | ScbVoidUncheckedCreateWithoutScbPaymentsInput[]
    connectOrCreate?: ScbVoidCreateOrConnectWithoutScbPaymentsInput | ScbVoidCreateOrConnectWithoutScbPaymentsInput[]
    upsert?: ScbVoidUpsertWithWhereUniqueWithoutScbPaymentsInput | ScbVoidUpsertWithWhereUniqueWithoutScbPaymentsInput[]
    createMany?: ScbVoidCreateManyScbPaymentsInputEnvelope
    set?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    disconnect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    delete?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    connect?: ScbVoidWhereUniqueInput | ScbVoidWhereUniqueInput[]
    update?: ScbVoidUpdateWithWhereUniqueWithoutScbPaymentsInput | ScbVoidUpdateWithWhereUniqueWithoutScbPaymentsInput[]
    updateMany?: ScbVoidUpdateManyWithWhereWithoutScbPaymentsInput | ScbVoidUpdateManyWithWhereWithoutScbPaymentsInput[]
    deleteMany?: ScbVoidScalarWhereInput | ScbVoidScalarWhereInput[]
  }

  export type ScbPaymentsCreateNestedOneWithoutScbSlipVerificationInput = {
    create?: XOR<ScbPaymentsCreateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedCreateWithoutScbSlipVerificationInput>
    connectOrCreate?: ScbPaymentsCreateOrConnectWithoutScbSlipVerificationInput
    connect?: ScbPaymentsWhereUniqueInput
  }

  export type ScbPaymentsUpdateOneRequiredWithoutScbSlipVerificationNestedInput = {
    create?: XOR<ScbPaymentsCreateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedCreateWithoutScbSlipVerificationInput>
    connectOrCreate?: ScbPaymentsCreateOrConnectWithoutScbSlipVerificationInput
    upsert?: ScbPaymentsUpsertWithoutScbSlipVerificationInput
    connect?: ScbPaymentsWhereUniqueInput
    update?: XOR<XOR<ScbPaymentsUpdateToOneWithWhereWithoutScbSlipVerificationInput, ScbPaymentsUpdateWithoutScbSlipVerificationInput>, ScbPaymentsUncheckedUpdateWithoutScbSlipVerificationInput>
  }

  export type ScbPaymentsCreateNestedOneWithoutScbVoidInput = {
    create?: XOR<ScbPaymentsCreateWithoutScbVoidInput, ScbPaymentsUncheckedCreateWithoutScbVoidInput>
    connectOrCreate?: ScbPaymentsCreateOrConnectWithoutScbVoidInput
    connect?: ScbPaymentsWhereUniqueInput
  }

  export type ScbPaymentsUpdateOneRequiredWithoutScbVoidNestedInput = {
    create?: XOR<ScbPaymentsCreateWithoutScbVoidInput, ScbPaymentsUncheckedCreateWithoutScbVoidInput>
    connectOrCreate?: ScbPaymentsCreateOrConnectWithoutScbVoidInput
    upsert?: ScbPaymentsUpsertWithoutScbVoidInput
    connect?: ScbPaymentsWhereUniqueInput
    update?: XOR<XOR<ScbPaymentsUpdateToOneWithWhereWithoutScbVoidInput, ScbPaymentsUpdateWithoutScbVoidInput>, ScbPaymentsUncheckedUpdateWithoutScbVoidInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAccessScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessScope | EnumAccessScopeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessScopeFilter<$PrismaModel> | $Enums.AccessScope
  }

  export type NestedEnumAccessScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessScope | EnumAccessScopeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessScope[] | ListEnumAccessScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessScopeWithAggregatesFilter<$PrismaModel> | $Enums.AccessScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessScopeFilter<$PrismaModel>
    _max?: NestedEnumAccessScopeFilter<$PrismaModel>
  }

  export type JobPositionCreateWithoutUserInput = {
    jobpositionId?: string
    name: string
    passposition: string
    createAt: Date | string
    updateAt: Date | string
  }

  export type JobPositionUncheckedCreateWithoutUserInput = {
    jobpositionId?: string
    name: string
    passposition: string
    createAt: Date | string
    updateAt: Date | string
  }

  export type JobPositionCreateOrConnectWithoutUserInput = {
    where: JobPositionWhereUniqueInput
    create: XOR<JobPositionCreateWithoutUserInput, JobPositionUncheckedCreateWithoutUserInput>
  }

  export type DepartmentMembershipCreateWithoutUserInput = {
    departmentMembershipId?: string
    assignedAt?: Date | string
    subDepartment: SubDepartmentCreateNestedOneWithoutMembersInput
  }

  export type DepartmentMembershipUncheckedCreateWithoutUserInput = {
    departmentMembershipId?: string
    subDepartmentId: string
    assignedAt?: Date | string
  }

  export type DepartmentMembershipCreateOrConnectWithoutUserInput = {
    where: DepartmentMembershipWhereUniqueInput
    create: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput>
  }

  export type DepartmentMembershipCreateManyUserInputEnvelope = {
    data: DepartmentMembershipCreateManyUserInput | DepartmentMembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionCreateWithoutUserInput = {
    userPermissionId?: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    submenu: SubMenuCreateNestedOneWithoutPermissionsInput
    project?: ProjectCreateNestedOneWithoutUserPermissionInput
    departments?: PermissionDepartmentCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionUncheckedCreateWithoutUserInput = {
    userPermissionId?: string
    submenuId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: PermissionDepartmentUncheckedCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionCreateOrConnectWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionCreateManyUserInputEnvelope = {
    data: UserPermissionCreateManyUserInput | UserPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobPositionUpsertWithoutUserInput = {
    update: XOR<JobPositionUpdateWithoutUserInput, JobPositionUncheckedUpdateWithoutUserInput>
    create: XOR<JobPositionCreateWithoutUserInput, JobPositionUncheckedCreateWithoutUserInput>
    where?: JobPositionWhereInput
  }

  export type JobPositionUpdateToOneWithWhereWithoutUserInput = {
    where?: JobPositionWhereInput
    data: XOR<JobPositionUpdateWithoutUserInput, JobPositionUncheckedUpdateWithoutUserInput>
  }

  export type JobPositionUpdateWithoutUserInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPositionUncheckedUpdateWithoutUserInput = {
    jobpositionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passposition?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: DepartmentMembershipWhereUniqueInput
    update: XOR<DepartmentMembershipUpdateWithoutUserInput, DepartmentMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<DepartmentMembershipCreateWithoutUserInput, DepartmentMembershipUncheckedCreateWithoutUserInput>
  }

  export type DepartmentMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: DepartmentMembershipWhereUniqueInput
    data: XOR<DepartmentMembershipUpdateWithoutUserInput, DepartmentMembershipUncheckedUpdateWithoutUserInput>
  }

  export type DepartmentMembershipUpdateManyWithWhereWithoutUserInput = {
    where: DepartmentMembershipScalarWhereInput
    data: XOR<DepartmentMembershipUpdateManyMutationInput, DepartmentMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type DepartmentMembershipScalarWhereInput = {
    AND?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
    OR?: DepartmentMembershipScalarWhereInput[]
    NOT?: DepartmentMembershipScalarWhereInput | DepartmentMembershipScalarWhereInput[]
    departmentMembershipId?: UuidFilter<"DepartmentMembership"> | string
    userId?: UuidFilter<"DepartmentMembership"> | string
    subDepartmentId?: UuidFilter<"DepartmentMembership"> | string
    assignedAt?: DateTimeFilter<"DepartmentMembership"> | Date | string
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPermissionScalarWhereInput = {
    AND?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    OR?: UserPermissionScalarWhereInput[]
    NOT?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    userPermissionId?: UuidFilter<"UserPermission"> | string
    userId?: UuidFilter<"UserPermission"> | string
    submenuId?: UuidFilter<"UserPermission"> | string
    projectId?: UuidNullableFilter<"UserPermission"> | string | null
    view?: BoolFilter<"UserPermission"> | boolean
    create?: BoolFilter<"UserPermission"> | boolean
    edit?: BoolFilter<"UserPermission"> | boolean
    delete?: BoolFilter<"UserPermission"> | boolean
    accessScope?: EnumAccessScopeFilter<"UserPermission"> | $Enums.AccessScope
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
  }

  export type UserCreateWithoutJobpositionInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
    DepartmentMembership?: DepartmentMembershipCreateNestedManyWithoutUserInput
    UserPermission?: UserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobpositionInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedCreateNestedManyWithoutUserInput
    UserPermission?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobpositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput>
  }

  export type UserCreateManyJobpositionInputEnvelope = {
    data: UserCreateManyJobpositionInput | UserCreateManyJobpositionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutJobpositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJobpositionInput, UserUncheckedUpdateWithoutJobpositionInput>
    create: XOR<UserCreateWithoutJobpositionInput, UserUncheckedCreateWithoutJobpositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJobpositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJobpositionInput, UserUncheckedUpdateWithoutJobpositionInput>
  }

  export type UserUpdateManyWithWhereWithoutJobpositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJobpositionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: UuidFilter<"User"> | string
    cmuitaccount?: StringFilter<"User"> | string
    cmuitaccount_name?: StringFilter<"User"> | string
    firstname_EN?: StringFilter<"User"> | string
    firstname_TH?: StringFilter<"User"> | string
    itaccounttype_EN?: StringFilter<"User"> | string
    itaccounttype_TH?: StringFilter<"User"> | string
    itaccounttype_id?: StringFilter<"User"> | string
    lastname_EN?: StringFilter<"User"> | string
    lastname_TH?: StringFilter<"User"> | string
    organization_code?: StringFilter<"User"> | string
    organization_name_EN?: StringFilter<"User"> | string
    organization_name_TH?: StringFilter<"User"> | string
    organization_vet?: StringNullableFilter<"User"> | string | null
    organization_vet_id?: StringNullableFilter<"User"> | string | null
    prename_EN?: StringFilter<"User"> | string
    prename_TH?: StringFilter<"User"> | string
    prename_id?: StringFilter<"User"> | string
    student_id?: StringNullableFilter<"User"> | string | null
    status_user?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    jobpositionId?: UuidNullableFilter<"User"> | string | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SubDepartmentCreateWithoutMainDepartmentInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DepartmentMembershipCreateNestedManyWithoutSubDepartmentInput
    PermissionDepartment?: PermissionDepartmentCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentUncheckedCreateWithoutMainDepartmentInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DepartmentMembershipUncheckedCreateNestedManyWithoutSubDepartmentInput
    PermissionDepartment?: PermissionDepartmentUncheckedCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentCreateOrConnectWithoutMainDepartmentInput = {
    where: SubDepartmentWhereUniqueInput
    create: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput>
  }

  export type SubDepartmentCreateManyMainDepartmentInputEnvelope = {
    data: SubDepartmentCreateManyMainDepartmentInput | SubDepartmentCreateManyMainDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SubDepartmentUpsertWithWhereUniqueWithoutMainDepartmentInput = {
    where: SubDepartmentWhereUniqueInput
    update: XOR<SubDepartmentUpdateWithoutMainDepartmentInput, SubDepartmentUncheckedUpdateWithoutMainDepartmentInput>
    create: XOR<SubDepartmentCreateWithoutMainDepartmentInput, SubDepartmentUncheckedCreateWithoutMainDepartmentInput>
  }

  export type SubDepartmentUpdateWithWhereUniqueWithoutMainDepartmentInput = {
    where: SubDepartmentWhereUniqueInput
    data: XOR<SubDepartmentUpdateWithoutMainDepartmentInput, SubDepartmentUncheckedUpdateWithoutMainDepartmentInput>
  }

  export type SubDepartmentUpdateManyWithWhereWithoutMainDepartmentInput = {
    where: SubDepartmentScalarWhereInput
    data: XOR<SubDepartmentUpdateManyMutationInput, SubDepartmentUncheckedUpdateManyWithoutMainDepartmentInput>
  }

  export type SubDepartmentScalarWhereInput = {
    AND?: SubDepartmentScalarWhereInput | SubDepartmentScalarWhereInput[]
    OR?: SubDepartmentScalarWhereInput[]
    NOT?: SubDepartmentScalarWhereInput | SubDepartmentScalarWhereInput[]
    subDepartmentId?: UuidFilter<"SubDepartment"> | string
    name_EN?: StringNullableFilter<"SubDepartment"> | string | null
    name_TH?: StringFilter<"SubDepartment"> | string
    mainDepartmentId?: UuidFilter<"SubDepartment"> | string
    createdAt?: DateTimeFilter<"SubDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"SubDepartment"> | Date | string
  }

  export type MainDepartmentCreateWithoutSubDepartmentsInput = {
    mainDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainDepartmentUncheckedCreateWithoutSubDepartmentsInput = {
    mainDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainDepartmentCreateOrConnectWithoutSubDepartmentsInput = {
    where: MainDepartmentWhereUniqueInput
    create: XOR<MainDepartmentCreateWithoutSubDepartmentsInput, MainDepartmentUncheckedCreateWithoutSubDepartmentsInput>
  }

  export type DepartmentMembershipCreateWithoutSubDepartmentInput = {
    departmentMembershipId?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutDepartmentMembershipInput
  }

  export type DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput = {
    departmentMembershipId?: string
    userId: string
    assignedAt?: Date | string
  }

  export type DepartmentMembershipCreateOrConnectWithoutSubDepartmentInput = {
    where: DepartmentMembershipWhereUniqueInput
    create: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput>
  }

  export type DepartmentMembershipCreateManySubDepartmentInputEnvelope = {
    data: DepartmentMembershipCreateManySubDepartmentInput | DepartmentMembershipCreateManySubDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type PermissionDepartmentCreateWithoutSubDepartmentInput = {
    permissionDepartmentId?: string
    userPermission: UserPermissionCreateNestedOneWithoutDepartmentsInput
  }

  export type PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput = {
    permissionDepartmentId?: string
    userPermissionId: string
  }

  export type PermissionDepartmentCreateOrConnectWithoutSubDepartmentInput = {
    where: PermissionDepartmentWhereUniqueInput
    create: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput>
  }

  export type PermissionDepartmentCreateManySubDepartmentInputEnvelope = {
    data: PermissionDepartmentCreateManySubDepartmentInput | PermissionDepartmentCreateManySubDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type MainDepartmentUpsertWithoutSubDepartmentsInput = {
    update: XOR<MainDepartmentUpdateWithoutSubDepartmentsInput, MainDepartmentUncheckedUpdateWithoutSubDepartmentsInput>
    create: XOR<MainDepartmentCreateWithoutSubDepartmentsInput, MainDepartmentUncheckedCreateWithoutSubDepartmentsInput>
    where?: MainDepartmentWhereInput
  }

  export type MainDepartmentUpdateToOneWithWhereWithoutSubDepartmentsInput = {
    where?: MainDepartmentWhereInput
    data: XOR<MainDepartmentUpdateWithoutSubDepartmentsInput, MainDepartmentUncheckedUpdateWithoutSubDepartmentsInput>
  }

  export type MainDepartmentUpdateWithoutSubDepartmentsInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainDepartmentUncheckedUpdateWithoutSubDepartmentsInput = {
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipUpsertWithWhereUniqueWithoutSubDepartmentInput = {
    where: DepartmentMembershipWhereUniqueInput
    update: XOR<DepartmentMembershipUpdateWithoutSubDepartmentInput, DepartmentMembershipUncheckedUpdateWithoutSubDepartmentInput>
    create: XOR<DepartmentMembershipCreateWithoutSubDepartmentInput, DepartmentMembershipUncheckedCreateWithoutSubDepartmentInput>
  }

  export type DepartmentMembershipUpdateWithWhereUniqueWithoutSubDepartmentInput = {
    where: DepartmentMembershipWhereUniqueInput
    data: XOR<DepartmentMembershipUpdateWithoutSubDepartmentInput, DepartmentMembershipUncheckedUpdateWithoutSubDepartmentInput>
  }

  export type DepartmentMembershipUpdateManyWithWhereWithoutSubDepartmentInput = {
    where: DepartmentMembershipScalarWhereInput
    data: XOR<DepartmentMembershipUpdateManyMutationInput, DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentInput>
  }

  export type PermissionDepartmentUpsertWithWhereUniqueWithoutSubDepartmentInput = {
    where: PermissionDepartmentWhereUniqueInput
    update: XOR<PermissionDepartmentUpdateWithoutSubDepartmentInput, PermissionDepartmentUncheckedUpdateWithoutSubDepartmentInput>
    create: XOR<PermissionDepartmentCreateWithoutSubDepartmentInput, PermissionDepartmentUncheckedCreateWithoutSubDepartmentInput>
  }

  export type PermissionDepartmentUpdateWithWhereUniqueWithoutSubDepartmentInput = {
    where: PermissionDepartmentWhereUniqueInput
    data: XOR<PermissionDepartmentUpdateWithoutSubDepartmentInput, PermissionDepartmentUncheckedUpdateWithoutSubDepartmentInput>
  }

  export type PermissionDepartmentUpdateManyWithWhereWithoutSubDepartmentInput = {
    where: PermissionDepartmentScalarWhereInput
    data: XOR<PermissionDepartmentUpdateManyMutationInput, PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentInput>
  }

  export type PermissionDepartmentScalarWhereInput = {
    AND?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
    OR?: PermissionDepartmentScalarWhereInput[]
    NOT?: PermissionDepartmentScalarWhereInput | PermissionDepartmentScalarWhereInput[]
    permissionDepartmentId?: UuidFilter<"PermissionDepartment"> | string
    userPermissionId?: UuidFilter<"PermissionDepartment"> | string
    subDepartmentId?: UuidFilter<"PermissionDepartment"> | string
  }

  export type UserCreateWithoutDepartmentMembershipInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
    jobposition?: JobPositionCreateNestedOneWithoutUserInput
    UserPermission?: UserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentMembershipInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    jobpositionId?: string | null
    createAt: Date | string
    updateAt: Date | string
    UserPermission?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentMembershipInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentMembershipInput, UserUncheckedCreateWithoutDepartmentMembershipInput>
  }

  export type SubDepartmentCreateWithoutMembersInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainDepartment: MainDepartmentCreateNestedOneWithoutSubDepartmentsInput
    PermissionDepartment?: PermissionDepartmentCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentUncheckedCreateWithoutMembersInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    mainDepartmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PermissionDepartment?: PermissionDepartmentUncheckedCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentCreateOrConnectWithoutMembersInput = {
    where: SubDepartmentWhereUniqueInput
    create: XOR<SubDepartmentCreateWithoutMembersInput, SubDepartmentUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutDepartmentMembershipInput = {
    update: XOR<UserUpdateWithoutDepartmentMembershipInput, UserUncheckedUpdateWithoutDepartmentMembershipInput>
    create: XOR<UserCreateWithoutDepartmentMembershipInput, UserUncheckedCreateWithoutDepartmentMembershipInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepartmentMembershipInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepartmentMembershipInput, UserUncheckedUpdateWithoutDepartmentMembershipInput>
  }

  export type UserUpdateWithoutDepartmentMembershipInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobposition?: JobPositionUpdateOneWithoutUserNestedInput
    UserPermission?: UserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentMembershipInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    jobpositionId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPermission?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubDepartmentUpsertWithoutMembersInput = {
    update: XOR<SubDepartmentUpdateWithoutMembersInput, SubDepartmentUncheckedUpdateWithoutMembersInput>
    create: XOR<SubDepartmentCreateWithoutMembersInput, SubDepartmentUncheckedCreateWithoutMembersInput>
    where?: SubDepartmentWhereInput
  }

  export type SubDepartmentUpdateToOneWithWhereWithoutMembersInput = {
    where?: SubDepartmentWhereInput
    data: XOR<SubDepartmentUpdateWithoutMembersInput, SubDepartmentUncheckedUpdateWithoutMembersInput>
  }

  export type SubDepartmentUpdateWithoutMembersInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainDepartment?: MainDepartmentUpdateOneRequiredWithoutSubDepartmentsNestedInput
    PermissionDepartment?: PermissionDepartmentUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentUncheckedUpdateWithoutMembersInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PermissionDepartment?: PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentNestedInput
  }

  export type UserPermissionCreateWithoutProjectInput = {
    userPermissionId?: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPermissionInput
    submenu: SubMenuCreateNestedOneWithoutPermissionsInput
    departments?: PermissionDepartmentCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionUncheckedCreateWithoutProjectInput = {
    userPermissionId?: string
    userId: string
    submenuId: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: PermissionDepartmentUncheckedCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionCreateOrConnectWithoutProjectInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput>
  }

  export type UserPermissionCreateManyProjectInputEnvelope = {
    data: UserPermissionCreateManyProjectInput | UserPermissionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutProjectInput, UserPermissionUncheckedUpdateWithoutProjectInput>
    create: XOR<UserPermissionCreateWithoutProjectInput, UserPermissionUncheckedCreateWithoutProjectInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutProjectInput, UserPermissionUncheckedUpdateWithoutProjectInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutProjectInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutProjectInput>
  }

  export type SubMenuCreateWithoutMenuInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserPermissionCreateNestedManyWithoutSubmenuInput
  }

  export type SubMenuUncheckedCreateWithoutMenuInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutSubmenuInput
  }

  export type SubMenuCreateOrConnectWithoutMenuInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput>
  }

  export type SubMenuCreateManyMenuInputEnvelope = {
    data: SubMenuCreateManyMenuInput | SubMenuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type SubMenuUpsertWithWhereUniqueWithoutMenuInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutMenuInput, SubMenuUncheckedUpdateWithoutMenuInput>
    create: XOR<SubMenuCreateWithoutMenuInput, SubMenuUncheckedCreateWithoutMenuInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutMenuInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutMenuInput, SubMenuUncheckedUpdateWithoutMenuInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutMenuInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type SubMenuScalarWhereInput = {
    AND?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    OR?: SubMenuScalarWhereInput[]
    NOT?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    submenuId?: UuidFilter<"SubMenu"> | string
    name?: StringFilter<"SubMenu"> | string
    icon?: StringFilter<"SubMenu"> | string
    part?: StringNullableFilter<"SubMenu"> | string | null
    position?: IntNullableFilter<"SubMenu"> | number | null
    menuId?: UuidFilter<"SubMenu"> | string
    isProjectBased?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
  }

  export type MenuCreateWithoutSubMenusInput = {
    menuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutSubMenusInput = {
    menuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutSubMenusInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutSubMenusInput, MenuUncheckedCreateWithoutSubMenusInput>
  }

  export type UserPermissionCreateWithoutSubmenuInput = {
    userPermissionId?: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPermissionInput
    project?: ProjectCreateNestedOneWithoutUserPermissionInput
    departments?: PermissionDepartmentCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionUncheckedCreateWithoutSubmenuInput = {
    userPermissionId?: string
    userId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: PermissionDepartmentUncheckedCreateNestedManyWithoutUserPermissionInput
  }

  export type UserPermissionCreateOrConnectWithoutSubmenuInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput>
  }

  export type UserPermissionCreateManySubmenuInputEnvelope = {
    data: UserPermissionCreateManySubmenuInput | UserPermissionCreateManySubmenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithoutSubMenusInput = {
    update: XOR<MenuUpdateWithoutSubMenusInput, MenuUncheckedUpdateWithoutSubMenusInput>
    create: XOR<MenuCreateWithoutSubMenusInput, MenuUncheckedCreateWithoutSubMenusInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutSubMenusInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutSubMenusInput, MenuUncheckedUpdateWithoutSubMenusInput>
  }

  export type MenuUpdateWithoutSubMenusInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutSubMenusInput = {
    menuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutSubmenuInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutSubmenuInput, UserPermissionUncheckedUpdateWithoutSubmenuInput>
    create: XOR<UserPermissionCreateWithoutSubmenuInput, UserPermissionUncheckedCreateWithoutSubmenuInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutSubmenuInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutSubmenuInput, UserPermissionUncheckedUpdateWithoutSubmenuInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutSubmenuInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutSubmenuInput>
  }

  export type UserCreateWithoutUserPermissionInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
    jobposition?: JobPositionCreateNestedOneWithoutUserInput
    DepartmentMembership?: DepartmentMembershipCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPermissionInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    jobpositionId?: string | null
    createAt: Date | string
    updateAt: Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPermissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPermissionInput, UserUncheckedCreateWithoutUserPermissionInput>
  }

  export type SubMenuCreateWithoutPermissionsInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    menu: MenuCreateNestedOneWithoutSubMenusInput
  }

  export type SubMenuUncheckedCreateWithoutPermissionsInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    menuId: string
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuCreateOrConnectWithoutPermissionsInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutPermissionsInput, SubMenuUncheckedCreateWithoutPermissionsInput>
  }

  export type ProjectCreateWithoutUserPermissionInput = {
    projectId?: string
    name: string
    description?: string | null
    database: string
    part?: string | null
    position?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutUserPermissionInput = {
    projectId?: string
    name: string
    description?: string | null
    database: string
    part?: string | null
    position?: number | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutUserPermissionInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserPermissionInput, ProjectUncheckedCreateWithoutUserPermissionInput>
  }

  export type PermissionDepartmentCreateWithoutUserPermissionInput = {
    permissionDepartmentId?: string
    subDepartment: SubDepartmentCreateNestedOneWithoutPermissionDepartmentInput
  }

  export type PermissionDepartmentUncheckedCreateWithoutUserPermissionInput = {
    permissionDepartmentId?: string
    subDepartmentId: string
  }

  export type PermissionDepartmentCreateOrConnectWithoutUserPermissionInput = {
    where: PermissionDepartmentWhereUniqueInput
    create: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput>
  }

  export type PermissionDepartmentCreateManyUserPermissionInputEnvelope = {
    data: PermissionDepartmentCreateManyUserPermissionInput | PermissionDepartmentCreateManyUserPermissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserPermissionInput = {
    update: XOR<UserUpdateWithoutUserPermissionInput, UserUncheckedUpdateWithoutUserPermissionInput>
    create: XOR<UserCreateWithoutUserPermissionInput, UserUncheckedCreateWithoutUserPermissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPermissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPermissionInput, UserUncheckedUpdateWithoutUserPermissionInput>
  }

  export type UserUpdateWithoutUserPermissionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobposition?: JobPositionUpdateOneWithoutUserNestedInput
    DepartmentMembership?: DepartmentMembershipUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPermissionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    jobpositionId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubMenuUpsertWithoutPermissionsInput = {
    update: XOR<SubMenuUpdateWithoutPermissionsInput, SubMenuUncheckedUpdateWithoutPermissionsInput>
    create: XOR<SubMenuCreateWithoutPermissionsInput, SubMenuUncheckedCreateWithoutPermissionsInput>
    where?: SubMenuWhereInput
  }

  export type SubMenuUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: SubMenuWhereInput
    data: XOR<SubMenuUpdateWithoutPermissionsInput, SubMenuUncheckedUpdateWithoutPermissionsInput>
  }

  export type SubMenuUpdateWithoutPermissionsInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutSubMenusNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutPermissionsInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: StringFieldUpdateOperationsInput | string
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutUserPermissionInput = {
    update: XOR<ProjectUpdateWithoutUserPermissionInput, ProjectUncheckedUpdateWithoutUserPermissionInput>
    create: XOR<ProjectCreateWithoutUserPermissionInput, ProjectUncheckedCreateWithoutUserPermissionInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserPermissionInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserPermissionInput, ProjectUncheckedUpdateWithoutUserPermissionInput>
  }

  export type ProjectUpdateWithoutUserPermissionInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutUserPermissionInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    database?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionDepartmentUpsertWithWhereUniqueWithoutUserPermissionInput = {
    where: PermissionDepartmentWhereUniqueInput
    update: XOR<PermissionDepartmentUpdateWithoutUserPermissionInput, PermissionDepartmentUncheckedUpdateWithoutUserPermissionInput>
    create: XOR<PermissionDepartmentCreateWithoutUserPermissionInput, PermissionDepartmentUncheckedCreateWithoutUserPermissionInput>
  }

  export type PermissionDepartmentUpdateWithWhereUniqueWithoutUserPermissionInput = {
    where: PermissionDepartmentWhereUniqueInput
    data: XOR<PermissionDepartmentUpdateWithoutUserPermissionInput, PermissionDepartmentUncheckedUpdateWithoutUserPermissionInput>
  }

  export type PermissionDepartmentUpdateManyWithWhereWithoutUserPermissionInput = {
    where: PermissionDepartmentScalarWhereInput
    data: XOR<PermissionDepartmentUpdateManyMutationInput, PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionInput>
  }

  export type UserPermissionCreateWithoutDepartmentsInput = {
    userPermissionId?: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPermissionInput
    submenu: SubMenuCreateNestedOneWithoutPermissionsInput
    project?: ProjectCreateNestedOneWithoutUserPermissionInput
  }

  export type UserPermissionUncheckedCreateWithoutDepartmentsInput = {
    userPermissionId?: string
    userId: string
    submenuId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateOrConnectWithoutDepartmentsInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutDepartmentsInput, UserPermissionUncheckedCreateWithoutDepartmentsInput>
  }

  export type SubDepartmentCreateWithoutPermissionDepartmentInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainDepartment: MainDepartmentCreateNestedOneWithoutSubDepartmentsInput
    members?: DepartmentMembershipCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentUncheckedCreateWithoutPermissionDepartmentInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    mainDepartmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: DepartmentMembershipUncheckedCreateNestedManyWithoutSubDepartmentInput
  }

  export type SubDepartmentCreateOrConnectWithoutPermissionDepartmentInput = {
    where: SubDepartmentWhereUniqueInput
    create: XOR<SubDepartmentCreateWithoutPermissionDepartmentInput, SubDepartmentUncheckedCreateWithoutPermissionDepartmentInput>
  }

  export type UserPermissionUpsertWithoutDepartmentsInput = {
    update: XOR<UserPermissionUpdateWithoutDepartmentsInput, UserPermissionUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<UserPermissionCreateWithoutDepartmentsInput, UserPermissionUncheckedCreateWithoutDepartmentsInput>
    where?: UserPermissionWhereInput
  }

  export type UserPermissionUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: UserPermissionWhereInput
    data: XOR<UserPermissionUpdateWithoutDepartmentsInput, UserPermissionUncheckedUpdateWithoutDepartmentsInput>
  }

  export type UserPermissionUpdateWithoutDepartmentsInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPermissionNestedInput
    submenu?: SubMenuUpdateOneRequiredWithoutPermissionsNestedInput
    project?: ProjectUpdateOneWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutDepartmentsInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDepartmentUpsertWithoutPermissionDepartmentInput = {
    update: XOR<SubDepartmentUpdateWithoutPermissionDepartmentInput, SubDepartmentUncheckedUpdateWithoutPermissionDepartmentInput>
    create: XOR<SubDepartmentCreateWithoutPermissionDepartmentInput, SubDepartmentUncheckedCreateWithoutPermissionDepartmentInput>
    where?: SubDepartmentWhereInput
  }

  export type SubDepartmentUpdateToOneWithWhereWithoutPermissionDepartmentInput = {
    where?: SubDepartmentWhereInput
    data: XOR<SubDepartmentUpdateWithoutPermissionDepartmentInput, SubDepartmentUncheckedUpdateWithoutPermissionDepartmentInput>
  }

  export type SubDepartmentUpdateWithoutPermissionDepartmentInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainDepartment?: MainDepartmentUpdateOneRequiredWithoutSubDepartmentsNestedInput
    members?: DepartmentMembershipUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentUncheckedUpdateWithoutPermissionDepartmentInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    mainDepartmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentNestedInput
  }

  export type ScbSlipVerificationCreateWithoutScbPaymentsInput = {
    scbVerificationId?: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
  }

  export type ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput = {
    scbVerificationId?: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
  }

  export type ScbSlipVerificationCreateOrConnectWithoutScbPaymentsInput = {
    where: ScbSlipVerificationWhereUniqueInput
    create: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput>
  }

  export type ScbSlipVerificationCreateManyScbPaymentsInputEnvelope = {
    data: ScbSlipVerificationCreateManyScbPaymentsInput | ScbSlipVerificationCreateManyScbPaymentsInput[]
    skipDuplicates?: boolean
  }

  export type ScbVoidCreateWithoutScbPaymentsInput = {
    scbVoidId?: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
  }

  export type ScbVoidUncheckedCreateWithoutScbPaymentsInput = {
    scbVoidId?: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
  }

  export type ScbVoidCreateOrConnectWithoutScbPaymentsInput = {
    where: ScbVoidWhereUniqueInput
    create: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput>
  }

  export type ScbVoidCreateManyScbPaymentsInputEnvelope = {
    data: ScbVoidCreateManyScbPaymentsInput | ScbVoidCreateManyScbPaymentsInput[]
    skipDuplicates?: boolean
  }

  export type ScbSlipVerificationUpsertWithWhereUniqueWithoutScbPaymentsInput = {
    where: ScbSlipVerificationWhereUniqueInput
    update: XOR<ScbSlipVerificationUpdateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedUpdateWithoutScbPaymentsInput>
    create: XOR<ScbSlipVerificationCreateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedCreateWithoutScbPaymentsInput>
  }

  export type ScbSlipVerificationUpdateWithWhereUniqueWithoutScbPaymentsInput = {
    where: ScbSlipVerificationWhereUniqueInput
    data: XOR<ScbSlipVerificationUpdateWithoutScbPaymentsInput, ScbSlipVerificationUncheckedUpdateWithoutScbPaymentsInput>
  }

  export type ScbSlipVerificationUpdateManyWithWhereWithoutScbPaymentsInput = {
    where: ScbSlipVerificationScalarWhereInput
    data: XOR<ScbSlipVerificationUpdateManyMutationInput, ScbSlipVerificationUncheckedUpdateManyWithoutScbPaymentsInput>
  }

  export type ScbSlipVerificationScalarWhereInput = {
    AND?: ScbSlipVerificationScalarWhereInput | ScbSlipVerificationScalarWhereInput[]
    OR?: ScbSlipVerificationScalarWhereInput[]
    NOT?: ScbSlipVerificationScalarWhereInput | ScbSlipVerificationScalarWhereInput[]
    scbVerificationId?: UuidFilter<"ScbSlipVerification"> | string
    scbId?: UuidFilter<"ScbSlipVerification"> | string
    transTime?: StringFilter<"ScbSlipVerification"> | string
    transRef?: StringFilter<"ScbSlipVerification"> | string
    displayName?: StringFilter<"ScbSlipVerification"> | string
    bankType?: StringFilter<"ScbSlipVerification"> | string
    bankName?: StringFilter<"ScbSlipVerification"> | string
    transDate?: StringFilter<"ScbSlipVerification"> | string
    createdAt?: DateTimeFilter<"ScbSlipVerification"> | Date | string
  }

  export type ScbVoidUpsertWithWhereUniqueWithoutScbPaymentsInput = {
    where: ScbVoidWhereUniqueInput
    update: XOR<ScbVoidUpdateWithoutScbPaymentsInput, ScbVoidUncheckedUpdateWithoutScbPaymentsInput>
    create: XOR<ScbVoidCreateWithoutScbPaymentsInput, ScbVoidUncheckedCreateWithoutScbPaymentsInput>
  }

  export type ScbVoidUpdateWithWhereUniqueWithoutScbPaymentsInput = {
    where: ScbVoidWhereUniqueInput
    data: XOR<ScbVoidUpdateWithoutScbPaymentsInput, ScbVoidUncheckedUpdateWithoutScbPaymentsInput>
  }

  export type ScbVoidUpdateManyWithWhereWithoutScbPaymentsInput = {
    where: ScbVoidScalarWhereInput
    data: XOR<ScbVoidUpdateManyMutationInput, ScbVoidUncheckedUpdateManyWithoutScbPaymentsInput>
  }

  export type ScbVoidScalarWhereInput = {
    AND?: ScbVoidScalarWhereInput | ScbVoidScalarWhereInput[]
    OR?: ScbVoidScalarWhereInput[]
    NOT?: ScbVoidScalarWhereInput | ScbVoidScalarWhereInput[]
    scbVoidId?: UuidFilter<"ScbVoid"> | string
    scbId?: UuidFilter<"ScbVoid"> | string
    responseStatus?: StringFilter<"ScbVoid"> | string
    responseCode?: StringFilter<"ScbVoid"> | string
    responseCodeDescription?: StringFilter<"ScbVoid"> | string
    extStatusDesc?: StringFilter<"ScbVoid"> | string
    createdAt?: DateTimeFilter<"ScbVoid"> | Date | string
  }

  export type ScbPaymentsCreateWithoutScbSlipVerificationInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbVoid?: ScbVoidCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsUncheckedCreateWithoutScbSlipVerificationInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbVoid?: ScbVoidUncheckedCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsCreateOrConnectWithoutScbSlipVerificationInput = {
    where: ScbPaymentsWhereUniqueInput
    create: XOR<ScbPaymentsCreateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedCreateWithoutScbSlipVerificationInput>
  }

  export type ScbPaymentsUpsertWithoutScbSlipVerificationInput = {
    update: XOR<ScbPaymentsUpdateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedUpdateWithoutScbSlipVerificationInput>
    create: XOR<ScbPaymentsCreateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedCreateWithoutScbSlipVerificationInput>
    where?: ScbPaymentsWhereInput
  }

  export type ScbPaymentsUpdateToOneWithWhereWithoutScbSlipVerificationInput = {
    where?: ScbPaymentsWhereInput
    data: XOR<ScbPaymentsUpdateWithoutScbSlipVerificationInput, ScbPaymentsUncheckedUpdateWithoutScbSlipVerificationInput>
  }

  export type ScbPaymentsUpdateWithoutScbSlipVerificationInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbVoid?: ScbVoidUpdateManyWithoutScbPaymentsNestedInput
  }

  export type ScbPaymentsUncheckedUpdateWithoutScbSlipVerificationInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbVoid?: ScbVoidUncheckedUpdateManyWithoutScbPaymentsNestedInput
  }

  export type ScbPaymentsCreateWithoutScbVoidInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbSlipVerification?: ScbSlipVerificationCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsUncheckedCreateWithoutScbVoidInput = {
    scbId?: string
    accountId?: string | null
    reverseFlag?: string | null
    payeeProxyId: string
    payeeProxyType: string
    payeeAccountNumber: string
    payerAccountNumber: string
    payerName: string
    sendingBankCode: string
    receivingBankCode?: string
    amount: string
    transactionId: string
    transactionDateandTime: string
    billPaymentRef1: string
    billPaymentRef2: string
    billPaymentRef3?: string | null
    currencyCode: string
    channelCode?: string | null
    transactionType: string
    partnerTransactionId?: string | null
    createdAt?: Date | string
    ScbSlipVerification?: ScbSlipVerificationUncheckedCreateNestedManyWithoutScbPaymentsInput
  }

  export type ScbPaymentsCreateOrConnectWithoutScbVoidInput = {
    where: ScbPaymentsWhereUniqueInput
    create: XOR<ScbPaymentsCreateWithoutScbVoidInput, ScbPaymentsUncheckedCreateWithoutScbVoidInput>
  }

  export type ScbPaymentsUpsertWithoutScbVoidInput = {
    update: XOR<ScbPaymentsUpdateWithoutScbVoidInput, ScbPaymentsUncheckedUpdateWithoutScbVoidInput>
    create: XOR<ScbPaymentsCreateWithoutScbVoidInput, ScbPaymentsUncheckedCreateWithoutScbVoidInput>
    where?: ScbPaymentsWhereInput
  }

  export type ScbPaymentsUpdateToOneWithWhereWithoutScbVoidInput = {
    where?: ScbPaymentsWhereInput
    data: XOR<ScbPaymentsUpdateWithoutScbVoidInput, ScbPaymentsUncheckedUpdateWithoutScbVoidInput>
  }

  export type ScbPaymentsUpdateWithoutScbVoidInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbSlipVerification?: ScbSlipVerificationUpdateManyWithoutScbPaymentsNestedInput
  }

  export type ScbPaymentsUncheckedUpdateWithoutScbVoidInput = {
    scbId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    reverseFlag?: NullableStringFieldUpdateOperationsInput | string | null
    payeeProxyId?: StringFieldUpdateOperationsInput | string
    payeeProxyType?: StringFieldUpdateOperationsInput | string
    payeeAccountNumber?: StringFieldUpdateOperationsInput | string
    payerAccountNumber?: StringFieldUpdateOperationsInput | string
    payerName?: StringFieldUpdateOperationsInput | string
    sendingBankCode?: StringFieldUpdateOperationsInput | string
    receivingBankCode?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    transactionDateandTime?: StringFieldUpdateOperationsInput | string
    billPaymentRef1?: StringFieldUpdateOperationsInput | string
    billPaymentRef2?: StringFieldUpdateOperationsInput | string
    billPaymentRef3?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    channelCode?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: StringFieldUpdateOperationsInput | string
    partnerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScbSlipVerification?: ScbSlipVerificationUncheckedUpdateManyWithoutScbPaymentsNestedInput
  }

  export type DepartmentMembershipCreateManyUserInput = {
    departmentMembershipId?: string
    subDepartmentId: string
    assignedAt?: Date | string
  }

  export type UserPermissionCreateManyUserInput = {
    userPermissionId?: string
    submenuId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentMembershipUpdateWithoutUserInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subDepartment?: SubDepartmentUpdateOneRequiredWithoutMembersNestedInput
  }

  export type DepartmentMembershipUncheckedUpdateWithoutUserInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipUncheckedUpdateManyWithoutUserInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUpdateWithoutUserInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submenu?: SubMenuUpdateOneRequiredWithoutPermissionsNestedInput
    project?: ProjectUpdateOneWithoutUserPermissionNestedInput
    departments?: PermissionDepartmentUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutUserInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyJobpositionInput = {
    userId?: string
    cmuitaccount: string
    cmuitaccount_name: string
    firstname_EN: string
    firstname_TH: string
    itaccounttype_EN: string
    itaccounttype_TH: string
    itaccounttype_id: string
    lastname_EN: string
    lastname_TH: string
    organization_code: string
    organization_name_EN: string
    organization_name_TH: string
    organization_vet?: string | null
    organization_vet_id?: string | null
    prename_EN: string
    prename_TH: string
    prename_id: string
    student_id?: string | null
    status_user?: string
    image?: string | null
    createAt: Date | string
    updateAt: Date | string
  }

  export type UserUpdateWithoutJobpositionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DepartmentMembership?: DepartmentMembershipUpdateManyWithoutUserNestedInput
    UserPermission?: UserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobpositionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DepartmentMembership?: DepartmentMembershipUncheckedUpdateManyWithoutUserNestedInput
    UserPermission?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJobpositionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cmuitaccount?: StringFieldUpdateOperationsInput | string
    cmuitaccount_name?: StringFieldUpdateOperationsInput | string
    firstname_EN?: StringFieldUpdateOperationsInput | string
    firstname_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_EN?: StringFieldUpdateOperationsInput | string
    itaccounttype_TH?: StringFieldUpdateOperationsInput | string
    itaccounttype_id?: StringFieldUpdateOperationsInput | string
    lastname_EN?: StringFieldUpdateOperationsInput | string
    lastname_TH?: StringFieldUpdateOperationsInput | string
    organization_code?: StringFieldUpdateOperationsInput | string
    organization_name_EN?: StringFieldUpdateOperationsInput | string
    organization_name_TH?: StringFieldUpdateOperationsInput | string
    organization_vet?: NullableStringFieldUpdateOperationsInput | string | null
    organization_vet_id?: NullableStringFieldUpdateOperationsInput | string | null
    prename_EN?: StringFieldUpdateOperationsInput | string
    prename_TH?: StringFieldUpdateOperationsInput | string
    prename_id?: StringFieldUpdateOperationsInput | string
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubDepartmentCreateManyMainDepartmentInput = {
    subDepartmentId?: string
    name_EN?: string | null
    name_TH: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubDepartmentUpdateWithoutMainDepartmentInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DepartmentMembershipUpdateManyWithoutSubDepartmentNestedInput
    PermissionDepartment?: PermissionDepartmentUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentUncheckedUpdateWithoutMainDepartmentInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentNestedInput
    PermissionDepartment?: PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentNestedInput
  }

  export type SubDepartmentUncheckedUpdateManyWithoutMainDepartmentInput = {
    subDepartmentId?: StringFieldUpdateOperationsInput | string
    name_EN?: NullableStringFieldUpdateOperationsInput | string | null
    name_TH?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipCreateManySubDepartmentInput = {
    departmentMembershipId?: string
    userId: string
    assignedAt?: Date | string
  }

  export type PermissionDepartmentCreateManySubDepartmentInput = {
    permissionDepartmentId?: string
    userPermissionId: string
  }

  export type DepartmentMembershipUpdateWithoutSubDepartmentInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepartmentMembershipNestedInput
  }

  export type DepartmentMembershipUncheckedUpdateWithoutSubDepartmentInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentMembershipUncheckedUpdateManyWithoutSubDepartmentInput = {
    departmentMembershipId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionDepartmentUpdateWithoutSubDepartmentInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermission?: UserPermissionUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type PermissionDepartmentUncheckedUpdateWithoutSubDepartmentInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermissionId?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionDepartmentUncheckedUpdateManyWithoutSubDepartmentInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    userPermissionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionCreateManyProjectInput = {
    userPermissionId?: string
    userId: string
    submenuId: string
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateWithoutProjectInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPermissionNestedInput
    submenu?: SubMenuUpdateOneRequiredWithoutPermissionsNestedInput
    departments?: PermissionDepartmentUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutProjectInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateManyWithoutProjectInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submenuId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuCreateManyMenuInput = {
    submenuId?: string
    name: string
    icon: string
    part?: string | null
    position?: number | null
    isProjectBased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUpdateWithoutMenuInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserPermissionUpdateManyWithoutSubmenuNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutMenuInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserPermissionUncheckedUpdateManyWithoutSubmenuNestedInput
  }

  export type SubMenuUncheckedUpdateManyWithoutMenuInput = {
    submenuId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    isProjectBased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionCreateManySubmenuInput = {
    userPermissionId?: string
    userId: string
    projectId?: string | null
    view?: boolean
    create?: boolean
    edit?: boolean
    delete?: boolean
    accessScope?: $Enums.AccessScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateWithoutSubmenuInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPermissionNestedInput
    project?: ProjectUpdateOneWithoutUserPermissionNestedInput
    departments?: PermissionDepartmentUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutSubmenuInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateManyWithoutSubmenuInput = {
    userPermissionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    view?: BoolFieldUpdateOperationsInput | boolean
    create?: BoolFieldUpdateOperationsInput | boolean
    edit?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    accessScope?: EnumAccessScopeFieldUpdateOperationsInput | $Enums.AccessScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionDepartmentCreateManyUserPermissionInput = {
    permissionDepartmentId?: string
    subDepartmentId: string
  }

  export type PermissionDepartmentUpdateWithoutUserPermissionInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    subDepartment?: SubDepartmentUpdateOneRequiredWithoutPermissionDepartmentNestedInput
  }

  export type PermissionDepartmentUncheckedUpdateWithoutUserPermissionInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionDepartmentUncheckedUpdateManyWithoutUserPermissionInput = {
    permissionDepartmentId?: StringFieldUpdateOperationsInput | string
    subDepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ScbSlipVerificationCreateManyScbPaymentsInput = {
    scbVerificationId?: string
    transTime: string
    transRef: string
    displayName: string
    bankType: string
    bankName: string
    transDate: string
    createdAt?: Date | string
  }

  export type ScbVoidCreateManyScbPaymentsInput = {
    scbVoidId?: string
    responseStatus: string
    responseCode: string
    responseCodeDescription: string
    extStatusDesc: string
    createdAt?: Date | string
  }

  export type ScbSlipVerificationUpdateWithoutScbPaymentsInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbSlipVerificationUncheckedUpdateWithoutScbPaymentsInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbSlipVerificationUncheckedUpdateManyWithoutScbPaymentsInput = {
    scbVerificationId?: StringFieldUpdateOperationsInput | string
    transTime?: StringFieldUpdateOperationsInput | string
    transRef?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bankType?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    transDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidUpdateWithoutScbPaymentsInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidUncheckedUpdateWithoutScbPaymentsInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScbVoidUncheckedUpdateManyWithoutScbPaymentsInput = {
    scbVoidId?: StringFieldUpdateOperationsInput | string
    responseStatus?: StringFieldUpdateOperationsInput | string
    responseCode?: StringFieldUpdateOperationsInput | string
    responseCodeDescription?: StringFieldUpdateOperationsInput | string
    extStatusDesc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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