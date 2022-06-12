import { Router } from "restify-router";

const routerProfileInstance = new Router();

const localData = [
  {
    id: 1,
    profile: {
      name: "Cristhian",
      lastName: "H.",
    },
  },
  {
    id: 2,
    profile: {
      name: "Fernando",
      lastName: "Z.",
    },
  },
  {
    id: 3,
    profile: {
      name: "Alvaro",
      lastName: "B.",
    },
  },
];

routerProfileInstance.get("/", (req, res, next) => {
  return res.json(localData);
});

routerProfileInstance.get("/:profileId", async (req, res) => {
  try {
    const { profileId } = req.params;
    const userId = localData.find((element) => element.id == profileId);

    if (!userId) {
      return res
        .json({
          message: "User not found",
        })
        .status(404);
    }

    return res
      .json({
        message: `${userId.profile.name} has been found`,
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

export default routerProfileInstance;
