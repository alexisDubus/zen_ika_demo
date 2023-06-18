
import http from "k6/http";

export const options = {
  iterations: 10000,
};

export default function () {
  const response = http.get("http://34.155.167.15:8080");
}

