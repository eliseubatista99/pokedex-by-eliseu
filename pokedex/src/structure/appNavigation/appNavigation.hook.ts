export interface AppNavigationOutputProps {
  onPokedexSelected: () => void;
  onRegionsSelected: () => void;
  onFavoritesSelected: () => void;
  onProfileSelected: () => void;
}

export const useAppNavigationHelper = (): AppNavigationOutputProps => {
  const handlePokedexSelected = () => {};

  const handleRegionsSelected = () => {};

  const handleFavoritesSelected = () => {};

  const handleProfileSelected = () => {};

  return {
    onPokedexSelected: handlePokedexSelected,
    onRegionsSelected: handleRegionsSelected,
    onFavoritesSelected: handleFavoritesSelected,
    onProfileSelected: handleProfileSelected,
  };
};
