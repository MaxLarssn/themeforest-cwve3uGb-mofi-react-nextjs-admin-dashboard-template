import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const FileSideButton = [
  {
    className: "primary",
    icon: <Home />,
    title: "Home",
  },
  {
    className: "light",
    icon: <Folder />,
    title: "All",
  },
  {
    className: "light",
    icon: <Clock />,
    title: "Recent",
  },
  {
    className: "light",
    icon: <Star />,
    title: "Starred",
  },
  {
    className: "light",
    icon: <AlertCircle />,
    title: "Recovery",
  },
  {
    className: "light",
    icon: <Trash2 />,
    title: "Deleted",
  },
];

export const QuickAccessData = [
  {
    title: "Videos",
    icon: <i className="fa fa-youtube-play font-danger" />,
  },
  {
    title: "Apps",
    icon: <i className="fa fa-th font-info"></i>,
  },
  {
    title: "Document",
    icon: <i className="fa fa-file-text-o font-secondary"></i>,
  },
  {
    title: "Music",
    icon: <i className="fa fa-music font-warning"></i>,
  },
  {
    title: "Download",
    icon: <i className="fa fa-download font-primary"></i>,
  },
  {
    title: "Folder",
    icon: <i className="fa fa-folder font-info"></i>,
  },
  {
    title: "Zip File",
    icon: <i className="fa fa-file-archive-o font-secondary"></i>,
  },
  {
    title: "Trash",
    icon: <i className="fa fa-trash font-danger"></i>,
  },
];

export const FileListData = [
  {
    id: 1,
    icon: "f-22 fa fa-folder font-info",
    name: "Logo.psd",
    size: "2.0 MB",
    modify: "7 hour ago",
    folderClass: "f-44 fa fa-file-archive-o txt-warning",
    title: "Tivo admin",
    folderSize: "20 file",
    modifyFolder: "2 Hour ago",
  },
  {
    id: 2,
    icon: "f-22 fa fa-file-excel-o font-success",
    name: "Backend.xls",
    size: "3.0 GB",
    modify: "2 Day ago",
    folderClass: "f-44 fa fa-folder txt-warning",
    title: "Viho admin",
    folderSize: "14 file",
    modifyFolder: "3 Hour ago",
  },
  {
    id: 3,
    icon: "f-22 fa fa-file-archive-o font-warning",
    name: "Project.zip",
    size: "1.9 GB",
    modify: "1 Day ago,",
    folderClass: "f-44 fa fa-file-archive-o txt-warning",
    title: "Unice admin",
    folderSize: "15 file",
    modifyFolder: "1 Day ago",
  },
  {
    id: 4,
    icon: "f-22 fa fa-folder font-primary",
    name: "Report.txt",
    size: "0.9 KB",
    modify: "1 Day ago",
    folderClass: "f-44 fa fa-folder txt-warning",
    title: "Koho admin",
    folderSize: "10 file",
    modifyFolder: "1 Day ago",
  },
];
