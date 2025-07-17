import { CustomImage, Iconography } from "@components";
import type { PokemonShort } from "@types";

export interface EvolutionBranchProps {
  branch: PokemonShort[];
  onClickPokemon: (pokemon: PokemonShort) => void;
}

export const EvolutionBranch = ({
  branch,
  onClickPokemon,
}: EvolutionBranchProps) => {
  const evolutions = branch.map((evolution, index, array) => (
    <div
      key={evolution.id}
      style={{
        width: `${100 / array.length}%`,
        flexDirection: "row",
        gap: "12px",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {index > 0 && (
        <Iconography.NavLeft
          width="25px"
          height="25px"
          containerProps={{
            transform: "rotateZ(-180deg)",
            flex: 1,
            position: "absolute",
            left: `-${100 / (array.length * 2)}%`,
          }}
        />
      )}
      <CustomImage
        src={evolution.sprite}
        containerStyles={{ objectFit: "contain", width: "70%" }}
        onClick={() => onClickPokemon(evolution)}
      />
    </div>
  ));

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {evolutions}
    </div>
  );
};
