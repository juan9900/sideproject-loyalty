"use client";
import { useEffect } from "react";
import { generateApiToken } from "@/utils/generateJWT";

export default function CardsPage() {
  useEffect(() => {
    generateApiToken({
      key: "6crqkffRap673FYh8sGYOE",
      secret:
        "Yd5cL1wuSICwdhLSLTyGa1BlTJgEJ2D7dbQATSMAkl7s0fqm8Kkjxs1NY9xLXbg3",
      username: "juanluis9900",
    });

    return () => {
      // cleanup
    };
  }, []);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <h1>Cards</h1>
      </div>
    </main>
  );
}
