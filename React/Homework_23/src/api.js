export const API_URL = "https://ich-pb.slavalab.com";

export function createAvatarUrl(userData) {
  return `${API_URL}/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;
}
