export const createOrder = (order) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const custId = getState().firebase.auth.uid;
      const asset = getFirestore().projects;
      firestore.collection('orders').add({
        ...order,
        custFirstName: profile.firstName,
        custLastName: profile.lastName,
        // assetId: asset.uid,
        // assetName: asset.name,
        // assetCategory: asset.category,
        // assetPrice: asset.price,
        // assetAvatarURL: asset.avatarURL,
        // orderDate: asset.orderDate,
        // orderTime: asset.orderTime,
        custId: custId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_ORDER_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_ORDER_ERROR' }, err);
      });
    }
  };