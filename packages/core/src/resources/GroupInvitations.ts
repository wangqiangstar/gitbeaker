import type { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceInvitations } from '../templates';
import type { InvitationSchema, AccessLevel } from '../templates/types';
import type {
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  ShowExpanded,
  GitlabAPIResponse,
} from '../infrastructure';

export interface GroupInvitations<C extends boolean = false> {
  all<E extends boolean = false, P extends 'keyset' | 'offset' = 'offset'>(
    groupId: string | number,
    options?: PaginatedRequestOptions<E, P>,
  ): Promise<GitlabAPIResponse<InvitationSchema[], C, E, P>>;

  invite<E extends boolean = false>(
    groupId: string | number,
    email: string,
    accessLevel: AccessLevel,
    options?: BaseRequestOptions<E>,
  ): Promise<GitlabAPIResponse<InvitationSchema, C, E, void>>;

  edit<E extends boolean = false>(
    groupId: string | number,
    email: string,
    options?: BaseRequestOptions<E>,
  ): Promise<GitlabAPIResponse<InvitationSchema, C, E, void>>;

  remove<E extends boolean = false>(
    groupId: string | number,
    email: string,
    options?: Sudo & ShowExpanded<E>,
  ): Promise<GitlabAPIResponse<InvitationSchema, C, E, void>>;
}

export class GroupInvitations<C extends boolean = false> extends ResourceInvitations<C> {
  constructor(options: BaseResourceOptions<C>) {
    /* istanbul ignore next */
    super('groups', options);
  }
}
