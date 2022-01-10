package com.daviteq.vizuo_portable.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class UserInfoSession extends org.springframework.security.core.userdetails.User implements Serializable {

    private static final long serialVersionUID = 1L;
    private User userInfo;
    private boolean isShowSyncSite;

//    private transient SystemConfig systemConfig;

    private Map<String, byte[]> files;

    public UserInfoSession(String username, String password, User userInfo) {
        super(username, password, new ArrayList());
        this.userInfo = userInfo;
        this.isShowSyncSite = true;
        this.files = new HashMap<String, byte[]>();
    }

    public User getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(User userInfo) {
        this.userInfo = userInfo;
    }

    public boolean isShowSyncSite() {
        return isShowSyncSite;
    }

    public void setShowSyncSite(boolean isShowSyncSite) {
        this.isShowSyncSite = isShowSyncSite;
    }

//    public SystemConfig getSystemConfig() {
//        return systemConfig;
//    }

//    public void setSystemConfig(SystemConfig systemConfig) {
//        this.systemConfig = systemConfig;
//    }

    public Map<String, byte[]> getFiles() {
        return files;
    }

    public void setFiles(Map<String, byte[]> files) {
        this.files = files;
    }

    public byte[] getFile(String fileName) {
        byte[] ret = null;
        try {
            ret = this.getFiles().get(fileName);
        } catch (Exception ex) {
        }
        return ret;
    }

    public void addFile(String fileName, byte[] file) {
        if (this.getFiles() == null) {
            this.setFiles(new HashMap<String, byte[]>());
        }
        this.getFiles().put(fileName, file);
    }

    public void removeFile(String fileName) {
        if (this.files != null && this.files.containsKey(fileName)) {
            this.files.remove(fileName);
        }
    }
}
