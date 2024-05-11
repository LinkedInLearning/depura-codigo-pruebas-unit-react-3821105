import { createSelector } from 'reselect';

export const selectUserPosts = createSelector(
    [
        (state) => state.posts.posts,
        (state) => state.perfiles.perfilActual,
    ],
    (posts, perfilActual) =>
        posts.filter(post => post.usuario.nombreUsuario === perfilActual)
);

export const selectUserInfo = createSelector(
    [
        (state) => state.perfiles.perfiles,
        (state) => state.perfiles.perfilActual,
    ],
    (perfiles, perfilActual) =>
        perfiles.find(perfil => perfil.nombreUsuario === perfilActual)
);
