import {
  DEFAULT_PORT,
  DEFAULT_IP_ADDRESS,
} from "../src/utility/constants/server-constants";

export const serverConfig = {
  ipAddress: process.env.IP_ADDRESS || DEFAULT_IP_ADDRESS,
  port: process.env.PORT || DEFAULT_PORT,
};
