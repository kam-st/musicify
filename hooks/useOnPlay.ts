import { Song } from "@/types";
import React from "react";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

function useOnPlay(songs: Song[]) {
  const player = usePlayer();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }
    // if you want only subscribed users to play songs
    // if (!subscription) {
    //   return subscribeModal.onOpen();
    // }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
}

export default useOnPlay;
