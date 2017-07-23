// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import { getRepository } from 'github-flow-js';
import {
    REPOSITORY_REQUEST,
    REPOSITORY_REQUEST_SUCCESS,
    REPOSITORY_REQUEST_FAIL
} from 'constants';

// import flow types
import type { RepositoryEntity } from 'github-flow-js';

export function fetchRepository(owner: string, repo: string): ThunkAction {
    return async dispatch => {
        dispatch({
            type: REPOSITORY_REQUEST
        });

        try {
            const repository = await getRepository(owner, repo, {});

            dispatch({
                type: REPOSITORY_REQUEST_SUCCESS,
                payload: repository
            });
        } catch (e) {
            dispatch({
                type: REPOSITORY_REQUEST_FAIL
            })
        }
    }
}

export function setupRepository(repository: RepositoryEntity): Action {
    return {
        type: REPOSITORY_REQUEST_SUCCESS,
        payload: repository
    }
}
