# 🩶 Kisu Bot

**Kisu** is a Discord utility and helper bot for Nairi. Get notified when your favorite series spawn and easily calculate wishlist totals!

## 🌟 What Does Kisu Do?

### Wishlist Calculation

When viewing your collection with `nc`, click on the ❤️ reaction to have Kisu total up the wishlist values on the page.

### Collection Filter Generation

When viewing `nsl` or `nwl`, click on the ✏️ reaction to have Kisu generate collection filter strings for you to use to easily search collections.

### Series Wishlist

Get notified when your favorite series spawns!

```
kswa Pokemon
kswa Naruto
kswa Attack on Titan
```

## 🩶 Add Kisu to Your Server

**[👉 Click Here to Invite Kisu Bot](https://discord.com/oauth2/authorize?client_id=1410837711656325251)**

_Required Permissions: Send Messages, Use Slash Commands, Add Reactions, Read Message History_

---

## 🎯 All Commands

### Series Wishlist Commands

#### Commands

| Command         | What It Does                       | Example          |
| --------------- | ---------------------------------- | ---------------- |
| `kswa <series>` | Add a series to your wishlist      | `kswa One Piece` |
| `kswr <series>` | Remove a series from your wishlist | `kswr One Piece` |
| `kswl`          | Show your current wishlist         | `kswl`           |
| `kswl @user`    | View someone else's wishlist       | `kswl @friend`   |
| `kswclear`      | Clear your entire wishlist         | `kswclear`       |

#### Slash Commands

| Command                               | What It Does                       | Example                                    |
| ------------------------------------- | ---------------------------------- | ------------------------------------------ |
| `/series wishlist add <series>`       | Add a series to your wishlist      | `/series wishlist add series:One Piece`    |
| `/series wishlist remove <series>`    | Remove a series from your wishlist | `/series wishlist remove series:One Piece` |
| `/series wishlist list`               | Show your current wishlist         | `/series wishlist list`                    |
| `/series wishlist list user:@friend`  | View someone else's wishlist       | `/series wishlist list user:@friend`       |
| `/series wishlist clear confirm:true` | Clear your entire wishlist         | `/series wishlist clear confirm:true`      |

### Other Commands

| Command  | What It Does        |
| -------- | ------------------- |
| `kshelp` | Show the help guide |
| `/help`  | Show the help guide |

### Collection Reactions

When viewing your card collection, react with:

- **❤️** - Calculate total wishlist value
- **✏️** - Generate collection filter strings from Characters Collected or Wish List embeds

---

## 🔧 Server Administrator Features

### Role-Based Wishlist Limits

Server admins can configure custom series wishlist limits for different roles:

#### Admin Commands

| Command                          | What It Does                    | Example                    |
| -------------------------------- | ------------------------------- | -------------------------- |
| `ksad wlrole list`               | List all configured role limits | `ksad wlrole list`         |
| `ksad wlrole set @role <limit>`  | Set wishlist limit for a role   | `ksad wlrole set @VIP 5`   |
| `ksad wlrole edit @role <limit>` | Edit wishlist limit for a role  | `ksad wlrole edit @VIP 10` |
| `ksad wlrole remove @role`       | Remove custom limit for a role  | `ksad wlrole remove @VIP`  |
| `ksad help`                      | Show admin command help         | `ksad help`                |

#### Slash Admin Commands

| Command              | What It Does                    | Example                               |
| -------------------- | ------------------------------- | ------------------------------------- |
| `/admin role list`   | List all configured role limits | `/admin role list`                    |
| `/admin role set`    | Set wishlist limit for a role   | `/admin role set role:@VIP limit:5`   |
| `/admin role edit`   | Edit wishlist limit for a role  | `/admin role edit role:@VIP limit:10` |
| `/admin role remove` | Remove custom limit for a role  | `/admin role remove role:@VIP`        |
| `/help`              | Show admin command help         | `/help category:admin`                |

### Admin Configuration Rules

- **Maximum Limit**: Cannot set limits higher than 10 series per role
- **Default Limit**: Users without configured roles get 3 series
- **Role Priority**: Users get the highest limit from their roles
- **Server Limit**: Maximum 8 role configurations per server
- **Permissions**: Requires Administrator or Manage Server permissions

### Example Setup

**Traditional Commands:**

```
ksad wlrole set @VIP 10        # VIP members get 10 series
ksad wlrole set @Supporter 7   # Supporters get 7 series
ksad wlrole set @everyone 5    # Everyone else gets 5 series
```

**Slash Commands:**

```
/admin role set role:@VIP limit:10           # VIP members get 10 series
/admin role set role:@Supporter limit:7      # Supporters get 7 series
/admin role set role:@everyone limit:5       # Everyone else gets 5 series
```
