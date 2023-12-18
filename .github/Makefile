.SHELLFLAGS = -euc
SHELL = /bin/bash

## Project details
#############################
PROJECT_MAJOR_VERSION ?= $(shell echo $(CURRENT_RELEASE) | cut -f1 -d.)
PROJECT_MINOR_VERSION ?= $(shell echo $(CURRENT_RELEASE) | cut -f2 -d.)
PROJECT_PATCH_VERSION ?= $(shell echo $(CURRENT_RELEASE) | cut -f3 -d.)
PROJECT_OWNER ?= elastic

RELEASE_BRANCH ?= $(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION)
NEXT_PROJECT_MINOR_VERSION ?= $(PROJECT_MAJOR_VERSION).$(shell expr $(PROJECT_MINOR_VERSION) + 1).0
NEXT_RELEASE ?= $(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION).$(shell expr $(PROJECT_PATCH_VERSION) + 1)

BACKPORT_BRANCH_NAME = add-backport-next-$(NEXT_PROJECT_MINOR_VERSION)

## observability-docs specific
##############################
PROJECT_REVIEWERS ?= elastic/observablt-robots

## Update the references on the github labels using major.minor format
.PHONY: update-labels
update-labels:
	echo '  - name: backport patches to $(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION) branch' >> .mergify.yml
	echo '    conditions:'                  >> .mergify.yml
	echo '      - merged'                   >> .mergify.yml
	echo '      - base=main'                >> .mergify.yml
	echo '      - label=backport-$(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION)' >> .mergify.yml
	echo '    actions:'                     >>	.mergify.yml
	echo '      backport:'                  >>	.mergify.yml
	echo '        assignees:'               >>	.mergify.yml
	echo '          - "{{ author }}"'       >>	.mergify.yml
	echo '        labels:'                  >>	.mergify.yml
	echo '          - "backport"'           >>	.mergify.yml
	echo '        branches:'                >>	.mergify.yml
	echo '          - "$(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION)"' >>	.mergify.yml
	echo '        title: "[{{ destination_branch }}](backport #{{ number }}) {{ title }}"' >> .mergify.yml

## @help:prepare-major-minor-release:Prepare a major/minor release by creating a new branch reference.
.PHONY: prepare-major-minor-release
prepare-major-minor-release:
	git checkout -b $(RELEASE_BRANCH)

## @help:create-branch-major-minor-release:Pushes the changes on the project folder to the new RELEASE_BRANCH.
.PHONY: create-branch-major-minor-release
create-branch-major-minor-release:
	git push --set-upstream origin $(RELEASE_BRANCH)
	echo "You have to create a branch rule at https://github.com/$(PROJECT_OWNER)/observability-docs/settings/branch_protection_rules/new"
	echo "* Require pull request PROJECT_REVIEWERS before merging"
	echo "* Require status checks to pass before merging - CLA and Lint"

## @help:prepare-next-release:Prepare the original branch for the next release cycle.
.PHONY: prepare-next-release
prepare-next-release:
	git checkout -b $(BACKPORT_BRANCH_NAME)
	$(MAKE) update-labels
	if [ ! -z "$$(git status -s)" ]; then \
    	git status -s; \
    	git add --all; \
    	git commit -a -m "[Release] add-backport-next"; \
	fi

## @help:create-prs-next-release:Create the PRs with the next release cycle.
.PHONY: create-prs-next-release
create-prs-next-release:
	git checkout $(BACKPORT_BRANCH_NAME)
	git push --set-upstream origin add-backport-next-$(NEXT_PROJECT_MINOR_VERSION)
	gh pr create \
		--title "backport: Add $(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION) branch" \
		--body "Merge as soon as $(PROJECT_MAJOR_VERSION).$(PROJECT_MINOR_VERSION) branch was created." \
		--assignee "$(GITHUB_USERNAME)" \
		--reviewer "$(PROJECT_REVIEWERS)" \
		--label 'Team:Automation' || echo "There are no changes"
