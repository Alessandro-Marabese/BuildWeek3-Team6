import { useState } from "react";
import SettingsHeader from "./SettingsHeader";
import SettingsList from "./SettingsList";
import SettingsFooter from "./SettingsFooter";
import "./Settings.css";

const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState("Account Preferences");

  const renderContent = () => {
    const arrowIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path d="M9.41 14l-1.29-1.29L11.83 9H2V7h9.83L8.12 3.29 9.41 2l5.29 5.29a1 1 0 010 1.41z"></path>
      </svg>
    );
    switch (selectedSetting) {
      case "Account Preferences":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>Profile Information</h3>
              <div className="subsetting">
                <p>Name, location, and industry {arrowIcon}</p>
                <hr />
                <p>Personal demographic information {arrowIcon}</p>
                <hr />
                <p>Verifications {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>Display</h3>
              <div className="subsetting">
                <p>Dark mode {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>General Preferences</h3>
              <div className="subsetting">
                <p>Language {arrowIcon}</p>
                <hr />
                <p>Content language {arrowIcon}</p>
                <hr />
                <p>Autoplay videos {arrowIcon}</p>
                <hr />
                <p>Sound effects {arrowIcon}</p>
                <hr />
                <p>Showing profile photos {arrowIcon}</p>
                <hr />
                <p>Preferred Feed View {arrowIcon}</p>
                <hr />
                <p>People you unfollowed {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>Syncing Options</h3>
              <div className="subsetting">
                <p>Sync calendar {arrowIcon}</p>
                <hr />
                <p>Sync contacts {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>Subscriptions & Payments</h3>
              <div className="subsetting">
                <p>Upgrade for Free {arrowIcon}</p>
                <hr />
                <p>View purchase history {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>Partners & Services</h3>
              <div className="subsetting">
                <p>Microsoft {arrowIcon}</p>
              </div>
            </div>

            <div className="settings-section">
              <h3>Account Management</h3>
              <div className="subsetting">
                <p>Hibernate account {arrowIcon}</p>
                <hr />
                <p>Close account {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      case "Sign in & Security":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>Sign in & Security</h3>
              <div className="subsetting">
                <p>Account access {arrowIcon}</p>
                <hr />
                <p>Email addresses {arrowIcon}</p>
                <hr />
                <p>Phone numbers {arrowIcon}</p>
                <hr />
                <p>Passkeys {arrowIcon}</p>
                <hr />
                <p>Where you re signed in {arrowIcon}</p>
                <hr />
                <p>Devices that remember your password {arrowIcon}</p>
                <hr />
                <p>Two-step verification {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      case "Visibility":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>Visibility of your profile & network</h3>
              <div className="subsetting">
                <p>Profile viewing options {arrowIcon}</p>
                <hr />
                <p>Page visit visibility {arrowIcon}</p>
                <hr />
                <p>Edit your public profile {arrowIcon}</p>
                <hr />
                <p>Who can see or download your email address {arrowIcon}</p>
                <hr />
                <p>Who can see your connections {arrowIcon}</p>
                <hr />
                <p>Who can see members you follow {arrowIcon}</p>
                <hr />
                <p>Who can see your last name {arrowIcon}</p>
                <hr />
                <p>Representing your organizations and interests {arrowIcon}</p>
                <hr />
                <p>Page owners exporting your data {arrowIcon}</p>
                <hr />
                <p>Profile preview in Microsoft applications {arrowIcon}</p>
                <hr />
                <p>Profile discovery and visibility off LinkedIn {arrowIcon}</p>
                <hr />
                <p>Profile discovery using email address {arrowIcon}</p>
                <hr />
                <p>Profile discovery using phone number {arrowIcon}</p>
                <hr />
                <p>Blocking {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Visibility of your LinkedIn activity</h3>
              <div className="subsetting">
                <p>Manage active status {arrowIcon}</p>
                <hr />
                <p>Share job changes, education changes, and work anniversaries from profile {arrowIcon}</p>
                <hr />
                <p>Notify connections when you re in the news {arrowIcon}</p>
                <hr />
                <p>Mentioned by others {arrowIcon}</p>
                <hr />
                <p>Followers {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      case "Data Privacy":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>How LinkedIn uses your data</h3>
              <div className="subsetting">
                <p>Manage your data and activity {arrowIcon}</p>
                <hr />
                <p>Get a copy of your data {arrowIcon}</p>
                <hr />
                <p>Manage cookie preferences {arrowIcon}</p>
                <hr />
                <p>Search history {arrowIcon}</p>
                <hr />
                <p>Personal demographic information {arrowIcon}</p>
                <hr />
                <p>Social, economic, and workplace research {arrowIcon}</p>
                <hr />
                <p>Data for Generative AI Improvement {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Who can reach you</h3>
              <div className="subsetting">
                <p>Invitations to connect {arrowIcon}</p>
                <hr />
                <p>Invitations from your network {arrowIcon}</p>
                <hr />
                <p>Messages {arrowIcon}</p>
                <hr />
                <p>Research invites {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Messaging experience</h3>
              <div className="subsetting">
                <p>Focused Inbox</p>
                <hr />
                <p>Read receipts and typing indicators {arrowIcon}</p>
                <hr />
                <p>Messaging suggestions {arrowIcon}</p>
                <hr />
                <p>Message nudges {arrowIcon}</p>
                <hr />
                <p>Automated detection of harmful content {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Job seeking preferences</h3>
              <div className="subsetting">
                <p>Job application settings {arrowIcon}</p>
                <hr />
                <p>Share your profile when you click Apply for a job {arrowIcon}</p>
                <hr />
                <p>Signal your interest to recruiters at companies you ve created job alerts for {arrowIcon}</p>
                <hr />
                <p>Stored job applicant accounts {arrowIcon}</p>
                <hr />
                <p>Personalizing your job experience {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Other applications</h3>
              <div className="subsetting">
                <p>Permitted services {arrowIcon}</p>
                <hr />
                <p>Microsoft Word {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      case "Advertising Data":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>Profile data</h3>
              <div className="subsetting">
                <p>Connections {arrowIcon}</p>
                <hr />
                <p>Companies you follow {arrowIcon}</p>
                <hr />
                <p>Groups</p>
                <hr />
                <p>Education and Skills {arrowIcon}</p>
                <hr />
                <p>Job Information {arrowIcon}</p>
                <hr />
                <p>Employer {arrowIcon}</p>
                <hr />
                <p>Customized display format {arrowIcon}</p>
                <hr />
                <p>Profile Location {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Activity and inferred data</h3>
              <div className="subsetting">
                <p>Inferred city location {arrowIcon}</p>
                <hr />
                <p>Interests and traits {arrowIcon}</p>
                <hr />
                <p>Age range {arrowIcon}</p>
                <hr />
                <p>Gender {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Third-party data</h3>
              <div className="subsetting">
                <p>Ads beyond LinkedIn {arrowIcon}</p>
                <hr />
                <p>Interactions with businesses {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      case "Notifications":
        return (
          <div className="settings-section-container">
            <div className="settings-section">
              <h3>Notifications you receive</h3>
              <div className="subsetting">
                <p>Searching for a job {arrowIcon}</p>
                <hr />
                <p>Hiring someone {arrowIcon}</p>
                <hr />
                <p>Connecting with others {arrowIcon}</p>
                <hr />
                <p>Network catch-up updates {arrowIcon}</p>
                <hr />
                <p>Posting and commenting {arrowIcon}</p>
                <hr />
                <p>Messaging {arrowIcon}</p>
                <hr />
                <p>Groups {arrowIcon}</p>
                <hr />
                <p>Pages {arrowIcon}</p>
                <hr />
                <p>Attending events {arrowIcon}</p>
                <hr />
                <p>News and reports {arrowIcon}</p>
                <hr />
                <p>Updating your profile {arrowIcon}</p>
                <hr />
                <p>Verifications {arrowIcon}</p>
                <hr />
                <p>Games {arrowIcon}</p>
              </div>
            </div>
            <div className="settings-section">
              <h3>Report history</h3>
              <div className="subsetting">
                <p>View your reports {arrowIcon}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <SettingsHeader />
        <hr className="settings-divider" />
        <SettingsList onSelectSetting={setSelectedSetting} />
      </div>
      <div className="settings-content">
        {renderContent()}
        <SettingsFooter />
      </div>
    </div>
  );
};

export default SettingsPage;