import React from "react";

export interface ICard {
  id: string;
  name: string;
  type: string;
  url: string;
  size: string;
  dimension: string | null;
  upload_date: string;
  uploader: string;
  shared: Array | null,
  action?: () => void;
}