import { Component } from 'vue-property-decorator'
import Vue from 'vue'

type TutorialInfo = {
  infos: {
    path: string;
    description: string;
    title: string;
  };
}

export type MolgenisSlideShow = TutorialInfo & Component
