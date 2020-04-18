export const getGamesList = async page => {
    const response =
      page === undefined || page == null
        ? await fetch(`https://www.balldontlie.io/api/v1/games?per_page=${28}`)
        : await fetch(
            `https://www.balldontlie.io/api/v1/games?page=${page}&per_page=${28}`
          );
    const data = response.json();
    return data;
  };
  
  export const getTeamsList = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/teams`
    );
    const data = response.json();
    return data;
  };
  