package com.daviteq.vizuo_portable.entity;

import java.util.Map;

//import com.daviteq.rest.client.AccessToken;

public class User {

    public static final transient String ID = "id";
    public static final transient String FULLNAME = "full_name";
    public static final transient String DATE_OF_BIRTH = "date_of_birth";
    public static final transient String GENDER = "gender";
    public static final transient String CONTACT_NUMBER = "contact_number";
    public static final transient String USERNAME = "username";
    public static final transient String PASSWORD = "password";
    public static final transient String LANGUAGE = "language";
    public static final transient String EMAIL_ADDRESS = "email_address";
    public static final transient String LAST_UPDATED = "last_updated";
    public static final transient String LAST_SIGNED_IN = "last_signed_in";
    public static final transient String FAIL_SIGN_IN_ATTEMPT = "fail_sign_in_attempt";
    public static final transient String RECOVER_PASSWORD_ATTEMPT = "recover_password_attempt";
    public static final transient String CREATED_DATE = "created_date";
    public static final transient String COUNTRY_CODE = "country_code";
    // public static final transient String IS_PASSWORD_EXPIRED =
    // "is_password_expired";
    public static final transient String IS_ACTIVED_EMAIL_ADDRESS = "is_actived_email_address";
    public static final transient String IS_ACTIVED_CONTACT_NUMBER = "is_actived_contact_number";
    public static final transient String IS_ADMINISTRATOR = "is_administrator";
    public static final transient String IS_CHANGE_PASSWORD = "is_change_password";
    public static final transient String LAST_CHANGED_PASSWORD = "last_changed_password";
    public static final transient String USER_STATUS = "status";
    public static final transient String ACCOUNT_ID = "account_id";

    public static final transient String USER_USERNAME_IDX = "user_username_idx";
    public static final transient String USER_EMAIL_ADDRESS_IDX = "user_email_address_idx";
    public static final transient String USER_CONTACT_NUMBER_IDX = "user_contact_number_idx";
    public static final transient String USER_ACCOUNT_ID_IDX = "user_account_id_idx";
    public static final transient String USER_STATUS_IDX = "user_status_idx";
    public static final transient String USER_IS_ADMINISTRATOR_IDX = "user_is_administrator_idx";
    public static final transient String USER_IS_ACTIVED_EMAIL_ADDRESS_IDX = "user_is_actived_email_address_idx";
    public static final transient String USER_IS_ACTIVED_CONTACT_NUMBER_IDX = "user_is_actived_contact_number_idx";

    private String id;

    private String fullName;

    private Long dateOfBirth;

    private String gender;

    private String contactNumber;

    private String language;

    private String username;

    private String password;

    private Integer failSignInAttempt;

    private Integer recoverPasswordAttempt;

    private String emailAddress;

    private Long lastUpdated;

    private Long lastSignedIn;

    private Long createdDate;

    private Boolean isPasswordExpired;

    private Boolean isActivedEmailAddress;

    private Long lastChangedPassword;

    private Boolean isChangePassword;

    private Boolean isActivedContactNumber;

    private Boolean isAdministrator;

    private String status;

    private String accountId;

    private String countryCode;

    private String dateOfBirthStr;
    private String createdDateStr;
    private String lastUpdatedStr;
    private String lastSignedInStr;

    private String createdDateLiveStamp;
    private String lastUpdatedLiveStamp;
    private String lastSignedInLiveStamp;

    private Map<String, Integer> permissions;
    private String accountName;
    private String accountStatus;

    private String sessionId;

