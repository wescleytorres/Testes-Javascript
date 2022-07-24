import produce from 'immer';
import create from 'zustand';

const initialState = {
  open: false,
  products: [],
};

// const addProduct = (store, product) => {
//   if (store.state.products.includes(product)) {
//     return store.state.products;
//   }
//   return [...store.state.products, product];
// };

export const useCartStore = create(set => {
  const setState = fn => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    actions: {
      // no immer
      // toggle: () => set(store => ({ state: { ...store.state, open: !store.state.open } })),
      // reset: () => set(() => ({ state: { ...initialState } })),
      // add: product =>
      //   set(store => ({ state: { open: true, products: addProduct(store, product) } })),

      toggle() {
        setState(({ state }) => {
          state.open = !state.open;
        });
      },
      add(product) {
        setState(({ state }) => {
          const doesntExists = !state.products.find(({ id }) => id === product.id);
          if (doesntExists) {
            if (!product.quantity) {
              product.quantity = 1;
            }
            state.products.push(product);
            state.open = true;
          }
        });
      },
      increase(product) {
        setState(({ state }) => {
          const localProduct = state.products.find(({ id }) => id === product.id);
          if (localProduct) {
            localProduct.quantity++;
          }
        });
      },
      decrease(product) {
        setState(({ state }) => {
          const localProduct = state.products.find(({ id }) => id === product.id);
          if (localProduct && localProduct.quantity > 0) {
            localProduct.quantity--;
          }
        });
      },
      remove(product) {
        setState(({ state }) => {
          const exists = !!state.products.find(({ id }) => id === product.id);

          if (exists) {
            state.products = state.products.filter(({ id }) => {
              return id !== product.id;
            });
          }
        });
      },
      removeAll() {
        setState(({ state }) => {
          state.products = [];
        });
      },
      reset() {
        setState(store => {
          store.state = initialState;
        });
      },
    },
  };
});
