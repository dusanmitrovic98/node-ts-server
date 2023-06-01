import {
  DEFAULT_PORT,
  DEFAULT_IP_ADDRESS,
} from "../src/utility/constants/const-server";

export const serverConfig = {
  ipAddress: process.env.IP_ADDRESS || DEFAULT_IP_ADDRESS,
  port: parseInt(process.env.PORT || DEFAULT_PORT),
};