    // thanhuy.nguyen add start 0000168
    private String dateFormatStr;
    private String timeFormatStr;
    // thanhuy.nguyen ad end 0000168

//    private Account account;
//
//    private AccessToken accessToken;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public Integer getFailSignInAttempt() {
        return failSignInAttempt;
    }

    public void setFailSignInAttempt(Integer failSignInAttempt) {
        this.failSignInAttempt = failSignInAttempt;
    }

    public Boolean getIsPasswordExpired() {
        return isPasswordExpired;
    }

    public void setIsPasswordExpired(Boolean isPasswordExpired) {
        this.isPasswordExpired = isPasswordExpired;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Boolean getIsActivedEmailAddress() {
        return isActivedEmailAddress;
    }

    public void setIsActivedEmailAddress(Boolean isActivedEmailAddress) {
        this.isActivedEmailAddress = isActivedEmailAddress;
    }

    public Boolean getIsActivedContactNumber() {
        return isActivedContactNumber;
    }

    public void setIsActivedContactNumber(Boolean isActivedContactNumber) {
        this.isActivedContactNumber = isActivedContactNumber;
    }

    public Boolean getIsAdministrator() {
        return isAdministrator;
    }

    public void setIsAdministrator(Boolean isAdministrator) {
        this.isAdministrator = isAdministrator;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Map<String, Integer> getPermissions() {
        return permissions;
    }

    public void setPermissions(Map<String, Integer> permissions) {
        this.permissions = permissions;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public Long getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Long dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Long getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Long lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public Long getLastSignedIn() {
        return lastSignedIn;
    }

    public void setLastSignedIn(Long lastSignedIn) {
        this.lastSignedIn = lastSignedIn;
    }

    public Long getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Long createdDate) {
        this.createdDate = createdDate;
    }

    public String getDateOfBirthStr() {
        return dateOfBirthStr;
    }

    public void setDateOfBirthStr(String dateOfBirthStr) {
        this.dateOfBirthStr = dateOfBirthStr;
    }

    public String getCreatedDateStr() {
        return createdDateStr;
    }

    public void setCreatedDateStr(String createdDateStr) {
        this.createdDateStr = createdDateStr;
    }

    public String getLastUpdatedStr() {
        return lastUpdatedStr;
    }

    public void setLastUpdatedStr(String lastUpdatedStr) {
        this.lastUpdatedStr = lastUpdatedStr;
    }

    public String getLastSignedInStr() {
        return lastSignedInStr;
    }

    public void setLastSignedInStr(String lastSignedInStr) {
        this.lastSignedInStr = lastSignedInStr;
    }

    public String getCreatedDateLiveStamp() {
        return createdDateLiveStamp;
    }

    public void setCreatedDateLiveStamp(String createdDateLiveStamp) {
        this.createdDateLiveStamp = createdDateLiveStamp;
    }

    public String getLastUpdatedLiveStamp() {
        return lastUpdatedLiveStamp;
    }

    public void setLastUpdatedLiveStamp(String lastUpdatedLiveStamp) {
        this.lastUpdatedLiveStamp = lastUpdatedLiveStamp;
    }

    public String getLastSignedInLiveStamp() {
        return lastSignedInLiveStamp;
    }

    public void setLastSignedInLiveStamp(String lastSignedInLiveStamp) {
        this.lastSignedInLiveStamp = lastSignedInLiveStamp;
    }

    public Long getLastChangedPassword() {
        return lastChangedPassword;
    }

    public void setLastChangedPassword(Long lastChangedPassword) {
        this.lastChangedPassword = lastChangedPassword;
    }

    public Boolean getIsChangePassword() {
        return isChangePassword;
    }

    public void setIsChangePassword(Boolean isChangePassword) {
        this.isChangePassword = isChangePassword;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getDateFormatStr() {
        return dateFormatStr;
    }

    public void setDateFormatStr(String dateFormatStr) {
        this.dateFormatStr = dateFormatStr;
    }

    public String getTimeFormatStr() {
        return timeFormatStr;
    }

    public void setTimeFormatStr(String timeFormatStr) {
        this.timeFormatStr = timeFormatStr;
    }

//    public Account getAccount() {
//        return account;
//    }
//
//    public void setAccount(Account account) {
//        this.account = account;
//    }
//
//    public AccessToken getAccessToken() {
//        return accessToken;
//    }
//
//    public void setAccessToken(AccessToken accessToken) {
//        this.accessToken = accessToken;
//    }

    public Integer getRecoverPasswordAttempt() {
        return recoverPasswordAttempt;
    }

    public void setRecoverPasswordAttempt(Integer recoverPasswordAttempt) {
        this.recoverPasswordAttempt = recoverPasswordAttempt;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }
}
