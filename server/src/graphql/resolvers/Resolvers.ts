import {IResolvers} from 'graphql-tools';
import {AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs} from '../generated';

export const UseResolvers: IResolvers = {
    Query: {
        async (_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
            return {
                token: 'token'
            }
        }
    },
    Mutation: {
        async register(_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
            return {
                token: 'token'
            }
        }
    }
}