import { InvalidGraphQLRequestError } from "apollo-server-core";

const settingsResolvers = {
  Query: {
    settings: (parent, args, context) => {
      console.log(parent);
      console.log(args);
      console.log(context.request.headers);

      var data = [
        {
          id: 1,
          name: "test1",
          users: []
        },
        {
          id: 2,
          name: "test2",
          users: []
        }
      ];
      if (args.name) {
        var matcher = new RegExp(args.name);
        data = data.filter(obj => obj.name.match(matcher));
      }

      return data;
    },
    setting: (parent, args, context) => {
      console.log(parent);
      console.log(args);
      console.log(context.request.headers);

      var data = [
        {
          id: 1,
          name: "test1",
          users: []
        },
        {
          id: 2,
          name: "test2",
          users: []
        }
      ];

      data = data.filter(obj => obj.id == args.id)[0];

      return data;
    }
  }
};

export default settingsResolvers;
