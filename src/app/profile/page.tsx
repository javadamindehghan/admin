"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import Image from "next/image";

interface Props {}

function Page(props: Props) {
  const { data: session } = useSession();
  const {} = props;

  return (
    <>
    
     
      {session ? (
        <Typography>
          Hey {session?.user?.name} Welcome to your profile
        </Typography>
      ) : (
        <Typography>
          <Button
            onClick={() => {
              signIn();
            }}
          >
            signIn
          </Button>
          to your profile
        </Typography>
      )}
      {session? <Typography>{ session?.user?.email}</Typography>:<Typography></Typography>}
     

      <main>
        <div className="container">
          <div className="target"></div>
          <div className="shadow"></div>
          <figure>
            <picture>
              <Image
                width="242"
                height="363"
                src={session ? session?.user?.image : "/avatar.png"}
                alt="profile picture"
              />
            </picture>
          </figure>
        </div>
      </main>
     
    </>
  );
}

export default Page;
