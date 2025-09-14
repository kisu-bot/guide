# 🩶 Kisu Bot

**Kisu** is a Discord utility and helper bot for Nairi. Get notified when your favorite series spawn and easily manage your card collections!

## 🌟 What Does Kisu Do?

### 📋 **Series Wishlist Notifications**

- Add your favorite series to a personal series wishlist
- Get pinged when cards from those series spawn in your server
- Customizable limits based on your server roles (configured by admins)

### 🗂️ **Card Collection Tools**

- Extract all card codes from your collection pages instantly
- Calculate total wishlist values for your cards

## 🤖 Add Kisu to Your Server

**[👉 Click Here to Invite Kisu Bot](https://discord.com/oauth2/authorize?client_id=1410837711656325251)**

_Required Permissions: Send Messages, Use Slash Commands, Add Reactions, Read Message History_

---

## 📖 Quick Start Guide

### Step 1: Add Series to Your Wishlist

Ensure the series name matches exactly what is in Nairi (case insensitive). Your wishlist limit depends on your roles - check with server admins about role-specific limits.

```
kswa Pokemon
kswa Naruto
kswa Attack on Titan
```

### Step 2: Wait for Spawn Notifications

When someone spawns cards, you'll get messages like:

```
✨ **A card from your series wishlist has spawned!**
:one: Pokemon - @YourName
:three: Attack on Titan - @YourName
```

### Step 3: Use Collection Tools

1. Type `nc` before viewing your collection
2. React with 📝 to get all card codes on the page
3. React with ❤️ to calculate wishlist values

---

## 🎯 All Commands

### Series Wishlist Commands

| Command         | What It Does                       | Example          |
| --------------- | ---------------------------------- | ---------------- |
| `kswa <series>` | Add a series to your wishlist      | `kswa One Piece` |
| `kswr <series>` | Remove a series from your wishlist | `kswr One Piece` |
| `kswl`          | Show your current wishlist         | `kswl`           |
| `ksw  @user`    | View someone else's wishlist       | `kswl @friend`   |
| `kswclear`      | Clear your entire wishlist         | `kswclear`       |

### Other Commands

| Command  | What It Does        |
| -------- | ------------------- |
| `kshelp` | Show the help guide |

### Card Collection Reactions

When viewing your card collection, react with:

- **📝** - Get all card codes on the current page
- **❤️** - Calculate total wishlist value

---

## 🔧 Server Administrator Features

### Role-Based Wishlist Limits

Server admins can configure custom series wishlist limits for different roles:

| Command                          | What It Does                    | Example                    |
| -------------------------------- | ------------------------------- | -------------------------- |
| `ksad wlrole list`               | List all configured role limits | `ksad wlrole list`         |
| `ksad wlrole set <role> <limit>` | Set wishlist limit for a role   | `ksad wlrole set "VIP" 10` |
| `ksad wlrole set @role <limit>`  | Set limit using role mention    | `ksad wlrole set @VIP 10`  |
| `ksad wlrole remove <role>`      | Remove custom limit for a role  | `ksad wlrole remove "VIP"` |
| `ksad help`                      | Show admin command help         | `ksad help`                |

### Admin Configuration Rules

- **Maximum Limit**: Cannot set limits higher than 15 series per role
- **Default Limit**: Users without configured roles get 3 series
- **Role Priority**: Users get the highest limit from their roles
- **Server Limit**: Maximum 8 role configurations per server
- **Permissions**: Requires Administrator or Manage Server permissions

### Example Setup

```
ksad wlrole set @VIP 10        # VIP members get 10 series
ksad wlrole set "Supporter" 7  # Supporters get 7 series
ksad wlrole set @everyone 5    # Everyone else gets 5 series
```

---

## ❓ FAQ

### **Q: Why am I not getting notifications?**

- Check your series wishlist with `kswl` to make sure it's on your wishlist
- Make sure the series name matches exactly what appears in Nairi
- Series matching is case-insensitive but must be the exact name

### **Q: How many series can I add?**

- Your series limit depends on your roles in the server
- Default limit is 3 series per user
- Server admins can configure custom limits for different roles (up to 15 maximum)
- Check with your server admins about role-specific limits

### **Q: Do I get notified for all spawns?**

- Only when cards from your wishlisted series spawn
- You'll only see notifications for series you've specifically added

### **Q: Can I use this in multiple servers?**

- Yes! Your wishlist is separate for each Discord server
- Add different series in different servers if you want

### **Q: How do I configure role limits as an admin?**

- You need Administrator or Manage Server permissions
- Use `ksad wlrole` commands to configure limits for roles
- Users get the highest limit from all their roles
- Maximum limit per role is 15 series

---

**Happy Collecting!** 🎴✨
