import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_METADATA_KEY = 'isPublic';

/**
 * @description Allows anonymous access to a resource
 *
 * @returns boolean
 */
export const IsPublic = () => SetMetadata(IS_PUBLIC_METADATA_KEY, true);

/**
 * @description Allows anonymous access to a resource.
 *
 * This is an alias of `IsPublic` decorator, only available to match `asp.net's` AllowAnonymous decorator.
 *
 * @returns boolean
 */
export const AllowAnonymous = IsPublic;
