export const deletePost = (id) => {
  console.log('id',id);
  return { type: "DELETE_POST", payload: id };
};
