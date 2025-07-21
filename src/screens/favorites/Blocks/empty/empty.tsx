import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, PokedexBottomContent } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";

export const Empty = () => {
  return (
    <AppLayout
      header={{ type: "pokedex", title: "Favorites" }}
      bottomContent={<PokedexBottomContent />}
    >
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomImage
          src={ImageAssets.favoritesGuest}
          alt={"A boy in a pokemon suit"}
          containerStyles={{
            margin: "auto",
            maxWidth: "267px",
            height: "auto",
          }}
        />
        <Typography
          styles={{
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: "327px",
            marginTop: "16px",
          }}
        >
          {"Nothing here"}
        </Typography>
        <Typography
          styles={{
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
            maxWidth: "327px",
            marginTop: "4px",
          }}
        >
          {
            "To add favorites, go the pokedex, select a pokemon and hit the heart button"
          }
        </Typography>
      </div>
    </AppLayout>
  );
};
